"use client"

import { useEffect, useState } from "react";
import { Listado } from "./Modelo";
import api from "./utils";
import Ciudad from "@/components/Ciudad";


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
      {/* <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ultima Temperatura</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listado.ciudades.map(c =>
              <Ciudad key={c.id} ciudad={c}></Ciudad>
            )}
          </tbody>
        </table>
      </div> */}


      <div className="grid grid-cols-4 gap-16">
        {listado.ciudades.map(c =>
          <Ciudad key={c.id} ciudad={c}></Ciudad>
        )}
      </div>
    </>
  );
}
