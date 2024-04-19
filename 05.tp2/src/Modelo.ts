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

export function agregarCiudad(nombre: string): Ciudad {
    // Agrega una nueva Ciudad a la base de datos
}

export function borrarCiudad(ciudad: Ciudad): void {
    // Borra una ciudad de la base de datos
}

export function consultarListado(): Listado {
    // Arma un Listado que contiene todas las ciudades en la base de datos
}

export function verificarAlertas(): Alerta[] {
    // Proceso que se ejecuta cada una hora y chequea si hay que mandar una alerta
}