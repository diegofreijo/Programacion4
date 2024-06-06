"use client"

import { useEffect, useState } from "react";
import { Listado } from "./Modelo";
import Link from 'next/link'
import { api } from "./utils";
import Ciudad from "../components/Ciudad";

const LISTADO_INICIAL: Listado = { ciudades: [] };

export default function Home() {
  const [listado, setListado] = useState<Listado>(LISTADO_INICIAL);

  useEffect(() => {
    api<Listado>('/v1/listado')
      .then((data: Listado) => {
        setListado(data);
      })
  }, []);


  return (
    <>
      <h1 className="text-3xl mb-8">Listado</h1>

      <Link href="/agregar" className="btn btn-primary" prefetch={true}>
        Agregar Ciudad
      </Link>

      <div className="grid flex 
        lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        gap-8 p-4">
        {listado.ciudades.map(c =>
          <Ciudad key={c.id} ciudad={c}></Ciudad>
        )}
      </div>
    </>
  );
}
