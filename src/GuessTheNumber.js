import React from "react";
import { useState } from "react";

let randomNumber = Math.round(Math.random() * 10 + 1);

const GuessTheNumber = () => {
  const [value, setValue] = useState("");
  let results = "";

  const HintGusses = () => {
    if (value == "") results = "";
    if (value == randomNumber) results = <p className="Correct">Correct</p>;
    if (value > randomNumber)
      results = <p className="hight">Too high, Try again</p>;
    if (value < randomNumber)
      results = <p className="low">Too low, Try again</p>;
  };
  HintGusses();
  return (
    <>
      <h2 className="title"> Guess The Number </h2>
      <p className="lead">Guess a number between 1 and 10.</p>
      <input
        className="onChange"
        value={value}
        type="number"
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <br />
      <div>
        {results}
        <button className="hint" onClick={() => refreshPage()}>
          Click to play again!
        </button>
      </div>
    </>
  );
};
function refreshPage() {
  window.location.reload(false);
}

export default GuessTheNumber;
