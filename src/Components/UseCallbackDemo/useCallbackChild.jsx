import React from "react";

const UseCallbackChild = ({increment}) => {
  return (
    <div>
      <p>useCallbackChild</p>
      <button onClick={increment}>Increment Count using callback</button>
    </div>
  );
};

export default UseCallbackChild;
