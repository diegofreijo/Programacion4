import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Contador } from "./Contador";
import { Cocina } from "./Cocina";
import { Ensalada } from "./Ensalada";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Cocina></Cocina>
      </header>
    </div>
  );
};

export default App;
