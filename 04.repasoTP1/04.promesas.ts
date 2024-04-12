// setTimeout
// console.log("Arrancando setTimeout");
// setTimeout(() => {
//     console.log("Termino setTimeout");
// }, 3000);


////////////////////////////////////////////////////////////
// Promise
// const promesa1 = new Promise<string>(
//     (resolve) => resolve("Hola desde promesa1")
// );
// promesa1.then(valor => console.log(valor));
// Tarea para el hogar: por que esto tambien funciona?
// promesa1.then(console.log);



// Promesa con setTimeout
console.log("Arrancando promesa con setTimeout");
const promesa2 = new Promise<string>(resolve => {
    setTimeout(() => {
        console.log("Termino setTimeout de promesa2");
        resolve("Hola desde promesa2");
    }, 3000)
});
promesa2.then(valor => console.log(valor));
promesa2.then(valor => console.log(valor));


////////////////////////////////////////////////////////////
// async/await
// async function promesaConAwait() {
//     console.log("Arrancando promesa3 con setTimeout y await");
//     const valor = await new Promise<string>(resolve => {
//         setTimeout(() => {
//             console.log("Termino setTimeout de promesa3");
//             resolve("Hola desde promesa3");
//         }, 3000)
//     });
//     console.log(valor);
// }
// promesaConAwait();



// Con todo esto, podemos armar la funcion esperar
async function esperar(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function probarEsperar() {
    console.log("Arrancando probarEsperar");

    await esperar(500);
    console.log("Fin de espera");
    await esperar(500);
    console.log("Fin de espera");
    await esperar(500);
    console.log("Fin de espera");

    console.log("Terminando probarEsperar");
}
probarEsperar()
