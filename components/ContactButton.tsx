import { FC } from "react";
import { ContactButtonProps } from "../lib/ContactButtonTypes";

const ContactButton:FC<ContactButtonProps> = ({ children, href, ariaLabel }) => {
    return (
        <a href={href} role="button" target="_blank" rel="noreferrer" aria-label={ariaLabel} className="mx-2 hover:text-gray-200 transition ease-linear flex-auto">
            {
                children
            }
        </a>
    );
};

export default ContactButton;