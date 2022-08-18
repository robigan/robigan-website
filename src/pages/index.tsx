import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import profilePicture from "../../public/person.png";
import { BsArrowRight } from "react-icons/bs";

const Home = () => (
    <>
        <Head>
            <title>Homepage</title>
            <meta name="description" content="Robigan's homepage" />
        </Head>

        <div className="absolute top-0 left-0 w-full h-full">

            <svg viewBox="0 0 1427 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-52 355L1426.31 -74.75H-1530.31L-52 355Z" fill="#FFB400" />
            </svg>

            {/* The content div absoluted to the top left with full width and height using flex to rearrange items */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center">

                {/* Large width screen profile */}
                <div className="hidden lg:block relative w-4/12 h-4/5 rounded-[50px] overflow-hidden bg-black select-none">
                    <Image src={profilePicture} alt="Robigan's profile picture" layout="fill" objectFit="cover" />
                </div>

                {/* Small width rounded screen profile w/ border */}
                <div className="lg:hidden h-64 aspect-square relative bg-black rounded-full border-8 border-gray-800 overflow-hidden shrink select-none">
                    <Image src={profilePicture} alt="Robigan's profile picture" layout="fill" objectFit="cover"></Image>
                </div>

                {/* Content area (using flex) */}
                <div className="container my-8 lg:my-0 lg:max-w-max lg:w-5/12 lg:h-4/5 flex flex-col justify-center text-center lg:text-left">

                    <div className="my-2">
                        <h1 className="text-primary">WELCOME</h1>
                    </div>

                    <div className="my-2">
                        <h2>I&apos;M ROBIGAN.</h2>
                        <p className="text-sm border-t-2 w-fit mx-auto lg:mx-0">A COMPUTER NERD</p>
                    </div>

                    {/* Small about summary */}
                    <div className="my-2">
                        <p>I am an <span className="text-green-500">Ita</span>li<span className="text-red-500">an</span> teenaged software engineer.<br />I love creating anything, refining whatever I make down to perfection. Always making sure that what I create is top notch and loved by the community.</p>
                    </div>

                    {/* More about me call to action */}
                    <div className="mb-2 mt-16">
                        <Link href="/about">
                            <a className="border border-primary rounded-full py-4 pl-4 overflow-hidden relative bg-left hover:bg-right transition-all duration-300 ease-linear select-none" style={{backgroundSize: "200%", backgroundImage: "linear-gradient(to left, #FFB400 50%, black 50%)"}}>
                                <span className="mr-16">MORE ABOUT ME</span>
                                <div className="absolute rounded-full bg-primary w-[53.5px] h-[53.5px] -top-px -right-px inline-flex justify-center items-center">
                                    {/* <Image src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" width="1" height="1" /> */}
                                    <BsArrowRight size="1em" />
                                </div>
                            </a>
                        </Link>
                    </div>

                </div>

                <NavBar pathname="/" />
            </div>
        </div>
    </>
);

export default Home;