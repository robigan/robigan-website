import { FC } from "react";
import { IconType } from "react-icons/lib";
import ModalBackground from "./background";
import ModalInterface from "./interface";

export interface LinksModalProps {
    links: {title: string, href: string, icon: IconType}[]
}

const LinksModal: FC<LinksModalProps> = ({ links }) => (
    <ModalBackground>
        <ModalInterface>
            <pre>{JSON.stringify(links)}</pre>
        </ModalInterface>
    </ModalBackground>
);

export default LinksModal;