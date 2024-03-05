#### Dùng context API

1.  store
    const UserContext = createContext();
2.  dùng useReducer để khởi tạo. Sau đó lấy dispatch và state trong kho chung
    2.1 Tạo reducer
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
    2.2 Dùng useReducer để lấy dispatch và state trong KHO chung
    const [user, dispatch] = useReducer(reducer, initUser);

    2.3 Bọc trong Provider. Trong UserContext làm cho nó khả năng các thằng con có thể truy cập vào kho chung. value mình đưa vào sẽ là 1 ĐỐI TƯỢNG {user và dispatch}
    <UserContext.Provider value={{user, dispatch}}>
    <h1>Component1: {`Hello ${user.name} - status ${user.status} - count ${user.count}  again!`}</h1>
    <Component2/>
    </UserContext.Provider>
    2.4 Ở Các component con ai cần lấy state user và thằng dispatch thì lấy thông qua useContext
    const {user, dispatch} = useContext(UserContext);

#### Sumary Context API

Khi state trong kho chung thay đổi thì toàn bộ component được bọc trong provider sẽ RErender

- Vì useReducer này nó giống với useState, khác biệt ở đây là nó có thể viết LOGIC khi cập nhật State

#### Redux Core

1.  store
2.  root reducer
    2.1 reducer
    2.2 reducer
3.  actions (action creator)
4.  dispatch => useDispatch
5.  useContext (lấy 1 cục trong kho chung) => thay bằng useSelect (lấy các dữ liệu riêng biệt)
