import { useState } from "react";
0;
const Display = ({ counter }) => <div>{counter}</div>;

// Componente boton donde se recibe el props donde recibe el evento Onclick y un elemento text
const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value...", counter);

  const incraseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const setToZero = () => {
    console.log("reseting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter}></Display>
      <Button onClick={incraseByOne} text="plus"></Button>
      <Button onClick={setToZero} text="zero"></Button>
      <Button onClick={decreaseByOne} text="minus"></Button>
    </div>
  );
};

export default App;
