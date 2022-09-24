import { FC, ReactElement } from "react";
import Modal from "../Modal";

interface ModalManagerProps {
    targetModals: ReactElement<any, any>[]
}

const ModalManager: FC<ModalManagerProps> = ({ targetModals }) => {
    return (
        <>
            {
                targetModals.map((child, index) => <Modal key={"ModalManager_" + index}>{child}</Modal>)
            }
        </>
    );
};

export default ModalManager;