// // Version "basica"
// function sumarTodos(valores: number[]) {
//     var ret = 0;
//     for (let index = 0; index < valores.length; index++) {
//         const element = valores[index];
//         ret += element;
//     }
//     return ret;
// }

// Version de funcion anonima
// const sumarTodos = (valores: number[]) => {
//     var ret = 0;
//     valores.forEach((v) => ret += v);
//     return ret;
// }

// Version mas funcional
// function sumarTodos(valores: number[]) {
//     var ret = 0;
//     valores.forEach((v) => ret += v);
//     return ret;
// }

// Version muy funcional
// const sumarTodos = (valores: number[]) =>
//     valores.reduce((previo, actual) => previo + actual, 0);


// const valores = [2, 4, 1, 3];
// const resultado = sumarTodos(valores);
// console.log(resultado);
