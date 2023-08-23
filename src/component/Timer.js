import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
