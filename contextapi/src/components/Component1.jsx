import React, { useReducer } from 'react'
import Component2 from './Component2';
import UserContext from './store';


const initUser = {
    "name": "Quang Dang",
    "status": false,
    "count": 0,
}
function createInitialState(initUser) {
  console.log("REINIT-----------");
    return initUser;
}
// đọc thêm về hàm useReducer: https://react.dev/reference/react/useReducer#avoiding-recreating-the-initial-state
/*
    Khi state thay đổi thì thằng useReducer sẽ gọi lại hàm rerender
*/
function reducer(state, action) {
    switch (action.type) {
      case 'status/change_status': 
        return {
            ...state,
            status: !state.status
        }
      case 'count/change': 
        return {
          ...state,
          count: action.payload
        }
      default:{
        return state;
      }
     
    }
    throw Error('Unknown action: ' + action.type);
  }
export default function Component1() {

  const [user, dispatch] = useReducer(reducer, initUser);

  console.log("RERENDER Component 1");
  return (
    <>
      { /*  đưa state chung là use và dispatch vào kho chung để thằng nào sài thì lấy sài */}
      <UserContext.Provider value={{user, dispatch}}>
        <h1>Component1: {`Hello ${user.name} - status ${user.status} - count ${user.count}  again!`}</h1>
        <Component2/>
      </UserContext.Provider>
    </>
  );
}