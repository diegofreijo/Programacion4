import { Component, createSignal, For } from "solid-js";
import { ingredientes } from "./Cocina";

export const AutoEnsalada: Component<{}> = (props) => {
  const [contenidos, setContenidos] = createSignal(["🍅"]);

  setInterval(() => {    
    const nuevo = ingredientes()[Math.floor(Math.random() * ingredientes().length)];
    setContenidos((actual) => [...actual, nuevo]);
  }, 1000);

  return <div>{contenidos()}</div>;
};
