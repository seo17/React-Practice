import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  };
  const subtractValue = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>React course with Hitest</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={subtractValue}>Subtract value</button>
    </>
  );
}

export default App;
