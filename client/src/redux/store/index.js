import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducer from '../reducer/index.js';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;