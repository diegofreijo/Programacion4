/////////////////////////
// Numeros
// var numeros = [4, 2, 3, 1];

// console.log("Devuelve un nuevo array ordenado");
// console.log(numeros.sort());

// console.log("Tambien ordena el array que le pasaron");
// console.log(numeros);


/////////////////////////
// String
// var palabras = ["Alta", "Media", "Baja"];

// console.log("Ordena alfabeticamente");
// console.log(palabras.sort());



/////////////////////////
// Objetos

// Como ordeno objetos complejos?
var personas = [
    { nombre: "Pepe", edad: 30 },
    { nombre: "Toto", edad: 22 },
    { nombre: "Lola", edad: 16 },
]

// console.log("Por edad, de menor a mayor, version 1");
// console.log(
//     personas.sort((p1, p2) => {
//         // p1 > p2       1
//         // p1 < p2      -1
//         // p1 == p2      0

//         if (p1.edad > p2.edad) return 32;
//         if (p1.edad < p2.edad) return -66;
//         // Si llegue aca es porque p1.edad == p2.edad
//         return 0;
//     })
// );

// console.log("Por edad, de menor a mayor, version 2");
// console.log(
//     personas.sort((p1, p2) =>
//         p1.edad - p2.edad
//     )
// );

// console.log("Por edad, de mayor a menor");
// console.log(
//     personas.sort((p1, p2) =>
//         p2.edad - p1.edad
//     )
// );


console.log("Por orden alfabetico del nombre");
console.log(
    personas.sort((p1, p2) => {
        if (p1.nombre > p2.nombre) return 1;
        if (p1.nombre < p2.nombre) return -1;
        return 0;
    })
);


