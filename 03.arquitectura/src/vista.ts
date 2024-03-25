import { Piso, Plan } from "./Modelo";

export function mostrarEnConsola(plan: Plan) {
    var { AsciiTable3, AlignmentEnum } = require('ascii-table3');

    // create table
    var table =
        new AsciiTable3('Plan')
            .setHeading('', 'Piso 1', 'Piso 2', 'Piso 3')
            // .setAlign(1, AlignmentEnum.CENTER)
            .addRowMatrix(
                plan.tortas.map(t => [t.nombre, verPiso(t.piso1), verPiso(t.piso2), verPiso(t.piso3)])
            );

    console.log(table.toString());
}

function verPiso(piso: Piso): string {
    return `${piso.cocinero1}, ${piso.cocinero2}`;
}

