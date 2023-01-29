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

            <div className="flex items-start w-full h-full lg:overflow-y-auto">

                {/* File System View */}
                <div className="h-full container mx-auto relative">
                    <div className="max-w-[50vw] lg:max-w-[30vw] absolute right-0 w-fit max-h-[2.5ex] overflow-hidden text-ellipsis whitespace-nowrap hover:max-h-full hover:whitespace-normal hover:lg:max-w-[40vw] hover:bg-black-light hover:p-2 focus:max-h-full focus:whitespace-normal focus:lg:max-w-[40vw] focus:bg-black-light focus:p-2 focus:mt-2 rounded-xl transition-all duration-500" tabIndex={0}>
                        This file system hierarchy represents a similar hierarchy you might see in a Linux system, and takes inspiration from my own Arch Linux system. You don&apos;t need to know how Linux works to interact with it, just click around and discover by yourself :)
                    </div>

                    <FileSystemView.RootDirectory payload={ABOUT_FSV_DATA} />
                    <div className="lg:hidden h-20" />
                </div>

                <div className="hidden lg:block invisible mx-8">
                    {/* Serves as an invisible element meant to make space on the x-axis */}
                    <NavBar pathname="" />
                </div>

            </div>

            <div className="lg:hidden mb-4 fixed bottom-4 left-1/2 -translate-x-1/2">
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