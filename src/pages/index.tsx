import Head from "next/head";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <Head>
                <title>Robigan - Homepage</title>
                <meta name="description" content="Robigan's homepage" />
                <meta name="theme-color" content="blueviolet" />
            </Head>
            <div className="absolute top-0 left-0 w-full h-full">
                <svg viewBox="0 0 1427 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-52 355L1426.31 -74.75H-1530.31L-52 355Z" fill="#FFB400" />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center lg:flex-row lg:justify-around lg:items-center">
                    <div className="relative rounded-[50%] min-w-[50%] pt-[50%] border-8 border-gray-800 my-8 lg:w-4/12 lg:h-4/5 lg:rounded-[3rem] lg:border-none lg:my-0 bg-black">
                        <div className="absolute"></div>
                    </div>
                    <div className="container my-8 lg:my-0 lg:w-6/12 lg:h-4/5 flex flex-col justify-center">
                        <div className="my-2">
                            <h1 className="text-[#FFB400]">WELCOME</h1>
                        </div>
                        <div className="my-2">
                            <h2>I&apos;M ROBIGAN.</h2>
                            <p className="text-sm border-t-2 w-fit">A COMPUTER NERD</p>
                        </div>
                        <div className="my-2">
                            <p>I am an <span className="text-green-500">Ita</span>li<span className="text-red-500">an</span> software engineer.<br />I love creating anything, refining whatever I make down to perfection. Always making sure that what I create is top notch and loved by the community.</p>
                        </div>
                        <div className="mb-2 mt-16">
                            <Link href="/about">
                                <a className="border border-[#FFB400] rounded-full py-4 pl-4">
                                    <span className="mr-4">MORE ABOUT ME</span>
                                    <span className="rounded-full bg-[#FFB400] p-4"> GO </span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;