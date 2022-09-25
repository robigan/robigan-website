import { ModalPayload, UIState } from "./types";

export const getModalStack = (state: UIState): ModalPayload[] => state.modalStack;