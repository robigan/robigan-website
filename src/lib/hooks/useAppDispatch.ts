import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

/**
 * Custom App Dispatch for use with React Redux for integration with TypeScript, use this instead of useDispatch
 */
const useAppDispatch = (): AppDispatch => useDispatch;
export default useAppDispatch;