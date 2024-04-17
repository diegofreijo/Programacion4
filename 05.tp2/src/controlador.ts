import { Cocinero, Plan, crearPlan } from "./modelo";
import { mostrarEnConsola } from "./vista";

export function mostrarPlanDePrueba(semilla: number) {
    const cocineros: Cocinero[] = ["C1", "C2", "C3", "C4", "C5", "C6"];
    const nombresTortas: string[] = ["Lemon Pie", "Brownie", "Marquise"];
    const plan = crearPlan(cocineros, nombresTortas, semilla);

    mostrarEnConsola(plan, "Piso 1", "Piso 2", "Piso 3");
}

export function mostrarPlanDeTPs(semilla: number) {
    const cocineros: Cocinero[] = [
        "BORSA,     AGUSTIN ",
        "BRAGAZZI,  BELEN   ",
        "FRANCO,    VICTORIA",
        "GULLERIAN, ANUSH   ",
        "MIRAMONT,  ROCIO   ",
        "OLGUIN,    MANUEL  ",
        "PACIO,     NOELI   ",
        "RODRIGUES, AGUSTIN ",
        "ROZENBERG, LUCAS   ",
        "ZAPOLSKI,  JIMENA  ",
        "FRANCO,    MARTINA ",
        "FREIJO,    DIEGO   ",
    ];

    const nombresTortas: string[] = [
        "App1", "App2", "App3",
        "App4", "App5", "App6",
    ];
    const plan = crearPlan(cocineros, nombresTortas, semilla);

    mostrarEnConsola(plan, "TP2: modelado", "TP3: backend", "TP4: frontend");
}
