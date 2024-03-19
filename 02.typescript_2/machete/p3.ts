namespace p3 {

    type ResultadoBusqueda<T> =
        | { tipo: "exito", encontrado: T }
        | { tipo: "no_encontrado" }

    function formatearResultado<T>(resultado: ResultadoBusqueda<T>): string {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado}`;
        else
            return `No se encontro nada`;
    }

    async function buscar(): Promise<ResultadoBusqueda<string>> {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return { tipo: "exito", encontrado: "Pepe" };
    }


    async function test() {
        console.log(`Empezando a las ${new Date().toLocaleString()}`);

        const r1 = await buscar();
        console.log(formatearResultado(r1));

        console.log(`Termine a las ${new Date().toLocaleString()}`);
    }

    test();
}