

function sumarNumeros(numeros: number[]) {
    var ret = 0;
    for (let index = 0; index < numeros.length; index++) {
        const element = numeros[index];
        ret += element;
    }
    return ret;
}

const numeros = [3, 2, 5];
const resultado = sumarNumeros(numeros);
console.log(resultado);


