import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { agregarCiudad, borrarCiudad, consultarListado, verificarAlertas } from "./Modelo";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
    const listado = await consultarListado();
    res.send(listado);
});

// index.ts
app.get("/agregar/:nombre", async (req: Request, res: Response) => {
    const nombre = req.params.nombre;
    const ciudad = await agregarCiudad(nombre);
    res.send(ciudad);
});

app.get("/borrar/:nombre", async (req: Request, res: Response) => {
    const nombre = req.params.nombre;
    await borrarCiudad(nombre);
    res.send("OK");
});


app.get("/verificarAlertas", async (req: Request, res: Response) => {
    const alertas = await verificarAlertas();
    res.send(alertas);
});

app.listen(port, () => {
    console.log(`[server]: Servidor iniciado en http://localhost:${port}`);
});