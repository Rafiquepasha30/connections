import React, { useState } from "react";

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 3)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 2)}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
