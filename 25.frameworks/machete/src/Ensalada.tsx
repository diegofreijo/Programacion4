import { Component, createSignal, For } from "solid-js";
import { ingredientes } from "./Cocina";

const [contenidos, setContenidos] = createSignal(["🍅"]);

export const Ensalada: Component<{}> = (props) => {
  
  return (
    <div>
      {contenidos()}
      <div>
        <For each={ingredientes()}>
          {(item) => (
            <button
              onClick={() => setContenidos((actual) => [...actual, item])}
            >
              {item}
            </button>
          )}
        </For>
      </div>
    </div>
  );
};
