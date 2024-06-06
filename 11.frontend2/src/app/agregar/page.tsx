"use client"

import { useEffect, useState } from "react";
import { Listado } from "../Modelo";
import { AgregarCiudadParams, agregarCiudad } from "../utils";
import Link from 'next/link'

const LISTADO_INICIAL: Listado = { ciudades: [] };

export default function Home() {
  // const [listado, setListado] = useState<Listado>(LISTADO_INICIAL);

  // useEffect(() => {
  //   api<Listado>('/v1/listado')
  //     .then((data: Listado) => {
  //       setListado(data);
  //     })
  // }, []);

  const enviarFormulario = async (formData: FormData) => {
    const nombreCiudad = formData.get('nombreCiudad');
    if (nombreCiudad == undefined)
      throw new Error("");

    console.log(nombreCiudad);

    const params: AgregarCiudadParams = { nombre: nombreCiudad.toString() };
    agregarCiudad(params)
      .then(console.log);
  };


  return (
    <>
      <h1 className="text-3xl mb-8">Agregar Ciudad</h1>

      <form action={enviarFormulario} className="flex flex-col gap-y-2">
        <input name="nombreCiudad" placeholder="Buenos Aires" required></input>

        <button className="btn btn-primary" type="submit">Agregar</button>
      </form>
    </>
  );
}
