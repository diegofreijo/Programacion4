import { Ciudad } from "./Modelo";

// utils.ts
export async function api<T>(url: string): Promise<T> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}${url}`;
    const response = await fetch(urlCompleta);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await (response.json() as Promise<T>);
}


export interface AgregarCiudadParams { nombre: string };
export interface AgregarCiudadRespuesta { mensaje: string }

export async function agregarCiudad(params: AgregarCiudadParams): Promise<AgregarCiudadRespuesta> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}/v1/ciudad/agregar`;

    const response = await fetch(urlCompleta, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

    if (!response.ok) {
        var body = await response.text();
        return { mensaje: `Error agregando ciudad: ${body}` };
    }
    else {
        var ciudad = await (response.json() as Promise<Ciudad>);
        return { mensaje: `Ciudad ${ciudad.nombre} agregada con exito!` };
    }
}

