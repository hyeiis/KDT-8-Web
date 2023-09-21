import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(() => number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}
