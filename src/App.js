import "./App.css";
import { useState } from "react";
import GuessTheNumber from "./GuessTheNumber";
import Try from "./Try";

function App() {
  const [value, setValue] = useState("");

  return (
    <body className="bac">
      <div className="App">
        <GuessTheNumber setValue={setValue} />
        <Try />
      </div>
    </body>
  );
}

export default App;
