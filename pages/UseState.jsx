import { useState } from "react";
import NavBar from "./Components/Nav";

function LearningUseState() {
  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    if (counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
    <NavBar />
      <h1 className="w-6 h-6 bg-orange-400 mx-16">{counter}</h1>
      <button onClick={increaseCounter} className="w-6 h-6 bg-amber-400 mx-8">+</button>
      <button onClick={decreaseCounter} className="w-6 h-6 bg-amber-400 mx-8">-</button>
    </>
  );
}

export default LearningUseState;
