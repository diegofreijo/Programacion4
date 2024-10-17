import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Contador } from "./Contador";
import { Cocina } from "./Cocina";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* <Contador></Contador> */}
        <Cocina></Cocina>
      </header>
    </div>
  );
};

export default App;
