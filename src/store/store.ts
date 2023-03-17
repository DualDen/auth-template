import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./reducers/AuthSlice";
import {useDispatch} from "react-redux";
const rootReducer = combineReducers({
    authSlice
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type dispatch = ReturnType<typeof useDispatch<AppDispatch>>
