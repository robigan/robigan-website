import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { NavBarDesktop, NavBarMobile, NavBarMobileSpacer } from "../components/NavBar";
import Timeline from "../components/Timeline";

const AdaptiveHeader: FC<PropsWithChildren> = ({ children }) => (
    <h1 className="text-xl md:text-4xl lg:text-6xl" tabIndex={0}>{children}</h1>
);

const Work = () => (
    <>
        <Head>
            <title>Work</title>
            <meta name="description" content="Robigan's work experience" />
        </Head>

        <div className="h-screen w-screen flex flex-col justify-between">
            
            {/* Top title */}
            <div className="text-center my-8 select-none">
                <div className="font-extrabold text-[7vw] md:text-[3.75vw] whitespace-nowrap z-10 text-primary">EXPERIENCES</div>
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[67.5%] text-[20vw] md:text-[10vw] font-extrabold text-[#fff1] tracking-widest">WORK</div>
            </div>

            <div className="flex items-start w-full h-full">

                {/* Container for Timeline */}
                <div className="better-container mx-auto lg:overflow-y-auto lg:pl-16">
                    <Timeline>
                        <AdaptiveHeader>Start of passion for Computer Science</AdaptiveHeader>
                        <p><a className="hover:underline" href="https://scratch.mit.edu/" target="_blank" rel="noopener noreferrer">Scratch</a> | 2016</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Work on embedded systems using C</AdaptiveHeader>
                        <p><a className="hover:underline" href="https://mitrol.it/en" target="_blank" rel="noopener noreferrer">Mitrol</a> | 2019, 2021</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Self-taught full-stack web development</AdaptiveHeader>
                        <p>Home | 2020</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Joined CoSup Gaming</AdaptiveHeader>
                        <p><a className="hover:underline" href="https://gaming.cosup.eu/" target="_blank" rel="noopener noreferrer">CoSup Gaming</a> | 2021</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Minecraft Server Plugins</AdaptiveHeader>
                        <p>Developed Minecraft Server-sided Plugins using Java for CoSup Gaming</p>
                        <p><a className="hover:underline" href="https://gaming.cosup.eu/" target="_blank" rel="noopener noreferrer">Cosup Gaming</a> | 2021 - 2022</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Attending an IT leading high-school</AdaptiveHeader>
                        <p>Italy | 2021 - 2025</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Web Development & Game Development</AdaptiveHeader>
                        <p>Web Development using Vue.js & Game Development using Unity and C#</p>
                        <p>School | 2021 - 2022</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>C++</AdaptiveHeader>
                        <p>School | 2022 - Present</p>
                        {/* <ul>
                            <li> */}<a className="hover:underline" href="https://github.com/cs-class-07/CS-Snakes-and-Ladders-game" rel="noopener noreferrer" target="_blank">Console Snakes and Ladders</a>{/* </li>
                        </ul> */}
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Microelectronics</AdaptiveHeader>
                        <p>School | 2022 - 2023</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Started Blogging</AdaptiveHeader>
                        <p>Life | 2022 - 2024</p>
                        <i className="block">Eventually shut down the blog because the task of maintaining a self hosted blog with an editor&apos;s interface run by FOSS software is difficult to say the least and I would&apos;ve blogged about non tech things anyways.</i>
                        <s className="block">archives.robigan.com</s>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Swift & SwiftUI</AdaptiveHeader>
                        <p>School | 2023</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Cisco Skills for All Network Academy Certification</AdaptiveHeader>
                        <p>Worked for some time on a Network Defense certification by Cisco through their <a className="hover:underline" target="_blank" href="https://skillsforall.com/" rel="noopener noreferrer">Skills for All</a> platform.</p>
                        <p>School | 2023</p>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Internship at Steelprojects</AdaptiveHeader>
                        <p>Internshipped at a French software house that ideates solutions for the steel construction industry. During my tenure, I was afforded the opportunity to incorporate supplementary features into their Android mobile application to cater to the requirements of their clients.</p>
                        <p>Vienne, France | 2023 (3 Weeks)</p>
                        <a className="hover:underline" target="_blank" href="https://www.steelprojects.com/en/" rel="noopener noreferrer">steelprojects.com</a>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Internship at Brennan IT</AdaptiveHeader>
                        <p>Internshipped at a Sydney-based Microsoft Cloud Solutions Partner (MSP) that provides tailored IT solutions to their customers. In the course of my time at the company, I worked alongside various teams & departments. I was involved in the software testing teams, data and cloud teams, and Azure infrastructure department.</p>
                        <p>Sydney, Australia | 2023 (2 Weeks)</p>
                        <a className="hover:underline" target="_blank" href="https://www.brennanit.com.au/" rel="noopener noreferrer">brennanit.com.au</a>
                    </Timeline>
                    <Timeline>
                        <AdaptiveHeader>Hackathon</AdaptiveHeader>
                        <p>Participated in a hackathon organized by my institution&apos;s parent company. My team and I worked on a killer project focusing on education as a theme. We hope to bring it to market some day once everyone has more time.</p>
                        <p>School | 2023</p>
                    </Timeline>
                    <div className="lg:hidden h-16" />
                </div>

                <NavBarMobileSpacer />

            </div>

            <NavBarMobile pathname="/work" />

            <NavBarDesktop pathname="/work" />
        </div>
    </>
);

export default Work;