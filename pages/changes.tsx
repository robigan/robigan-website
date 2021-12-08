import Head from "next/head";
// import Change from "../components/Change.js";
import PageSelector from "../components/PageSelector";
import BackgroundColor from "../components/BackgroundColor";

import { Commits, ChangesProps, ChangeProps } from "./changesTypes";

export async function getStaticProps() {
    const res = await fetch("https://api.github.com/repos/robigan/robigan-website/commits");
    const data = (await res.json()) as Commits;

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

const Change = function({ commit }: ChangeProps) {
    process.env.NODE_ENV === "development" ? console.log(commit.commit.message) : undefined;

    return (
        <div className="rounded-lg my-2 flex justify-between flex-row flex-nowrap container mx-auto border-gray-500 border-opacity-80 border-2 content-center items-center" key={commit.sha}>
            <div className="m-2 order-1 flex-shrink">
                <p className="font-bold text-lg">{(commit.commit.message.split("\n"))[0]}</p>
                <h3>{`${commit.commit.author?.name ?? "Comitter/author name not available"} commited on ${(new Date(commit.commit.author?.date ?? NaN)).toDateString()}`}</h3>
            </div>

            <div className="m-2 order-2 flex flex-row flex-nowrap justify-center content-center items-center flex-shrink">
                {
                    (commit.commit.verification?.verified ?? false) ?
                        <h3 className="text-green-300 border-gray-400 hover:border-green-800 rounded-l-full border-2 p-2 min-w-max m-1 max-h-8 text-center leading-4 mr-0 border-r">Verified</h3> :
                        <h3 className="text-red-300 border-gray-400 hover:border-red-800 rounded-l-full border-2 p-2 min-w-max m-1 max-h-8 text-center leading-4 mr-0 border-r">Not Verified</h3>
                }
                <h3 className="border-gray-400 rounded-r-full border-2 p-2 min-w-max m-1 max-h-8 text-center leading-4 ml-0 border-l">{commit.commit.tree.sha.substring(0, 6)}</h3>
            </div>
        </div>
    );
};

export default function Changes({ commits }: ChangesProps) {
    return (
        <>
            <Head>
                <title>Robigan - Changes</title>
                <meta name="description" content="A page for seeing all the changes made on the main github repo's branch" />
                <meta name="theme-color" content="#78244C" />
            </Head>
            <PageSelector></PageSelector>
            <h1 className="text-white text-center">This page is still under construction</h1>
            {
                Array.isArray(commits) ? commits.map((commit) => {
                    return Change({ commit: commit });
                }) : (() => {
                    if (process.env.NODE_ENV === "test") throw new TypeError(`GitHub commits data is not an array!\nCommits Object: ${JSON.stringify(commits, null, 4)}`);
                    return <h2>There seems to have been an error when fetching the data</h2>;
                })()
            }
            <BackgroundColor /* backgroundColor="#78244C" */ backgroundColor="#202731" disableMetaThemeColor={true}></BackgroundColor>
        </>
    );
}