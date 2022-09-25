import { FC, PropsWithChildren } from "react";
import ModalBackground from "./background";
import ModalInterface from "./interface";

const GenericModal: FC<PropsWithChildren> = ({ children }) => (
    <ModalBackground>
        <ModalInterface>
            {children}
        </ModalInterface>
    </ModalBackground>
);

export default GenericModal;