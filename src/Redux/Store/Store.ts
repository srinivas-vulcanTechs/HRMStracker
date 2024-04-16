import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "../Reducers";

// Define the type for the middleware array
const middleware: any = [thunk];

// Create the store with type annotations
const store = createStore<any, any>(
	rootReducer,
	{},
	applyMiddleware(...middleware)
);

export default store;
