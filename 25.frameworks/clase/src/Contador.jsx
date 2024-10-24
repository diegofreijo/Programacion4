import { Component, createSignal } from "solid-js";

export const Contador: Component<{}> = (props) => {
  const [cuenta, setCuenta] = createSignal(0);

  return (
    <div>
      <p>cuenta: {cuenta()}</p>
      <button onclick={() => setCuenta((actual) => actual + 1)}>
        Aumentar
      </button>
    </div>
  );
};
