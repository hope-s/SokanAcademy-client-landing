import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import persistStore from "redux-persist/es/persistStore";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const persist = persistStore(store)

export { persist }
export default store;