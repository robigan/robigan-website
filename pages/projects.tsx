import Head from "next/head";
import BackgroundColor from "../components/Background/BackgroundColor";
import PageSelector from "../components/PageSelector";
import DefaultSection from "../components/Sections/DefaultSection";
import UnderConstruct from "../components/UnderContruct";

const Projects = () => {
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
        </>
    );
};

export default Projects;