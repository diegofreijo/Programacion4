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
    console.log(ciudades);
    return { ciudades: ciudades };
}

// export function verificarAlertas(): Alerta[] {
//     // Proceso que se ejecuta cada una hora y chequea si hay que mandar una alerta
// }

