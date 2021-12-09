import { FC } from "react";
import { ContactButtonProps } from "../lib/ContactButtonTypes";
import styles from "../styles/ContactButton.module.css";

const ContactButton:FC<ContactButtonProps> = ({ children, href, ariaLabel }) => {
    return (
        <a href={href} role="button" target="_blank" rel="noreferrer" aria-label={ariaLabel} className={styles["contact-button"] + " mx-2"}>
            {
                children
            }
        </a>
    );
};

export default ContactButton;