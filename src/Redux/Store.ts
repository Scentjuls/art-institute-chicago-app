import thunk from "redux-thunk";
import { Reducer } from "./Reducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({ artwork: Reducer });
const Store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default Store;
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
