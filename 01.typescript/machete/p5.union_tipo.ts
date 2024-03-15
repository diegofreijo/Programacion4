type Usuario =
    { tipo: "persona", persona: Persona }
    | { tipo: "nombre", nombre: string }
    | { tipo: "anonimo" }

interface Persona {
    nombre: string,
    apellido?: string,
    edad: number,
}

function nombreConEdad(usuarios: Usuario[]) {
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        switch (usuario.tipo) {
            case "persona":
                mostrarPersona(usuario.persona);
                break;
            case "nombre":
                mostrarNombre(usuario.nombre);
                break;
            case "anonimo":
                mostrarAnonimo();
                break;
            default:
                break;
        }
    }
}

const personas: Usuario[] = [
    { tipo: "persona", persona: { nombre: "Pepe", edad: 33 } },
    { tipo: "persona", persona: { nombre: "Lala", edad: 20, apellido: "Sanchez" } },
    { tipo: "nombre", nombre: "Toto" },
    { tipo: "anonimo" },
];

const resultados = nombreConEdad(personas);

function mostrarNombre(nombre: string) {
    console.log(`${nombre} y no se su edad`);
}

function mostrarPersona(persona: Persona) {
    if (persona.apellido === undefined)
        console.log(`${persona.nombre} tiene ${persona.edad} años`);
    else
        console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad} años`);
}

function mostrarAnonimo() {
    console.log(`Usuario anonimo`);
}

