import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incraseByOne = () => {
    setCounter(counter + 1);
  };
  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={incraseByOne}>plus</button>
      <button onClick={setToZero}>zero</button>
    </div>
  );
};

export default App;
