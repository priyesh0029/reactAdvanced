import React, { useMemo } from "react";

const UseMemoChildCom = ({ value }) => {
  const expensiveValue = useMemo(() => {
    console.log("Computing expensive value : ",value);
    let result = 1;
    for (let i = 1; i <= value; i++) {
      result += i;
    }
    return result;
  }, [value]);
  return (
    <div>
      <p className="text-3xl font-bold underline">The result of expensive value is : {expensiveValue}</p>
    </div>
  );
};

export default UseMemoChildCom;
