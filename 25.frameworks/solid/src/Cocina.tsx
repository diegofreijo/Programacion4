import { Component, createSignal, For } from "solid-js";
import { Ensalada } from "./Ensalada";
import { AutoEnsalada } from "./AutoEnsalada";

export const [ingredientes, setIngredientes] = createSignal(["🍅", "🥬"]);

export const Cocina: Component<{}> = (props) => {
  const [nuevoIngrediente, setNuevoIngrediente] = createSignal("");

  return (
    <div>
      <Ensalada></Ensalada>
      <Ensalada></Ensalada>
      <Ensalada></Ensalada>
      <AutoEnsalada></AutoEnsalada>

      <input
        type="text"
        onInput={(e) => setNuevoIngrediente(e.currentTarget.value)}
      />
      <button
        onClick={() =>
          setIngredientes((actual) => [...actual, nuevoIngrediente()])
        }
      >
        Comprar
      </button>
    </div>
  );
};
