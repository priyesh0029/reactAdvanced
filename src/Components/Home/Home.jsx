import { useCallback, useRef, useState } from "react";
import DemoHOC from "../HigherOrderComponents/DemoHOC";
import ReactMemo from "../ReactMemoDemo/ReactMemo";
import DemoCom from "./DemoCom";
import UseMemoChildCom from "../UseMemoDemo/UseMemoChildCom";
import UseCallbackChild from "../UseCallbackDemo/useCallbackChild";
import RefDemoChild from "../refDemo/RefDemoChild";

// import React from 'react'
const EnhancedComponent = DemoHOC(DemoCom);

const Home = () => {
  const [name, setName] = useState("John");
  const [count, setCount] = useState(0);

  const childRef = useRef(null)

  const handleNameChange = (e) => {
    setName(e.target.value);
  };


  const increment = () => {
    setCount(count + 1);
  };

  const focusChildInput = ()=>{
    childRef.current.focusInput()
  }

  const memoisedIncrement = useCallback(increment,[count])

  return (
    <div>
      <h1>This is my Homepage</h1>
      <EnhancedComponent heading="Hello World..!!" />
      <input type="text" value={name} onChange={handleNameChange} />
      {/* Rendering the memoized ChildComponent */}
      <ReactMemo name={name} />
      <UseCallbackChild increment={memoisedIncrement}/>
      <UseMemoChildCom value={count} />
      <RefDemoChild ref={childRef}/>
      <button onClick={focusChildInput}>refDemoButton</button>
    </div>
  );
};

export default Home;
