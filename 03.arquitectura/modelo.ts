namespace Modelo {

    type Torta = { nombre: string, piso1: Piso, piso2: Piso, piso3: Piso };
    type Piso = { cocinero1: Cocinero, cocinero2: Cocinero };
    type Cocinero = string;

    interface Plan {
        tortas: Torta[]
    }

    function crearPlan(cocineros: Cocinero[], nombresTortas: string[]): Plan {
        // TODO: verificar que las cantidades de tortas y cocineros tenga sentido o tirar error
        // TODO: verificar que las tortas no repiten nombre
        // TODO: verificar que hay cantidad par de cocineros

        console.log(`Comenzando el armado del plan`);
        console.log(`Cocineros:\n${cocineros}`);
        console.log(`Tortas:\n${nombresTortas}`);

        const piso1 = armarPiso1(cocineros);
        console.log(`Piso 1: ${piso1}`);

        const piso2 = armarPiso2(cocineros, piso1);
        console.log(`Piso 2: ${piso2}`);

        throw new Error("falta");
        return { tortas: [] };
    }

    function armarPiso1(cocineros: Cocinero[]): Piso[] {
        return armarPiso(cocineros);
    }

    function armarPiso2(cocineros: Cocinero[], piso1: Piso[]): Piso[] {
        const mezclados = mezclar(cocineros);
        return armarPiso(mezclados);
    }

    // Utilidades
    function armarPiso(cocineros: Cocinero[]): Piso[] {
        var ret: Piso[] = [];
        for (let i = 0; i < cocineros.length; i += 2) {
            const cocinero1 = cocineros[i];
            const cocinero2 = cocineros[i + 1];
            ret.push({ cocinero1, cocinero2 });
        }
        return ret;
    }

    function mezclar<T>(array: T[]) {
        return array.map((a) => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value);
    };


}