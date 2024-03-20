namespace p2_2 {

    type ResultadoBusqueda<T> =
        | { tipo: "exito", encontrado: T }
        | { tipo: "no_encontrado" }

    interface Mostrable {
        mostrar: () => string
    }

    function formatearResultado<T>(resultado: ResultadoBusqueda<T>): string {
        if (resultado.tipo === "exito")
            return `Se encontro a ${resultado.encontrado.mostrar}`;
        else
            return `No se encontro nada`;
    }

    const miMostrable: Mostrable = {
        mostrar: function (): string {
            return "Hola soy miMostrable";
        }
    }

}