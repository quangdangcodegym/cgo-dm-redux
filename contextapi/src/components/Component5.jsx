import React from 'react'
import { useContext } from 'react';
import UserContext from './store';


export default function Component5() {

  // lấy state user và thằng dispatch từ kho chung và 
  const {user, dispatch} = useContext(UserContext);

  console.log("RERENDER Component 5");
    return (
      <>
        <h2>Component 5: {`Hello ${user.name} - status ${user.status} - count ${user.count}  again!`}</h2>
      </>
    );
  }