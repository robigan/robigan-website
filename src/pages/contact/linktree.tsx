import Head from "next/head";
import Image from "next/image";
// import { FiShare } from "react-icons/fi";
import logo from "../../../public/logo.svg";
import ContactPill from "../../components/ContactPill";
import { MdEmail } from "react-icons/md";
import { BsDiscord, BsGithub } from "react-icons/bs";
import { SiMatrix } from "react-icons/si";
import { IconContext } from "react-icons";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { Contact } from "../../lib/data/contact";

const Linktree: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ discord, email, github, matrix }) => (
    <>
        <Head>
            <title>Linktree Links</title>
            <meta name="robots" content="noindex" />
        </Head>

        {/* <div className="sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-full mx-auto my-4">
            <span className="bg-black-lighter float-right p-2 rounded-full">
                <FiShare size="1.25rem" color="#FFB400" />
            </span>
        </div> */}

        <div className="h-screen better-container mx-auto py-4 flex flex-col items-center justify-between gap-2">
            <div className="h-48 aspect-square">
                <Image src={logo} alt="Logo" className="bg-white rounded-full" />
            </div>
            <h2 className="">@robigan</h2>
            <p className="text-center"><span className="text-green-500">Ita</span>li<span className="text-red-500">an</span> computer wizard</p>
            <div className="sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl w-full mx-auto grid grid-cols-1 gap-4">
                <IconContext.Provider value={{ size: "65%" }}>
                    <ContactPill href="/" disableBlankTarget={true}>
                        <ContactPill.BadgeWrapper>
                            <Image src={logo} alt="" />
                        </ContactPill.BadgeWrapper>
                        <p>my portfolio website</p>
                    </ContactPill>
                    <ContactPill href={email.target} disableBlankTarget={true}>
                        <ContactPill.BadgeWrapper>
                            <MdEmail color="black" />
                        </ContactPill.BadgeWrapper>
                        <p>you&apos;ve got mail</p>
                    </ContactPill>
                    <ContactPill href={discord.target}>
                        <ContactPill.BadgeWrapper>
                            <BsDiscord color="black" />
                        </ContactPill.BadgeWrapper>
                        <p>e-girl hang out hotpot</p>
                    </ContactPill>
                    <ContactPill href={matrix.target}>
                        <ContactPill.BadgeWrapper>
                            <SiMatrix color="black" />
                        </ContactPill.BadgeWrapper>
                        <p>based next gen irc</p>
                    </ContactPill>
                    <ContactPill href={github.target}>
                        <ContactPill.BadgeWrapper>
                            <BsGithub color="black" />
                        </ContactPill.BadgeWrapper>
                        <p>where computer nerds go weee</p>
                    </ContactPill>
                </IconContext.Provider>
            </div>

            <div className="flex-grow" />

            <p className="text-center">© robigan</p>
        </div>
    </>
);

export const getStaticProps: GetStaticProps<{
    discord: Contact,
    email: Contact,
    github: Contact,
    matrix: Contact,
}> = async () => {
    // NB: You can't import JSON files at build into { default: contactsImport } because code split will break it if you try to import only a portion of it
    const contactsImport = await import("../../../public/contacts.json");
    const contacts = contactsImport.contacts;

    return {
        props: {
            discord: contacts.discord,
            email: contacts.email,
            github: contacts.github,
            matrix: contacts.matrix,
        }
    };
};

export default Linktree;