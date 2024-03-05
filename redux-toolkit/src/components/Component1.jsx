import React, { useReducer } from 'react'
import Component2 from './Component2';
import { useSelector } from 'react-redux';


export default function Component1() {

  console.log("RERENDER Component 1");
  return (
    <>
      <Component2 />
    </>
      
  );
}