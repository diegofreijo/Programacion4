export type Torta = { nombre: string, piso1: Piso, piso2: Piso, piso3: Piso };
export type Piso = { cocinero1: Cocinero, cocinero2: Cocinero };
export type Cocinero = string;

export interface Plan {
    tortas: Torta[]
}

export function crearPlan(cocineros: Cocinero[], nombresTortas: string[], semilla: number): Plan {
    // TODO: verificar que las cantidades de tortas y cocineros tenga sentido o tirar error
    // TODO: verificar que las tortas no repiten nombre
    // TODO: verificar que hay cantidad par de cocineros

    console.log(`Comenzando el armado del plan`);
    console.log(`Tortas:                ${nombresTortas}`);
    cocineros = mezclar(cocineros, semilla);
    console.log(`Cocineros mezclados:   ${cocineros}`);

    var tortas: Torta[] = [];

    for (let t = 0; t < nombresTortas.length; t++) {
        const nombreTorta = nombresTortas[t];

        const torta = {
            nombre: nombreTorta,
            piso1: armarPiso(cocineros, 1),
            piso2: armarPiso(cocineros, 2),
            piso3: armarPiso(cocineros, 3),
        }
        tortas.push(torta);

        cocineros = desplazarCocineros(cocineros);
    }

    const plan = { tortas };
    return plan;
}


//////////////////////////////////////
// Utilidades

// Mapea numeroPiso a estos indices de cocineros
// 1 -> 0, 1
// 2 -> 2, 3
// 3 -> 4, 5
function armarPiso(cocineros: Cocinero[], numeroPiso: number): Piso {
    return {
        cocinero1: cocineros[(numeroPiso - 1) * 2],
        cocinero2: cocineros[(numeroPiso - 1) * 2 + 1]
    };
}


// Mapea numeroPiso a estos indices de cocineros
// Izquierda
// 0 -> -2 -> 4
// 2 -> 0
// 4 -> 2

// Derecha
// 1 -> 3
// 3 -> 5
// 5 -> 7 -> 1

function desplazarCocineros(cocineros: Cocinero[]): Cocinero[] {
    var ret: Cocinero[] = [];
    var direccion = -2;
    for (let i = 0; i < cocineros.length; i++) {
        const nuevoi = mod(i + direccion, cocineros.length);
        ret[nuevoi] = cocineros[i];
        direccion *= -1;
    }
    return ret;
}


// function armarPiso(cocineros: Cocinero[]): Piso[] {
//     var ret: Piso[] = [];
//     for (let i = 0; i < cocineros.length; i += 2) {
//         const cocinero1 = cocineros[i];
//         const cocinero2 = cocineros[i + 1];
//         ret.push({ cocinero1, cocinero2 });
//     }
//     return ret;
// }

// function pisosValidos(pisos: Piso[]): boolean {
//     return pisos.every((piso, i) => {

//     });
// }

function mezclar<T>(array: T[], semilla: number) {

    // Un random que soporta semillas
    var MersenneTwister = require('mersenne-twister');
    var generator = new MersenneTwister(semilla);

    return array.map((a) => ({ sort: generator.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);
};


// Funcion modulo que soporta negativos
function mod(n: number, m: number): number {
    return ((n % m) + m) % m;
}
