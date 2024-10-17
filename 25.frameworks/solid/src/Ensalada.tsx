import { Component, createSignal, For } from "solid-js";
import { ingredientes } from "./Cocina";

export const Ensalada: Component<{}> = (props) => {
  const [contenidos, setContenidos] = createSignal(["🍅"]);

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
