import React from 'react'
import Component3 from './Component3';

export default  function Component2() {
  console.log("RERENDER Component 2");
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }