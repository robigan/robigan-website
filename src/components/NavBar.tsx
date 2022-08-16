import { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

const UniversalWrapper: FC<PropsWithChildren<LinkProps & { isHighlight?: boolean }>> = ({ children, isHighlight, ...linkProps }) => (
    <Link {...linkProps}>
        <a className="my-3 w-48p h-48p rounded-full" style={(isHighlight ?? false) ? { backgroundColor: "#FFB400" } : { backgroundColor: "#3C3C3C" }}>
            {children}
        </a>
    </Link>
);

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: { 

        },
    };
};

const NavBar = () => {
    const { pathname } = useRouter();

    return (
        <nav className="flex flex-col justify-center">

            {/* Home */}
            <UniversalWrapper href="/" isHighlight={pathname === "/"}>
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <rect width="72" height="72" rx="36" fill="#3C3C3C" /> */}
                    <path d="M32 52V40H40V52H50V36H56L36 18L16 36H22V52H32Z" fill="white" />
                </svg>
            </UniversalWrapper>

            {/* About */}
            <UniversalWrapper href="/about">
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <rect width="72" height="72" rx="36" fill="#3C3C3C" /> */}
                    <path d="M36 36C40.42 36 44 32.42 44 28C44 23.58 40.42 20 36 20C31.58 20 28 23.58 28 28C28 32.42 31.58 36 36 36ZM36 40C30.66 40 20 42.68 20 48V52H52V48C52 42.68 41.34 40 36 40Z" fill="white" />
                </svg>
            </UniversalWrapper>

            {/* Portfolio */}
            <UniversalWrapper href="/work">
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <rect width="72" height="72" rx="36" fill="#3C3C3C" /> */}
                    <path d="M30 18V20H20C17.79 20 16 21.79 16 24V36C16 38.206 17.794 40 20 40H52C54.206 40 56 38.206 56 36V24C56 21.79 54.21 20 52 20H42V18H30ZM36 32C37.104 32 38 32.896 38 34C38 35.104 37.104 36 36 36C34.896 36 34 35.104 34 34C34 32.896 34.896 32 36 32ZM16 42.8867V48C16 50.21 17.79 52 20 52H52C54.21 52 56 50.21 56 48V42.8867C54.818 43.5747 53.464 44 52 44H20C18.536 44 17.182 43.5747 16 42.8867Z" fill="white" />
                </svg>
            </UniversalWrapper>

            {/* Contacts */}
            <UniversalWrapper href="/contact">
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <rect width="72" height="72" rx="36" fill="#3C3C3C" /> */}
                    <path d="M40 16H24C21.8 16 20 17.8 20 20V52C20 54.2 21.8 56 24 56H48C50.2 56 52 54.2 52 52V28L40 16ZM36 32C38.2 32 40 33.8 40 36C40 38.2 38.2 40 36 40C33.8 40 32 38.2 32 36C32 33.8 33.8 32 36 32ZM44 48H28V46.86C28 45.24 28.96 43.8 30.44 43.16C32.14 42.42 34.02 42 36 42C37.98 42 39.86 42.42 41.56 43.16C43.04 43.8 44 45.24 44 46.86V48Z" fill="white" />
                </svg>
            </UniversalWrapper>

            {/* Blog */}
            <UniversalWrapper href="/blog">
                <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <rect width="72" height="72" rx="36" fill="#3C3C3C" /> */}
                    <path d="M52 16H20C17.8 16 16.02 17.8 16.02 20L16 56L24 48H52C54.2 48 56 46.2 56 44V20C56 17.8 54.2 16 52 16ZM48 40H24V36H48V40ZM48 34H24V30H48V34ZM48 28H24V24H48V28Z" fill="white" />
                </svg>
            </UniversalWrapper>

        </nav>
    );
};

export default NavBar;