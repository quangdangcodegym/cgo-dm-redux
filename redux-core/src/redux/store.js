// createStore đã bị deprecated nên cần chuyển qua legacy_createStore, DÙNG as để đặt tên lại cho trùng với trên mạng
import { legacy_createStore as createStore, compose } from "redux";
import rootReducer from "../reducer/rootReducer";

/*
compose (sáng tác, dàn xếp) Enhancers (hỗ trợ, tăng cường)
composeEnhancers: dùng để apply thêm middleware thunk hoặc view ở redux devtools
const composeEnhancers =
  "development" === process.env.NODE_ENV
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
const enhancer = composeEnhancers();
const store = createStore(rootReducer, {}, enhancer);

*/

const store = createStore(rootReducer);
export default store;
