namespace p1_4 {

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


function armarMapa(usuarios: Usuario[]): Map<string, Usuario> {
    var ret = new Map<string, Usuario>();

    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        if (usuario.tipo === "persona") {
            if (!ret.has(usuario.persona.nombre))
                ret.set(usuario.persona.nombre, usuario);
        } else if (usuario.tipo === "nombre") {
            if (!ret.has(usuario.nombre))
                ret.set(usuario.nombre, usuario);
        }
    }

    return ret;
}

function buscarPorNombre(nombre: string, usuariosMap: Map<string, Usuario>): ResultadoBusqueda {
    const usuario = usuariosMap.get(nombre);
    if (usuario === undefined)
        return { tipo: "no_encontrado" };
    else

        return { tipo: "exito", usuario };
}



    // Pocos usuarios
    const usuarios: Usuario[] = [
        { tipo: "persona", persona: { nombre: "Lala", edad: 20, apellido: "Sanchez" } },
        { tipo: "nombre", nombre: "Toto" },
        { tipo: "anonimo" },
        { tipo: "anonimo" },
        { tipo: "persona", persona: { nombre: "Pepe", edad: 33 } },
    ];

    const usuariosMap = armarMapa(usuarios);
    // console.log(usuariosMap);

    console.log(`Usuarios tiene: ${usuariosMap.size} nombres`);

    console.time('Pocos usuarios map');

    buscarPorNombre("Pepe", usuariosMap);

    console.timeEnd('Pocos usuarios map');



    // Banda de usuarios

    // Function to generate random integer within a range
    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate random string of length between min and max
    function generateRandomString(min: number, max: number): string {
        const length = getRandomInt(min, max);
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // Function to generate random Usuario
    function generateRandomUsuario(): Usuario {
        const tipoIndex = getRandomInt(0, 2);
        switch (tipoIndex) {
            case 0:
                return { tipo: "persona", persona: { nombre: generateRandomString(3, 7), edad: 20, apellido: "Sanchez" } };
            case 1:
                return { tipo: "nombre", nombre: generateRandomString(3, 7) };
            default:
                return { tipo: "anonimo" };
        }
    }

    // Create array of 10000 Usuario
    const bandaDeUsuarios: Usuario[] = Array.from({ length: 10000 }, () => generateRandomUsuario());
    bandaDeUsuarios.push({ tipo: "persona", persona: { nombre: "Pepe", edad: 33 } });

    const bandaDeusuariosMap = armarMapa(bandaDeUsuarios);
    // console.log(bandaDeusuariosMap);

    console.log(`Banda de usuarios tiene: ${bandaDeusuariosMap.size} nombres`);
    console.time('Banda de usuarios map');

    buscarPorNombre("Pepe", bandaDeusuariosMap);

    console.timeEnd('Banda de usuarios map');
}