namespace p2_3 {

    type ResultadoBusqueda<T> =
        | { tipo: "exito", encontrado: T }
        | { tipo: "no_encontrado" }

    interface Animal { tipo: string }

    function formatearResultadoAnimal(resultado: ResultadoBusqueda<Animal>): string {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado.tipo}`;
        else
            return `No se encontro nada`;
    }

    const r4: ResultadoBusqueda<Animal> = { tipo: "exito", encontrado: { tipo: "Perro" } };
    console.log(formatearResultadoAnimal(r4));
}