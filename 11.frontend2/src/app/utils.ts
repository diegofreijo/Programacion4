import { Ciudad } from "./Modelo";

// utils.ts
export async function api<T>(url: string): Promise<T> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}${url}`;
    console.log(urlCompleta);
    const response = await fetch(urlCompleta);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await (response.json() as Promise<T>);
}


export interface AgregarCiudadParams { nombre: string };

export async function agregarCiudad(params: AgregarCiudadParams): Promise<Ciudad> {
    const urlCompleta = `${process.env.NEXT_PUBLIC_URL_API}/v1/ciudad/agregar`;
    console.log(urlCompleta);

    const response = await fetch(urlCompleta, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await (response.json() as Promise<Ciudad>);
}

