import React, { useState } from "react";

function Counter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <span>Count: {count}</span>
      <button onClick={() => setCount(initialCount)}> Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}> Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}> Decrement</button>
    </>
  );
}

export default Counter2;
