import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { agregarCiudad, borrarCiudad, consultarListado, verificarAlertas } from "./Modelo";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/v1/listado", async (req: Request, res: Response) => {
    const listado = await consultarListado();
    res.send(listado);
});

app.post("/v1/ciudad/agregar", async (req: Request, res: Response) => {
    const nombre = req.body.nombre;
    const ciudad = await agregarCiudad(nombre);
    res.send(ciudad);
});

app.post("/v1/ciudad/borrar", async (req: Request, res: Response) => {
    const nombre = req.body.nombre;
    await borrarCiudad(nombre);
    res.send("OK");
});

app.post("/v1/alerta/verificar", async (req: Request, res: Response) => {
    const alertas = await verificarAlertas();
    res.send(alertas);
});

app.listen(port, () => {
    console.log(`[server]: Servidor iniciado en http://localhost:${port}`);
});