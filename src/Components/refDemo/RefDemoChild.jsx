import React, { useImperativeHandle, forwardRef, useRef } from "react";

const RefDemoChild = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <div>
      <p>RefDemoChild</p>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default RefDemoChild;
