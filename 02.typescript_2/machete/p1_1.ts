type Usuario =
    | { tipo: "persona", persona: Persona }
    | { tipo: "nombre", nombre: string }
    | { tipo: "anonimo" }

interface Persona {
    nombre: string,
    apellido?: string,
    edad: number,
}

function buscarPorNombre(nombre: string, usuarios: Usuario[]) {
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        if (usuario.tipo === "persona") {
            if (usuario.persona.nombre === nombre)
                return usuario;
        } else if (usuario.tipo === "nombre") {
            if(usuario.nombre === nombre)
                return usuario;
        }
    }
}