namespace map_estructura_2 {
    type Alumno = string;
    type ColorMesa = "Rojo" | "Naranja" | "Amarillo";

    var alumnosPorColorMesa = new Map<ColorMesa, Alumno[]>();

    console.log("Arranca vacio");
    console.log(alumnosPorColorMesa);

    console.log("Agrego una asociacion");
    alumnosPorColorMesa.set("Naranja", ["Noeli"]);
    console.log(alumnosPorColorMesa);

    console.log("Agrego otro alumno pero en otro color");
    alumnosPorColorMesa.set("Rojo", ["Jimena"]);
    console.log(alumnosPorColorMesa);

    console.log("Siempre reemplaza valores, asi que tengo que crear un nuevo arreglo con lo que ya estaba mas el nuevo valor");
    alumnosPorColorMesa.set("Naranja", ["Noeli", "Rocio"]);
    console.log(alumnosPorColorMesa);

    console.log("Puedo abstraer ese proceso en una funcion");
    const agregarAlumno = (mapa: Map<ColorMesa, Alumno[]>, alumno: Alumno, color: ColorMesa) => {
        var alumnos = mapa.get(color)
        if(alumnos === undefined)
            alumnos = [];
        alumnos.push(alumno);
        mapa.set(color, alumnos)
    }
    agregarAlumno(alumnosPorColorMesa, "Anush", "Rojo");
    console.log(alumnosPorColorMesa);

    agregarAlumno(alumnosPorColorMesa, "Lucas", "Amarillo");
    console.log(alumnosPorColorMesa);
}

