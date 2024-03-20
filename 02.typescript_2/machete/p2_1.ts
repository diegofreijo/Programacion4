namespace p2 {

    type ResultadoBusqueda<T> =
        | { tipo: "exito", encontrado: T }
        | { tipo: "no_encontrado" }

    function formatearResultado<T>(resultado: ResultadoBusqueda<T>): string {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado}`;
        else
            return `No se encontro nada`;
    }

    // Aca funciona!

    const r1: ResultadoBusqueda<string> = { tipo: "exito", encontrado: "Pepe" };
    console.log(formatearResultado(r1));

    const r2: ResultadoBusqueda<number> = { tipo: "exito", encontrado: 33 };
    console.log(formatearResultado(r2));

    const r3: ResultadoBusqueda<boolean> = { tipo: "no_encontrado" };
    console.log(formatearResultado(r3));


    // Pero que pasa aca?

    interface Animal { tipo: string }

    const r4: ResultadoBusqueda<Animal> = { tipo: "exito", encontrado: { tipo: "Perro" } };
    console.log(formatearResultado(r4));


}