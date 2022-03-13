import Head from "next/head";
import BackgroundColor from "../components/Background/BackgroundColor";
import PageSelector from "../components/PageSelector";
import DefaultSection from "../components/Sections/DefaultSection";
import UnderConstruct from "../components/UnderContruct";
import ProjectsList from "../components/ProjectsList";
import { GetStaticProps } from "next";
import { ProjectsListProps } from "../lib/ProjectsList";
import { FC } from "react";

export const getStaticProps: GetStaticProps<ProjectsListProps> = async () => {
    return {
        props: {
            projects: [
                {description: "The first test project page", show: true, thumbnail: "nowhere", title: "A test project demonstration for development", url: "https://github.com/robigan/nada"}
            ]
        }
    };
};

const Projects:FC = () => {
    return (
        <>
            <Head>
                <title>Robigan - Projects</title>
                <meta name="description" content="An interactive dedicated page for Robigan's main projects" />
            </Head>
            <PageSelector />
            <DefaultSection h1="Projects" p="An interactive dedicated page for my main projects" paddingBot="5vh" />
            <BackgroundColor />
            <UnderConstruct />
            <div className="flex flex-row flex-auto">
                {}
            </div>
        </>
    );
};

export default Projects;