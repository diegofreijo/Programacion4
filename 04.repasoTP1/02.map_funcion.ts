var numeros = [4, 2, 1, 3];

// console.log("Devuelve 10 veces el mismo numero");
// console.log(
//     numeros.map((n) => n * 10)
// )

// console.log("Devuelve un array de strings");
// console.log(
//     numeros.map((n) => n.toString())
// )

var personas = [
    { nombre: "Pepe", edad: 30 },
    { nombre: "Toto", edad: 22 },
    { nombre: "Lola", edad: 16 },
]


console.log("Extrae valores de un objeto");
console.log(
    personas.map((p) => p.nombre)
)


console.log("Extrae valores mas complejos");
console.log(
    personas.map((p) => `${p.nombre} tiene ${p.edad}`)
)
