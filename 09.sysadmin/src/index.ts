import express, { Express, Handler, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { agregarCiudad, borrarCiudad, consultarListado, verificarAlertas } from "./Modelo";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;

function errorHandler(
    error: Error, request: Request, response: Response, next: NextFunction
) {
    console.log(`Hubo un error! ${error.message}`);
    response.header("Content-Type", 'application/json');
    response.status(500).json({ mensaje: error.message });
}

// ...

app.use(cors());

app.use(express.json());

app.get("/v1/listado", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const listado = await consultarListado();
        res.send(listado);
    } catch (error) {
        next(error);
    }
});

app.post("/v1/ciudad/agregar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const nombre = req.body.nombre;
        const ciudad = await agregarCiudad(nombre);
        res.send(ciudad);
    } catch (error) {
        next(error);
    }
});

app.post("/v1/ciudad/borrar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const nombre = req.body.nombre;
        await borrarCiudad(nombre);
        res.send("OK");
    } catch (error) {
        next(error);
    }
});

app.post("/v1/alerta/verificar", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const alertas = await verificarAlertas();
        // await enviarAlertas(alertas);       // TODO: hacer :)
        res.send(alertas);
    } catch (error) {
        next(error);
    }
});

// El error handler tiene que ir al final para que sea el middleware siguiente a los 
// controladores que reciben el request arriba
app.use(errorHandler);


app.listen(port, () => {
    console.log(`[server]: Servidor iniciado en http://localhost:${port}`);
});