import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { BsKeyFill } from "react-icons/bs";
import useAppDispatch from "../lib/hooks/useAppDispatch";
import { pushExampleModalAction, pushModalStackAction } from "../lib/slices/ui";

const About: NextPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        useAppDispatch(pushExampleModalAction());
    }, []);

    return (<>
        <Head>
            <title>About</title>
            <meta name="description" content="An all about robigan" />
        </Head>

        {/* Top title */}
        <div className="text-center my-8 select-none">
            <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10"><span className="text-primary">MY</span> EXPERIENCES</div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[20vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">ABOUT</div>
        </div>

        <div>
            <button onClick={() => useAppDispatch()}>Click me</button>
        </div>
    </>);
};

export default About;