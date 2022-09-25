import { FC } from "react";
import useUISelector from "../../lib/hooks/useUISelector";
import { getModalStack } from "../../lib/slices/ui/selectors";
import Modal from "../Modal";

const ModalManager: FC = () => {
    const modals = useUISelector(getModalStack);

    return (
        <>
            {
                modals.map((child) => {
                    switch (child.type) {
                    case "links":
                        return (
                            <Modal.Links links={child.links} />
                        );
                    case "generic":
                        return (
                            <Modal>{child.children}</Modal>
                        );
                    default:
                        throw new Error("Modal type not recognized");
                    }
                })
            }
        </>
    );
};

export default ModalManager;