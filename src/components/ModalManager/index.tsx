import { useRouter } from "next/router";
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from "react";
import Modal from "../Modal";
import { ModalPayload, ModalsData } from "./types";

const initialData: ModalsData = {
    modalStack: [],
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    pushModalStack: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    popModalStack: () => {},
    clearStackPolicy: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setClearStackPolicy: () => {}
};

export const ModalContext = createContext<ModalsData>(initialData);

const ModalManager: FC = () => {
    const { modalStack } = useContext(ModalContext);

    return (
        <>
            {
                modalStack.map((child, index) => {
                    switch (child.type) {
                    case "links":
                        return (
                            <Modal.Links links={child.payload} key={"ModalManager_Modal.Links_" + index}/>
                        );
                    case "generic":
                        return (
                            <Modal key={"ModalManager_Modal_" + index}>{child.children}</Modal>
                        );
                    default:
                        throw new Error("Modal type not recognized");
                    }
                })
            }
        </>
    );
};

const Provider: FC<PropsWithChildren> = ({ children }) => {
    const [stack, setStack] = useState<ModalPayload[]>([]);
    const [ clearStackPolicy, setClearStackPolicy ] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (clearStackPolicy) {
            setStack([]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router]);

    const value: ModalsData = {
        modalStack: stack,
        pushModalStack(payload) {
            // We create a new array and add payload to it as this allows us to implement an immutability pattern that integrates well with React
            const newStack = [...stack, payload];
            setStack(newStack);
        },
        popModalStack() {
            // The slice() operation, contrary to pop(), creates a new array with reference to the same objects
            const newStack = stack.slice(0, -1);
            setStack(newStack);
        },
        clearStackPolicy,
        setClearStackPolicy
    };

    return (
        <ModalContext.Provider value={value}>
            <ModalManager />

            {children}
        </ModalContext.Provider>
    );
};

export default Object.assign(ModalManager, { Provider });