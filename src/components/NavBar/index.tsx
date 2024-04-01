import { FC, PropsWithChildren, createContext, useContext } from "react";
import Link, { LinkProps } from "next/link";
export * from "./helpers";

const PathnameContext = createContext({ pathname: "" });
PathnameContext.displayName = "NavBarPathnameContext";

const UniversalWrapper: FC<PropsWithChildren<LinkProps & { label?: string, external?: boolean }>> = ({ children, label, external, ...linkProps }) => {
    const { pathname } = useContext(PathnameContext);
    
    return (
        (<Link
            {...linkProps}
            className={"mx-3 lg:mx-0 my-0 lg:my-3 w-48p h-48p rounded-[100%] " + (pathname === linkProps.href ? "bg-primary" : "bg-black-lighter" ) + " hover:rounded-[25%] focus:rounded-[25%] focus:duration-0 transition-[border-radius] duration-500 ease-in-out"}
            title={label}
            rel={external ? "noopener noreferrer" : undefined} 
            target={external ? "_blank" : undefined}>

            <span aria-hidden="true">{children}</span>

        </Link>)
    );
};

const NavBar: FC<{ pathname: string }> = ({ pathname }) => {
    return (
        <nav className="flex flex-row lg:flex-col justify-center">
            <PathnameContext.Provider value={{ pathname }}>

                {/* Home */}
                <UniversalWrapper href="/" label="Home">
                    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M32 52V40H40V52H50V36H56L36 18L16 36H22V52H32Z" fill="white" />
                    </svg>
                </UniversalWrapper>

                {/* About */}
                <UniversalWrapper href="/about" label="About">
                    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36 36C40.42 36 44 32.42 44 28C44 23.58 40.42 20 36 20C31.58 20 28 23.58 28 28C28 32.42 31.58 36 36 36ZM36 40C30.66 40 20 42.68 20 48V52H52V48C52 42.68 41.34 40 36 40Z" fill="white" />
                    </svg>
                </UniversalWrapper>

                {/* Work */}
                <UniversalWrapper href="/work" label="Work">
                    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 18V20H20C17.79 20 16 21.79 16 24V36C16 38.206 17.794 40 20 40H52C54.206 40 56 38.206 56 36V24C56 21.79 54.21 20 52 20H42V18H30ZM36 32C37.104 32 38 32.896 38 34C38 35.104 37.104 36 36 36C34.896 36 34 35.104 34 34C34 32.896 34.896 32 36 32ZM16 42.8867V48C16 50.21 17.79 52 20 52H52C54.21 52 56 50.21 56 48V42.8867C54.818 43.5747 53.464 44 52 44H20C18.536 44 17.182 43.5747 16 42.8867Z" fill="white" />
                    </svg>
                </UniversalWrapper>

                {/* Contacts */}
                <UniversalWrapper href="/contact" label="Contacts">
                    <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40 16H24C21.8 16 20 17.8 20 20V52C20 54.2 21.8 56 24 56H48C50.2 56 52 54.2 52 52V28L40 16ZM36 32C38.2 32 40 33.8 40 36C40 38.2 38.2 40 36 40C33.8 40 32 38.2 32 36C32 33.8 33.8 32 36 32ZM44 48H28V46.86C28 45.24 28.96 43.8 30.44 43.16C32.14 42.42 34.02 42 36 42C37.98 42 39.86 42.42 41.56 43.16C43.04 43.8 44 45.24 44 46.86V48Z" fill="white" />
                    </svg>
                </UniversalWrapper>
            </PathnameContext.Provider>
        </nav>
    );
};

export default NavBar;