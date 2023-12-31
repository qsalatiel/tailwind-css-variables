import { useState } from "react";

import styles from "./btn.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-brand-500">
        Hello world!
      </h1>
      <div>
        <button
          className={styles.btn}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="text-success-400 text-xxxs">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
