import React from 'react'

const ReactMemo = React.memo(({ name }) => {
    console.log('Rendering ChildComponent');
    return <div>{name}</div>;
  });

export default ReactMemo