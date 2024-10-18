import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log('value now', newValue)  // imprime el nuevo valor en la consola
    setValue(newValue)
  }


  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
      
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>

    </div>
  );
};

export default App;
