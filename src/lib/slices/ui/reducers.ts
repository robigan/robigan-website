import { UIState } from "./types";

export const increment = (state: UIState) => {
    state.value += 1;
};