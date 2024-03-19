namespace p1_2 {

    type Usuario =
        | { tipo: "persona", persona: Persona }
        | { tipo: "nombre", nombre: string }
        | { tipo: "anonimo" }

    interface Persona {
        nombre: string,
        apellido?: string,
        edad: number,
    }

    type ResultadoBusqueda =
        | { tipo: "exito", usuario: Usuario }
        | { tipo: "no_encontrado" }

    function buscarPorNombre(nombre: string, usuarios: Usuario[]): ResultadoBusqueda {
        for (let i = 0; i < usuarios.length; i++) {
            const usuario = usuarios[i];
            if (usuario.tipo === "persona") {
                if (usuario.persona.nombre === nombre)
                    return { tipo: "exito", usuario };
            } else if (usuario.tipo === "nombre") {
                if (usuario.nombre === nombre)
                    return { tipo: "exito", usuario };
            }
        }

        return { tipo: "no_encontrado" };
    }

    const usuarios: Usuario[] = [
        { tipo: "persona", persona: { nombre: "Pepe", edad: 33 } },
        { tipo: "persona", persona: { nombre: "Lala", edad: 20, apellido: "Sanchez" } },
        { tipo: "nombre", nombre: "Toto" },
        { tipo: "anonimo" },
        { tipo: "anonimo" },
    ];

    console.time('Pocos usuarios');

    console.log(buscarPorNombre("Lala", usuarios));
    console.log(buscarPorNombre("Toto", usuarios));
    console.log(buscarPorNombre("Fulanito", usuarios));
    console.log(buscarPorNombre("anonimo", usuarios));
    console.log(buscarPorNombre("Pepe", usuarios));

    console.timeEnd('Pocos usuarios');
}