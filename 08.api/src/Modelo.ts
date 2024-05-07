import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export interface Ciudad {
    id: number,
    nombre: string,
    temperatura: number
}
export interface Listado {
    ciudades: Ciudad[]
}
export interface Alerta {
    cuando: Date,
    nombreCiudad: string,
    temperaturaActual: number
}

async function abrirConexion() {
    return open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
    })
}

// Agrega una nueva Ciudad a la base de datos
export async function agregarCiudad(nombre: string): Promise<Ciudad> {
    const db = await abrirConexion();

    const temperatura = 0;
    const query = `INSERT INTO Ciudad (nombre, temperatura) VALUES ('${nombre}', ${temperatura})`;
    await db.run(query);


    const ciudad = await db.get<Ciudad>(`SELECT * FROM Ciudad WHERE nombre=${nombre}`);
    if (ciudad == undefined)
        throw new Error("Esto nunda deberia pasar!");

    return ciudad;
}

// Borra una ciudad de la base de datos
export async function borrarCiudad(nombre: string): Promise<void> {
    const db = await abrirConexion();

    const query = `DELETE FROM Ciudad WHERE nombre='${nombre}'`;
    await db.run(query);
}

async function actualizarTemperatura(idCiudad: number, temperatura: number) {
    const db = await abrirConexion();

    const query = `UPDATE Ciudad SET temperatura=${temperatura} WHERE id=${idCiudad}`;
    await db.run(query);
}

// Arma un Listado que contiene todas las ciudades en la base de datos
export async function consultarListado(): Promise<Listado> {
    const db = await abrirConexion();

    const ciudades: Ciudad[] = await db.all<Ciudad[]>('SELECT * FROM Ciudad');
    return { ciudades: ciudades };
}

// Proceso que se ejecuta cada una hora y chequea si hay que mandar una alerta
export async function verificarAlertas(): Promise<Alerta[]> {
    const db = await abrirConexion();

    const ciudades: Ciudad[] = await db.all<Ciudad[]>('SELECT * FROM Ciudad');

    // Itero todas las ciudades y si me devolvio alguna alerta la agrego a la lista de retorno
    var alertas: Alerta[] = [];

    for (let i = 0; i < ciudades.length; i++) {
        const ciudad = ciudades[i];
        var alerta = await verificarAlertasParaCiudad(ciudad);
        if (alerta != null)
            alertas.push(alerta);
    }

    return alertas;
}

async function verificarAlertasParaCiudad(ciudad: Ciudad): Promise<Alerta | null> {
    // Busco la latitud y longitud de esta ciudad. Estaria bueno guardar esta info en la tabla de Ciudades porque no cambia en el tiempo.
    const response1 = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad.nombre}&count=1&language=en&format=json`
    )
    const response1Json = await response1.json() as any
    // console.log(response1Json)
    const { latitude, longitude } = response1Json.results[0]

    // console.log(latitude)
    // console.log(longitude)

    // Busco la ultima temperatura en base a la lat y long
    const response2 = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&forecast_days=1`
    )
    const { current } = await response2.json() as any;
    var temperatura = current.temperature_2m;

    // Actualizo la termperatura actual para la ciudad
    console.log(`Temperatura para ${ciudad.nombre}: ${temperatura}`);
    actualizarTemperatura(ciudad.id, temperatura);


    // Ajuste los valores para que me tire mas alertas
    if (temperatura >= 30 || temperatura <= 18) {
        return {
            cuando: new Date(),
            nombreCiudad: ciudad.nombre,
            temperaturaActual: temperatura
        }
    } else {
        return null
    }
}
