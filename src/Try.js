import React from "react";

export default function Try() {
  const [counter, setCounter] = React.useState(30);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 500);
  }, [counter]);

  return (
    <div className="a">
      <div>Countdown: {counter === 0 ? "Time over" : counter}</div>
    </div>
  );
}
