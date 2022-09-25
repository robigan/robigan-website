import useAppSelector from "./useAppSelector";
import { TypedUseSelectorHook } from "react-redux";
import { UIState } from "../slices/ui/types";

/**
 * Custom hook to select ui-based state
 */
const useUISelector: TypedUseSelectorHook<UIState> = <Selected = unknown> (
    selector: (state: UIState) => Selected, 
    equalityFn?: (left: Selected, right: Selected) => boolean
) => useAppSelector(state => selector(state.ui), equalityFn);

export default useUISelector;