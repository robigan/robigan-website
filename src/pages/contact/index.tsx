import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { FC, PropsWithChildren } from "react";
import NavBar from "../../components/NavBar";
import { BsArrowRightShort, BsDiscord, BsGithub, BsKeyFill, BsReddit } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiMatrix } from "react-icons/si";
import { FaSteam } from "react-icons/fa";
import { BiLinkExternal, BiWallet } from "react-icons/bi";

type ContactTileProps = {
    /**
     * Title string for the text below the icon
     */
    title: string,
    /**
     * Sets the a element to open the link in a new tab
     */
    blankTarget?: boolean,
    /**
     * Overwrite the visual aspects of blankTarget, such that if blankTarget is disabled, the visuals will still be enabled, useful for links that open up system prompts
     */
    overwriteBlankTargetVisuals?: boolean
}

const ContactTile: FC<PropsWithChildren<LinkProps & ContactTileProps>> = ({ title, children, blankTarget = true, overwriteBlankTargetVisuals = false, ...linkProps }) => (
    <div className="basis-1/4 h-1/2 flex items-center">
        <div className="w-3/4 lg:w-1/2 mx-auto">

            <Link passHref={blankTarget} {...linkProps}>
                <a target={blankTarget ? "_blank" : "_self"} rel={blankTarget ? "noopener noreferrer" : ""} className="hover:underline active:underline">

                    <div className="aspect-square relative">
                        <div className="absolute h-full w-full z-10 opacity-0 hover:opacity-90 bg-black-light flex justify-center items-center transition-all duration-300">
                            <div className="h-1/4 w-1/4 flex justify-center items-center">
                                {
                                    (blankTarget || overwriteBlankTargetVisuals) ? <BiLinkExternal /> : <BsArrowRightShort />
                                }
                            </div>
                        </div>
                        <div className="rounded-[50px] bg-black-lighter flex justify-center items-center h-full w-full">
                            <div className="h-1/3 w-1/3 flex justify-center items-center">
                                {children}
                            </div>
                        </div>
                    </div>

                    <p className="w-fit mx-auto h-4 mb-2 text-[1em] md:text-[1.1em]">{title}</p>
                </a>
            </Link>
        </div>
    </div>
);

const About = () => (
    <>
        <Head>
            <title>Contact</title>
            <meta name="description" content="Robigan's contacts and how to contact him" />
        </Head>

        <div className="h-screen w-screen flex flex-col justify-between">

            {/* Top title */}
            <div className="text-center my-8 select-none">
                <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10">WHERE YOU CAN <span className="text-primary">FIND ME</span></div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[18vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">CONTACT</div>
            </div>

            <div className="flex flex-row items-start w-full h-full">

                {/* Different links */}
                <div className="container h-full flex-auto mx-auto flex flex-row justify-between items-start flex-wrap text-center">
                    <ContactTile title="Discord" href="https://discord.com/users/315526915828219906">
                        <BsDiscord />
                    </ContactTile>

                    <ContactTile title="Email" href="mailto:robigan@robigan.com" blankTarget={false} overwriteBlankTargetVisuals={true}>
                        <MdEmail />
                    </ContactTile>

                    <ContactTile title="GitHub" href="https://github.com/robigan">
                        <BsGithub />
                    </ContactTile>

                    <ContactTile title="Reddit" href="https://reddit.com/u/robigan">
                        <BsReddit />
                    </ContactTile>

                    <ContactTile title="Matrix" href="https://matrix.to/#/@robigan:matrix.org">
                        <SiMatrix />
                    </ContactTile>

                    <ContactTile title="Steam" href="https://steamcommunity.com/id/robigan">
                        <FaSteam />
                    </ContactTile>

                    <ContactTile title="Crypto Wallets" href="/contact/wallets" blankTarget={false}>
                        <BiWallet />
                    </ContactTile>

                    <ContactTile title="OpenPGP Key" href="https://keys.openpgp.org/search?q=robigan%40robigan.com">
                        <BsKeyFill />
                    </ContactTile>
                </div>

                <div className="hidden lg:block invisible mx-8">
                    {/* Serves as an invisible element meant to make space on the x-axis */}
                    <NavBar pathname="" />
                </div>
            </div>

            <div className="lg:hidden my-8">
                <NavBar pathname="/contact" />
            </div>
        </div>

        <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-0 mx-8">
            {/* Note that a different NavBar element is placed elsewhere such that it takes up the right amount of space to allow this one to be visually place correctly on the x-axis, while using this one to place it visually correctly on the y-axis */}
            <NavBar pathname="/contact" />
        </div>
    </>
);

export default About;