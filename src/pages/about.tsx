import { NextPage } from "next";
import Head from "next/head";
import { useContext } from "react";
import { ModalContext } from "../components/ModalManager";

const About: NextPage = () => {
    const { pushModalStack, popModalStack, clearStackPolicy, setClearStackPolicy } = useContext(ModalContext);

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
            <button className="mx-2" onClick={() => pushModalStack({
                type: "generic",
                children: <>
                    <p>Hello World</p>
                    <button onClick={() => popModalStack()}>Click me to make me go away</button>
                </>
            })}>Click me</button>
            <button className="mx-2" onClick={() => setClearStackPolicy(!clearStackPolicy)}>Toggle clearStackPolicy</button>
            <p className="mx-2">Currently: {JSON.stringify(clearStackPolicy)}</p>
        </div>
    </>);
};

export default About;