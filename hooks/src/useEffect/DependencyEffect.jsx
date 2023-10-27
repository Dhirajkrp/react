import React, { useEffect, useState } from "react";

function DependencyEffect() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`useEffect executed ${counter} times`);
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCounter((prev) => prev + 1)}>
        `You have clicked ${counter} many times `
      </button>
    </div>
  );
}

export default DependencyEffect;
