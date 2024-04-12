namespace map_estructura_1 {
    type Alumno = string;
    type ColorMesa = "Rojo" | "Naranja" | "Amarillo";

    var alumnosPorColorMesa = new Map<ColorMesa, Alumno>();

    console.log("Arranca vacio");
    console.log(alumnosPorColorMesa);

    console.log("Agrego una asociacion");
    alumnosPorColorMesa.set("Naranja", "Noeli");
    console.log(alumnosPorColorMesa);

    console.log("Agrego otro alumno pero en otro color");
    alumnosPorColorMesa.set("Rojo", "Jimena");
    console.log(alumnosPorColorMesa);

    console.log("Obtengo el valor para una clave");
    console.log(alumnosPorColorMesa.get("Rojo"));

    console.log("Si la clave no existe, devuelve al viejo y querido undefined");
    console.log(alumnosPorColorMesa.get("Amarillo"));

    console.log("Puedo preguntar si una clave existe");
    console.log(alumnosPorColorMesa.has("Amarillo"));

    console.log("Si agrego otro alumno al mismo color, pisa el que estaba");
    alumnosPorColorMesa.set("Naranja", "Rocio");
    console.log(alumnosPorColorMesa);
}