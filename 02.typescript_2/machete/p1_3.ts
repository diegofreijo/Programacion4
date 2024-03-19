namespace p1_3 {

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



    // Pocos usuarios
    const usuarios: Usuario[] = [
        { tipo: "persona", persona: { nombre: "Lala", edad: 20, apellido: "Sanchez" } },
        { tipo: "nombre", nombre: "Toto" },
        { tipo: "anonimo" },
        { tipo: "anonimo" },
        { tipo: "persona", persona: { nombre: "Pepe", edad: 33 } },
    ];

    console.log(`usuarios tiene: ${usuarios.length} usuarios`);


    console.time('Pocos usuarios');

    buscarPorNombre("Pepe", usuarios);

    console.timeEnd('Pocos usuarios');



    // Banda de usuarios
    const bandaDeUsuarios: Usuario[] = Array(1000000).fill([
        { tipo: "persona", persona: { nombre: "Lala", edad: 20, apellido: "Sanchez" } },
        { tipo: "nombre", nombre: "Toto" },
        { tipo: "anonimo" },
        { tipo: "anonimo" }]).flat();


    bandaDeUsuarios.push({ tipo: "persona", persona: { nombre: "Pepe", edad: 33 } });

    console.log(`bandaDeUsuarios tiene: ${bandaDeUsuarios.length} usuarios`);
    console.time('Banda de usuarios');

    buscarPorNombre("Pepe", bandaDeUsuarios);

    console.timeEnd('Banda de usuarios');
}