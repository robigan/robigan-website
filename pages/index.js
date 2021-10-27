import Head from "next/head";
import styles from "../styles/index.module.css";
import Section from "../components/Section";
import shapeStyles from "../styles/shapeStyles.section.module.css";
import ContactMe from "../components/ContactMe";
import PageSelector from "../components/PageSelector";

export default function Home() {
    return (
        <>
            <Head>
                <title>Robigan - Homepage</title>
                <meta name="description" content="Robigan's homepage" />
            </Head>
            <PageSelector></PageSelector>
            <div className={styles.Sections}>
                <Section backgroundColor="blueviolet" shapeStyle="Tilt1">
                    <h1>Hello There</h1>
                    <p>I am robigan and this is my web page.</p>
                </Section>
                <Section backgroundColor="#202731" shapeStyle="None">
                    <div className={shapeStyles.Tilt1}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ "fill": "blueviolet" }}></path>
                        </svg>
                    </div>
                    <div style={{ height: "5vh" }}></div>
                    <h1>About Me</h1>
                    <p>So, let&apos;s see... I started out on <a href="https://scratch.mit.edu/users/robigan/" role="link" target="_blank" rel="noreferrer">Scratch</a> in 2016 making projects and having fun, this is when I started out with Programming and it was the start of my passion/carrier. From there I started working on web development but eventually moved to backend JavaScript although I still like to do front end. Over the years I have also worked with Java, Python and C (when working on things like the arduino). Over the lockdown and summer of 2021, I spent my time living my life and casually coding while working on my own take of a <a href="https://github.com/robigan/RobBot" role="link" target="_blank" rel="noreferrer">full purpose discord bot (currently in pause)</a> and developing for <a href="https://gaming.cosup.eu" role="link" target="_blank" rel="noreferrer">Cosup Gaming</a>. Nowadays I attend an IT leading highschool and study the IB program, where I currently study web development with <a href="https://v3.vuejs.org/" role="link" target="_blank" rel="noreferrer">Vue.js</a>, game development with <a href="https://unity.com/" role="link" target="_blank" rel="noreferrer">Unity</a>/<a href="https://dotnet.microsoft.com/" role="link" target="_blank" rel="noreferrer">C#</a> and work on my personal projects, CineForum and <a href="https://github.com/robigan/ManageBack_ToBasics" role="link" target="_blank" rel="noreferrer">ManageBack To Basics</a>.</p>
                </Section>
                <Section backgroundColor="tomato">
                    <div className={shapeStyles.Wavy1}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" style={{ "fill": "#202731" }}></path>
                        </svg>
                    </div>
                    <div style={{ height: "12vh" }}></div>
                    <h1>Contact Me</h1>
                    <ContactMe />
                </Section>
            </div>
        </>
    );
}
