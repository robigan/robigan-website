import { NextPage } from "next";
import Head from "next/head";
import FileSystemView from "../components/FileSystemView";
import NavBar from "../components/NavBar";
import { ABOUT_FSV_DATA } from "../lib/data/about";

const About: NextPage = () => (
    <>
        <Head>
            <title>Robigan OS | About</title>
            <meta name="description" content="An all about robigan" />
        </Head>


        <div className="h-screen w-screen flex flex-col justify-between">

            {/* Top title */}
            <div className="text-center my-8 select-none">
                <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10">ROBIGAN <span className="text-primary">OS</span></div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[20vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">ABOUT</div>
            </div>

            <div className="flex flex-row items-start w-full h-full">

                {/* File System View */}
                <div className="h-full container mx-auto">
                    <FileSystemView.RootDirectory payload={ABOUT_FSV_DATA} />
                </div>

                <div className="hidden lg:block invisible mx-8">
                    {/* Serves as an invisible element meant to make space on the x-axis */}
                    <NavBar pathname="" />
                </div>

            </div>

            <div className="lg:hidden my-8">
                <NavBar pathname="/about" />
            </div>

            <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-0 mx-8">
                {/* Note that a different NavBar element is placed elsewhere such that it takes up the right amount of space to allow this one to be visually place correctly on the x-axis, while using this one to place it visually correctly on the y-axis */}
                <NavBar pathname="/about" />
            </div>
        </div>
    </>
);

export default About;