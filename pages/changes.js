import Head from "next/head";
import Change from "../components/Change.js";
import PageSelector from "../components/PageSelector.js";

export async function getStaticProps() {
    const res = await fetch("https://api.github.com/repos/robigan/robigan-website/commits");
    const data = await res.json();

    if (!data) {
        return {
            props: {
                commits: []
            }
        };
    }

    return {
        props: {
            commits: data
        },
    };
}

export default function Changes({ commits }) {
    return (
        <>
            <Head>
                <title>Robigan - Changes</title>
                <meta name="description" content="A page for seeing all the changes made on the main github repo's branch" />
            </Head>
            <PageSelector></PageSelector>
            {commits.map((commit) => {
                return Change({ commit: commit });
            })}
        </>
    );
}