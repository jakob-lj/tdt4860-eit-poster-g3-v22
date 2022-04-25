import { useState } from "react";
import "./App.css";
import Poster from "./pages/poster";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Poster />
      </header>
    </div>
  );
}

export default App;
