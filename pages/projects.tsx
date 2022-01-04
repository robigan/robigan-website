import Head from "next/head";
import PageSelector from "../components/PageSelector";
import UnderConstruct from "../components/UnderContruct";

const Projects = () => {
    return (
        <>
            <Head>
                <title>Robigan - Projects</title>
                <meta name="description" content="A project containing all of robigan's flageship projects" />
            </Head>
            <PageSelector />
            <UnderConstruct textWhite={false} />
        </>
    );
};

export default Projects;