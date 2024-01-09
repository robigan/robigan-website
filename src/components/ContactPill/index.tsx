import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";
import { BiLinkExternal } from "react-icons/bi";
import styles from "./ContactPill.module.css";

interface ContactPillProps {
    /**
     * Inverts the badge on hover
     */
    invertBadge?: boolean;
    /**
     * Disables the blank target for the link
     */
    disableBlankTarget?: boolean;
}

const BadgeWrapper: FC<PropsWithChildren> = ({ children }) => (
    <div className={"h-10 aspect-square rounded-full overflow-hidden transition flex items-center justify-center " + styles.invertHoverChild}>
        {children}
    </div>
);

const OpenButton: FC = () => (
    <BiLinkExternal size="1.25rem" className="text-primary z-10" />
);

const ContactPill: FC<PropsWithChildren<ContactPillProps & LinkProps>> = ({ children, disableBlankTarget = false,invertBadge = true, ...linkProps }) => (
    <>
        <Link {...linkProps} target={disableBlankTarget ? "_self" : "_blank"} rel={disableBlankTarget ? "" : "noopener noreferrer"} className={"w-full rounded-full bg-primary border-2 border-primary hover:bg-transparent py-2 px-4 flex flex-row flex-nowrap justify-between items-center text-black-light hover:text-primary transition relative " + (invertBadge ? styles.invertedHover : "")}>
            {children}
            <OpenButton />
        </Link>
    </>
);

export default Object.assign(ContactPill, { BadgeWrapper });