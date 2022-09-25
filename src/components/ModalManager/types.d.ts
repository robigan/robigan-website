import { PropsWithChildren } from "react";
import { IconType } from "react-icons/lib";

interface LinksModalPayload {
    type: "links",
    payload: {
        title: string,
        href: string,
        icon: IconType
    }[]
}

interface GenericModalPayload extends PropsWithChildren {
    type: "generic"
}

export type ModalPayload = LinksModalPayload | GenericModalPayload

export interface ModalsData {
    modalStack: ModalPayload[],
    pushModalStack: (payload: ModalPayload) => void,
    popModalStack: () => void
}