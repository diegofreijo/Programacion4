import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export interface Ciudad {
    nombre: string,
    temperatura: number
}
export interface Listado {
    ciudades: Ciudad[]
}
export interface Alerta {
    cuando: Date,
    donde: Ciudad,
    temperaturaActual: number
}

async function abrirConexion() {
    return open({
        filename: 'db.sqlite',
        driver: sqlite3.Database
    })
}

// Modelo.ts
export async function agregarCiudad(nombre: string): Promise<Ciudad> {
    // Agrega una nueva Ciudad a la base de datos
    const db = await abrirConexion();

    const temperatura = 0;
    const query = `INSERT INTO Ciudad (nombre, temperatura) VALUES ('${nombre}', ${temperatura})`;
    await db.run(query);

    return { nombre, temperatura };
}

export async function borrarCiudad(nombre: string): Promise<void> {
    // Borra una ciudad de la base de datos
    const db = await abrirConexion();

    const query = `DELETE FROM Ciudad WHERE nombre='${nombre}'`;
    await db.run(query);
}

export async function consultarListado(): Promise<Listado> {
    // Arma un Listado que contiene todas las ciudades en la base de datos
    const db = await abrirConexion();

    const ciudades: Ciudad[] = await db.all<Ciudad[]>('SELECT * FROM Ciudad');
    return { ciudades: ciudades };
}

export async function verificarAlertas(): Promise<Alerta[]> {
    // Proceso que se ejecuta cada una hora y chequea si hay que mandar una alerta
    const db = await abrirConexion();

    const ciudades: Ciudad[] = await db.all<Ciudad[]>('SELECT * FROM Ciudad');

    var alertas = ciudades.map(async ciudad => {
        // Busco la latitud y longitud de esta ciudad
        const response1 = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${ciudad.nombre}&count=1&language=en&format=json`
        );
        const response1Json = await response1.json() as any;
        console.log(response1Json);
        const { latitude, longitude } = response1Json.results[0];

        console.log(latitude);
        console.log(longitude);

        // Busco la ultima temperatura en base a la lat y long
        const response2 = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&forecast_days=1`
        );
        const { current } = await response2.json() as any;
        console.log(`${ciudad.nombre}: ${current.temperature_2m}`);

        return null;
    });

    return [];
}