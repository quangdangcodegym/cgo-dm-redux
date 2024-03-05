import React, { useContext, useReducer } from "react";
import Component4 from "./Component4";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Component3() {
  const dispatch = useDispatch();

  
  const handleGenderhange = (e)=>{
    dispatch({
      type: "filter/byGender",
      payload: e.target.value
    })
  }
  const handleKwChange = (e)=>{
    dispatch({
      type: "filter/byKw",
      payload: e.target.value
    })
  }
  const handleAgeChange = (e)=>{
    dispatch({
      type: "filter/byAge",
      payload: e.target.value
    })
  }

  console.log("RERENDER Component 3");
  return (
    <>
      <h1>Component 3</h1>
      <select onChange={(e)=> handleGenderhange(e)}>
        <option value={"All"}>All</option>
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
      </select>
      <input onChange={(e)=> handleKwChange(e)} />
      <select onChange={(e)=> handleAgeChange(e)}>
        <option value={30}>30</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      <Component4 />
    </>
  );
}
