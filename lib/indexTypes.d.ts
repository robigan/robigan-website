import { CSSProperties } from "react";

export type SectionProps = {
    backgroundColor?: string,
    paddingTop?: boolean | string,
    paddingBot?: boolean | string,
    extraStyles?: {
        self?: CSSProperties,
        bottom?: CSSProperties,
        top?: CSSProperties
    }
}