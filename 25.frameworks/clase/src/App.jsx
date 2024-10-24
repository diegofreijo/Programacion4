import logo from './logo.svg';
import styles from './App.module.css';
import Contador from './Contador';

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <Contador></Contador>
      </header>
    </div>
  );
}

export default App;
