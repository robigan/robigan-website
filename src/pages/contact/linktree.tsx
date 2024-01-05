import Head from "next/head";
import Image from "next/image";
import { FiShare } from "react-icons/fi";
import logo from "../../../public/logo.svg";
import ContactPill from "../../components/ContactPill";

const Linktree = () => (
    <>
        <Head>
            <title>Linktree Links</title>
            <meta name="robots" content="noindex" />
        </Head>

        <div className="h-screen w-screen flex flex-col justify-start">

            <div className="sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl w-full mx-auto my-4">
                <span className="bg-black-lighter float-right p-2 rounded-full">
                    <FiShare size="1.25rem" color="#FFB400" />
                </span>
            </div>

            <div className="container mx-auto mt-4 flex flex-col items-center justify-between">
                <div className="h-24 aspect-square mb-2">
                    <Image src={logo} alt="Logo" className="bg-white rounded-full" />
                </div>
                <h3 className="my-2">@robigan</h3>
                <div className="sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl w-full mx-auto my-4">
                    <ContactPill href="/">
                        <ContactPill.BadgeWrapper>
                            <Image src={logo} alt="" className="hover:text-primary" />
                        </ContactPill.BadgeWrapper>
                        <p>Hello World</p>
                    </ContactPill>
                </div>
            </div>
        </div>
    </>
);

export default Linktree;