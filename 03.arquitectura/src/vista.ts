import { Piso, Plan } from "./modelo";

export function mostrarEnConsola(plan: Plan, cabecera1: string, cabecera2: string, cabecera3: string) {
    var { AsciiTable3, AlignmentEnum } = require('ascii-table3');

    var table =
        new AsciiTable3('Plan')
            .setHeading('', cabecera1, cabecera2, cabecera3)
            .addRowMatrix(
                plan.tortas.map(t => [t.nombre, verPiso(t.piso1), verPiso(t.piso2), verPiso(t.piso3)])
            );

    console.log(table.toString());
}

function verPiso(piso: Piso): string {
    return `${piso.cocinero1} / ${piso.cocinero2}`;
}

