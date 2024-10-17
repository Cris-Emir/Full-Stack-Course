import { useState } from "react";
0;
const Display = (props) => {
  return <div>{props.counter}</div>;
};

// Componente boton donde se recibe el props donde recibe el evento Onclick y un elemento text 
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const incraseByOne = () => {
    setCounter(counter + 1);
  };
  const decreaseByOne = () => {
    setCounter(counter - 1);
  };
  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter}></Display>
      <Button onClick={incraseByOne} text='plus'></Button>
      <Button onClick={setToZero} text='zero'></Button>
      <Button onClick={decreaseByOne} text='minus'></Button>
    </div>
  );
};

export default App;
