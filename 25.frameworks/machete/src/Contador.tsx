import { Component, createSignal } from "solid-js";

export const Contador: Component<{}> = (props) => {
  const [cuenta, setCuenta] = createSignal(0);
  const dobleCuenta = () => cuenta() * 2;

  return (
    <div>
      <p>cuenta: {cuenta()}</p>
      <p>dobleCuenta: {dobleCuenta()}</p>
      <button onclick={() => setCuenta((actual) => actual + 1)}>
        Aumentar
      </button>
    </div>
  );
};
