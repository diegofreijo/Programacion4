namespace p4 {

    let emailRegex = new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);

    let validos = [
        "me@diegofreijo.com",
        "pepe1@gmail.net",
        "123123@yahoo.co",
    ];

    console.log("Probando los validos");

    validos.forEach((a) => {
        console.log(emailRegex.test(a))
    });



    let invalidos = [
        "@diegofreijo.com",
        "pepe1@asd1.net",
        "123123@yahoo.a",
    ];

    console.log("Probando los invalidos");

    invalidos.forEach((a) => {
        console.log(emailRegex.test(a))
    });
}