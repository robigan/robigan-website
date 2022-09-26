import { NextPage } from "next";
import Head from "next/head";
import FileSystemView, {TEST_DATA} from "../components/FileSystemView";
import ModalManager from "../components/ModalManager";

const About: NextPage = () => (
    <>
        <Head>
            <title>About</title>
            <meta name="description" content="An all about robigan" />
        </Head>

        <ModalManager.Provider>
            <div className="h-screen w-screen flex flex-col justify-between">

                {/* Top title */}
                <div className="text-center my-8 select-none">
                    <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10"><span className="text-primary">MY</span> EXPERIENCES</div>
                    <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[20vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">ABOUT</div>
                </div>

                {/* File System View */}
                <div className="h-full container mx-auto">
                    <FileSystemView.RootDirectory payload={TEST_DATA} />
                </div>
            </div>
        </ModalManager.Provider>
    </>
);

export default About;