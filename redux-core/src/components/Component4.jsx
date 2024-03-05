import React from 'react'
import Component5 from './Component5';


export default function Component4() {
  console.log("RERENDER Component 4");
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }