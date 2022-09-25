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

type ModalPayload = LinksModalPayload | GenericModalPayload

interface ModalsData {
    modalStack: ModalPayload[],
    pushModalStack: (payload: ModalPayload) => void,
    popModalStack: () => void,
    /**
     * Read value that allows you to check what the current status of the clearStackPolicy is
     */
    clearStackPolicy: boolean
    /**
     * This option if set to false basically doesn't clear the stack if the router object in Next.js changes
     */
    setClearStackPolicy: (policy: boolean) => void
}