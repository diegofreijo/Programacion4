module Controlador {

    // import * as Modelo from 'Modelo';
    // import { Cocinero } from './modelo';

    export function mostrarPlanDePrueba() {
        const cocineros: Modelo.Cocinero[] = ["Pepe"];
        const nombresTortas: string[] = ["Lemon Pie", "Brownie", "Marquise"];
        Modelo.crearPlan(cocineros, nombresTortas);
    }
}