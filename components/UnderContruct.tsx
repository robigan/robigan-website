import { FC } from "react";
import { UnderConstructProps } from "../lib/UnderConstructTypes";

const UnderConstruct:FC<UnderConstructProps> = ({ textWhite = true }) => {
    return <h1 className={(textWhite ? "text-white" : "text-black") + " text-center text-3xl"}>This page is still under construction</h1>;
};

export default UnderConstruct;