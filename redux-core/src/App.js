import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Component1 from "./components/Component1";
function App() {
  return (
    <>
      <Provider store={store}>
        <Component1 />
      </Provider>
    </>
  );
}

export default App;
