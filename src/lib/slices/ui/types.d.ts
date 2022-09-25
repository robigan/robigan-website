import { PropsWithChildren } from "react";
import { LinksModalProps } from "../../../components/Modal/linksModal";

/**
 * A Modal containing a list of keys
 */
export interface LinksModalPayload extends LinksModalProps {
    type: "links"
}

export interface GenericModalPayload extends PropsWithChildren {
    type: "generic",
}

/**
 * A type of all the different Modals possible
 */
export type ModalPayload = LinksModalPayload | GenericModalPayload;

/**
 * Payload related to removing a specific modal from a stack
 */
export type ModalRemovalPayload = number?;

/**
 * The entire UI side of things for the React Redux State
 */
export interface UIState {
    modalStack: ModalPayload[]
}