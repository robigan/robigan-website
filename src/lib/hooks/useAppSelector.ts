import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

/**
 * Custom App Selector for use with React Redux for integration with TypeScript, use this instead of useSelector
 */
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector;