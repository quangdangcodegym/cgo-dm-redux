import React, { useContext, useReducer } from 'react'
import Component4 from './Component4';
import UserContext from './store';

export default function Component3() {
    const {dispatch } = useContext(UserContext);
    const handleChange = (value)=>{
      if(value !== undefined){
        dispatch({
          type: 'count/change',
          payload: value
        })
      }else{
        dispatch({
          type: 'status/change_status'
        })
      }
      
    }
    console.log("RERENDER Component 3");
    return (
      <>
        <h1>Component 3</h1>
        <button onClick={()=> handleChange()}>Change</button>
        <input onChange={(evt)=> handleChange(evt.target.value)} />
        <Component4  />
      </>
    );
  }
  