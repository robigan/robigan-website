import { FC, PropsWithChildren } from "react";
import { NodeType } from "./types";

interface DecoratedButtonProps {
    state: boolean,
    type: NodeType
}

const DecoratedButton:FC<PropsWithChildren<DecoratedButtonProps>> = ({ children, state, type }) => {
    
    return (
        <h2></h2>
    );
};