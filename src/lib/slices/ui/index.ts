import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, ModalRemovalPayload, UIState } from "./types";

const initialState: UIState = {
    modalStack: []
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        pushModalStackAction: (state, payload: PayloadAction<ModalPayload>) => {
            state.modalStack.push(payload.payload);
        },
        pushExampleModalAction: (state) => {
            state.modalStack.push({
                type: "generic",
                children: "Hello World"
            });
        },
        popModalStackAction: (state, payload: PayloadAction<ModalRemovalPayload>) => {
            const targetData = payload.payload;
            if (typeof targetData === "number") {
                state.modalStack.splice(targetData, 1);
            } else if (targetData === null) {
                state.modalStack.pop();
            }
        },
    }
});

export const { 
    pushModalStackAction,
    popModalStackAction,
    pushExampleModalAction
} = uiSlice.actions;

export default uiSlice.reducer;