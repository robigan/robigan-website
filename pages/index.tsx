import Head from "next/head";
import Image from "next/image";
import shapeStyles from "../styles/shapeStyles.Section.module.css";
import ContactMe from "../components/ContactMe";
import PageSelector from "../components/PageSelector";
// import { FC } from "react";
import Section from "../components/Sections/Section";
import DefaultSection from "../components/Sections/DefaultSection";
import BackgroundImage from "../components/Background/BackgroundImage";
import BackgroundColor from "../components/Background/BackgroundColor";

const Home = () => {
    return (
        <>
            <Head>
                <title>Robigan - Homepage</title>
                <meta name="description" content="Robigan's homepage" />
                <meta name="theme-color" content="blueviolet" />
            </Head>
            <PageSelector />
            <BackgroundColor></BackgroundColor>
            {/* <BackgroundImage src="/Background.png" layout="fixed" alt="" width="2870" height="1740"/> */}
            <div>
                <DefaultSection />
                <Section backgroundColor="#202731">
                    <div data-sectionpadding="true">
                        <h1>About Me</h1>
                        <p>So, let&apos;s see... I started out on <a href="https://scratch.mit.edu/users/robigan/" role="link" target="_blank" rel="noreferrer">Scratch</a> in 2016 making projects and having fun, this is when I started out with Programming and it was the start of my passion/carrier. From there I started working on web development but eventually moved to backend JavaScript although I still like to do front end. Over the years I have also worked with Java, Python and C (when working on things like the arduino). Over the lockdown and summer of 2021, I spent my time living my life and casually coding while working on my own take of a <a href="https://github.com/robigan/RobBot" role="link" target="_blank" rel="noreferrer">full purpose discord bot (currently in pause)</a>, building <a href="https://github.com/robigan/robigan-website" role="link" target="_blank" rel="noreferrer">this website</a> and developing for <a href="https://gaming.cosup.eu" role="link" target="_blank" rel="noreferrer">Cosup Gaming</a>. Nowadays I attend an IT leading highschool and study the IB program, where I currently study web development with <a href="https://v3.vuejs.org/" role="link" target="_blank" rel="noreferrer">Vue.js</a>, game development with <a href="https://unity.com/" role="link" target="_blank" rel="noreferrer">Unity</a>/<a href="https://dotnet.microsoft.com/" role="link" target="_blank" rel="noreferrer">C#</a> and work on my personal projects, CineForum and <a href="https://github.com/robigan/ManageBack_ToBasics" role="link" target="_blank" rel="noreferrer">ManageBack To Basics</a>.</p>
                    </div>
                </Section>
                <Section backgroundColor="#2D4159">
                    <div className={shapeStyles.Wavy2}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{ "fill": "#202731" }}></path>
                        </svg>
                    </div>
                    {
                        process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test" ? <div>
                            <svg viewBox="0 0 960 540" width="960" height="565" xmlns="http://www.w3.org/2000/svg" version="1.1" className={shapeStyles.Blob1}>
                                <g transform="translate(434.46395291155767 261.85315901600404)">
                                    <path d="M287.9 -190.2C364.6 -133.3 412.6 -14.1 380.3 70.4C347.9 154.8 235.1 204.4 136.2 232.9C37.3 261.3 -47.7 268.5 -119.3 237.8C-190.9 207.2 -249 138.6 -278.7 51.3C-308.5 -36 -309.8 -142.1 -258.6 -193.1C-207.4 -244.2 -103.7 -240.2 0.9 -241C105.5 -241.7 211.1 -247.1 287.9 -190.2" style={{ "fill": "#78244C" }} />
                                </g>
                            </svg>
                        </div> : <></>
                    }
                    <div data-sectionpadding="true">
                        <Image src="https://raw.githubusercontent.com/robigan/robigan-metrics/main/github-metrics.svg" alt="" width="480" height="482" />
                    </div>
                </Section>
                <Section backgroundColor="#ff5233">
                    <div className={shapeStyles.Wavy1}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" style={{ "fill": "#2D4159" }}></path>
                        </svg>
                    </div>
                    <div data-sectionpadding="true">
                        <h1 className="text-center">Contact Me</h1>
                        <ContactMe />
                    </div>
                </Section>
                <Section backgroundColor="#78244C" paddingBot="5rem">
                    <div className={shapeStyles.Wavy3}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" style={{ "fill": "#ff5233" }}></path>
                        </svg>
                    </div>
                    <div data-sectionpadding="true">
                        <p>Psst... Did you know this website&apos;s source code can be found on <a href="https://github.com/robigan/robigan-website" role="link" target="_blank" rel="noreferrer">github? Check it out!</a></p>
                    </div>
                </Section>
            </div>
            {/* <div className="fixed z-50 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-primary p-2 rounded hover:bg-primary-dark">
                <p>Hello World</p>
            </div> */}
        </>
    );
};

export default Home;