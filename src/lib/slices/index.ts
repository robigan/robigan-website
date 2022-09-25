import { combineReducers } from "@reduxjs/toolkit";
import uiReducer from "./ui";

export const rootReducer = combineReducers({
    ui: uiReducer
});