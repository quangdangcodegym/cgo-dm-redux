/*

#### REDUX CORE: configuration
// createStore đã bị deprecated nên cần chuyển qua legacy_createStore, DÙNG as để đặt tên lại cho trùng với trên mạng
import { legacy_createStore as createStore, compose } from "redux";
import rootReducer from "../reducer/rootReducer";

compose (sáng tác, dàn xếp) Enhancers (hỗ trợ, tăng cường)
composeEnhancers: dùng để apply thêm middleware: có thể là thunk hoặc view ở redux devtools
const composeEnhancers =
  "development" === process.env.NODE_ENV
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
const enhancer = composeEnhancers();
const store = createStore(rootReducer, {}, enhancer);

// Nếu không cần view chế độ devtools
const store = createStore(rootReducer);
*/

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";

const store = configureStore({ reducer: rootReducer });
export default store;
