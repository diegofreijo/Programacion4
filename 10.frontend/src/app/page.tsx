"use client"

import { useEffect, useState } from "react";
import { Listado } from "./Modelo";
import api from "./utils";


const LISTADO_INICIAL: Listado = { ciudades: [] };

export default function Home() {
  const [listado, setListado] = useState<Listado>(LISTADO_INICIAL);

  useEffect(() => {
    api<Listado>('http://15.228.226.164/v1/listado')
      .then(data => {
        setListado(data);
      })
  }, []);



  return (
    <>
      <h1 className="text-3xl mb-8">Listado</h1>
      <ul className="list-inside list-disc">
        {listado.ciudades.map(c => <li key={c.id}>{c.nombre}</li>)}
      </ul>
    </>
  );
}
