import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";
import { BiLinkExternal } from "react-icons/bi";

const BadgeWrapper: FC<PropsWithChildren> = ({ children }) => (
    <div className="h-10 aspect-square rounded-full overflow-hidden">
        {children}
    </div>
);

const OpenButton: FC = () => (
    <BiLinkExternal size="1.25rem" className="text-primary z-10"/>
);

const ContactPill: FC<PropsWithChildren<LinkProps>> = ({ children, ...linkProps }) => (
    <Link {...linkProps} className="w-full rounded-full bg-primary border-2 border-primary hover:bg-transparent py-2 px-4 flex flex-row flex-nowrap justify-between items-center text-black-light hover:text-primary transition relative">
        {children}
        <OpenButton />
    </Link>
);

export default Object.assign(ContactPill, { BadgeWrapper });