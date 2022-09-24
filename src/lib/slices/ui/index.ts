import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "./types";
import * as reducers from "./reducers";

const initialState: UIState = {
    value: 0
};

export const uiSlice = createSlice({
    name: "UserInterface",
    initialState,
    reducers: {
        ...reducers
    }
});

export const { increment } = uiSlice.actions;

export default uiSlice.reducer;