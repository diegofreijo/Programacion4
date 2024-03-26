import { Cocinero, Plan, crearPlan } from "./modelo";
import { mostrarEnConsola } from "./vista";

export function mostrarPlanDePrueba() {
    const cocineros: Cocinero[] = ["C1", "C2", "C3", "C4", "C5", "C6"];
    const nombresTortas: string[] = ["Lemon Pie", "Brownie", "Marquise"];
    const plan = crearPlan(cocineros, nombresTortas, 222);

    mostrarEnConsola(plan);
}
