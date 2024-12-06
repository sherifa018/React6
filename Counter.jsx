import { useState } from "react";
import { useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState("");
  useEffect(() => {
    document.title = `count=${counter}`;
  });
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={Increment}>Inc</button>
      <button onClick={Decrement}>Dec</button>
    </div>
  );
};

export default Counter;
