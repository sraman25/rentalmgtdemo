import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import App from "./App";
import rootReducer from './reducers';
import thunk from "redux-thunk" 

const AppWrapper = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}> // Set context
      <App /> // Now App has access to context
    </Provider>
  )
}
export default AppWrapper;