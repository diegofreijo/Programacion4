"use client"

import { useEffect, useState } from "react";
import { Listado } from "../Modelo";
import { AgregarCiudadParams, AgregarCiudadRespuesta, agregarCiudad } from "../utils";
import Link from 'next/link'

const RESPUESTA_INICIAL = { mensaje: "" };

export default function Home() {
  // El estado del formulario
  const [formulario, setFormulario] = useState<AgregarCiudadRespuesta>(RESPUESTA_INICIAL);

  // La funcion que se llama al mandar el formulario
  const enviarFormulario = async (formData: FormData) => {
    const nombreCiudad = formData.get('nombreCiudad');
    if (nombreCiudad == undefined) {
      setFormulario({ mensaje: "Falta el nombre de la ciudad!" });
    }
    else {
      const params: AgregarCiudadParams = {
        nombre: nombreCiudad.toString()
      };

      agregarCiudad(params)
        .then(setFormulario);
    }
  };


  // DOM
  return (
    <>
      <Link href="/" className="btn" prefetch={true}>
        Volver al listado
      </Link>

      <br></br>
      <br></br>

      <h1 className="text-3xl mb-8">Agregar Ciudad</h1>


      <br></br>

      {formulario.mensaje != ""
        ? <div role="alert" className="alert alert-info">
          <span>{formulario?.mensaje}</span>
        </div>
        : ""
      }
      <br></br>

      <form action={enviarFormulario} className="">
        <input name="nombreCiudad" placeholder="Nombre de la ciudad...." type="text" className="input input-bordered w-full max-w-xs"></input>

        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>
    </>
  );
}
