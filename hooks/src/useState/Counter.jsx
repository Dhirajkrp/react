import React from "react";
// step 1 : import the hook from react
import { useState } from "react";

function Counter() {
  //step 2,3: initialize the state ,and create a function to set the state,
  const [count, setCount] = useState(0);
  // providing the button for the state change.
  return <button onClick={() => setCount(count + 1)}>Count {count}</button>;
}

export default Counter;
