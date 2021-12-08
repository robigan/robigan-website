import Head from "next/head";
import PageSelector from "../components/PageSelector";

export default function Projects() {
    return (
        <>
            <Head>
                <title>Robigan - Projects</title>
                <meta name="description" content="A project containing all of robigan's flageship projects" />
            </Head>
            <PageSelector></PageSelector>
            <h1 className="text-black text-center">This page is still under construction, please comeback later</h1>
        </>
    );
}