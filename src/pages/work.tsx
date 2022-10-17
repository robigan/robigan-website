import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar";
import Timeline from "../components/Timeline";

const Work = () => (
    <>
        <Head>
            <title>Contact</title>
            <meta name="description" content="Robigan's contacts and how to contact him" />
        </Head>

        <div className="h-screen w-screen flex flex-col justify-between">
            
            {/* Top title */}
            <div className="text-center my-8 select-none">
                <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10 text-primary">EXPERIENCES</div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[20vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">WORK</div>
            </div>

            <div className="flex items-start w-full h-full">

                {/* Timeline */}
                <div className="container mx-auto lg:overflow-y-auto">
                    <Timeline>
                        <h1>Start of passion for Computer Science</h1>
                        <p><a className="hover:underline" href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">Scratch</a>, 2016</p>
                    </Timeline>
                </div>

                <div className="hidden lg:block invisible mx-8">
                    {/* Serves as an invisible element meant to make space on the x-axis */}
                    <NavBar pathname="" />
                </div>

            </div>

            <div className="lg:hidden my-8">
                <NavBar pathname="/work" />
            </div>

            <div className="hidden lg:block fixed top-1/2 -translate-y-1/2 right-0 mx-8">
                {/* Note that a different NavBar element is placed elsewhere such that it takes up the right amount of space to allow this one to be visually place correctly on the x-axis, while using this one to place it visually correctly on the y-axis */}
                <NavBar pathname="/work" />
            </div>
        </div>
    </>
);

export default Work;