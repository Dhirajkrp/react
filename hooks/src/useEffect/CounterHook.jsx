import React, { useState, useEffect } from "react";

function CounterHook() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const handleChange = () => {
    setCount((prev) => prev + 1);
  };
  return <button onClick={handleChange}>click {count} times</button>;
}

export default CounterHook;
