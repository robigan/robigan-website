import Head from "next/head";

const About = () => (
    <>
        <Head>
            <title>About</title>
            <meta name="description" content="An all about robigan" />
        </Head>

        {/* Top title */}
        <div className="text-center my-8 select-none">
            <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10"><span className="text-primary">MES</span> EXPÉRIENCES</div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[20vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">ABOUT</div>
        </div>
    </>
);

export default About;