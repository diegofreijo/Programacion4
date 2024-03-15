// interface Persona {
//     nombre: string,
//     apellido?: string,
//     edad: number,
// }

// function nombreConEdad(personas: (Persona | string)[]) {
//     for (let i = 0; i < personas.length; i++) {
//         const persona = personas[i];
//         if (typeof persona == "string")
//             console.log(`${persona} a secas`);
//         else {
//             if (persona.apellido === undefined)
//                 console.log(`${persona.nombre} tiene ${persona.edad} años`);
//             else
//                 console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`);
//         }
//     }
// }

// const personas: (Persona | string)[] = [
//     { nombre: "Pepe", edad: 33 },
//     { nombre: "Lala", edad: 20, apellido: "Sanchez" },
//     "Toto",
// ];

// const resultados = nombreConEdad(personas);

