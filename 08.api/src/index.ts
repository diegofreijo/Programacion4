import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { consultarListado } from "./Modelo";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
    const listado = await consultarListado();
    res.send(listado);
});

app.listen(port, () => {
    console.log(`[server]: Servidor iniciado en http://localhost:${port}`);
});