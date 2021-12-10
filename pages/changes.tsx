import Head from "next/head";
import PageSelector from "../components/PageSelector";
import BackgroundColor from "../components/BackgroundColor";
import UnderConstruct from "../components/UnderContruct";
import { Commits, ChangesProps, ChangeProps } from "../lib/changesTypes";
import { FC } from "react";

export const getStaticProps = async () => {
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
};

const Change: FC<ChangeProps> = ({ commit }) => {
    process.env.NODE_ENV === "development" ? console.log(commit.commit.message) : undefined;

    let Component;

    if (process.env.NODE_ENV === "development") {
        Component = <div className="m-2 order-2 flex flex-row flex-nowrap justify-center content-center items-center flex-shrink">
            {
                (commit.commit.verification?.verified ?? false) ?
                    <h3 className="text-green-300 border-gray-400 hover:border-green-800 rounded-l-full border-2 p-2 min-w-max m-1 max-h-8 text-center leading-4 mr-0 border-r">Verified</h3> :
                    <h3 className="text-red-300 border-gray-400 hover:border-red-800 rounded-l-full border-2 p-2 min-w-max m-1 max-h-8 text-center leading-4 mr-0 border-r">Not Verified</h3>
            }
            <h3 className="border-gray-400 rounded-r-full border-2 p-2 min-w-max m-1 max-h-8 text-center leading-4 ml-0 border-l">{commit.commit.tree.sha.substring(0, 6)}</h3>
        </div>;
    } else {
        Component = (commit.commit.verification?.verified ?? false) ? 
            <h3 className="text-green-300 border-gray-400 hover:border-green-600 rounded-full border-2 w-min p-1 min-w-max m-1 max-h-8 text-center self-center order-2">Verified</h3> : 
            <h3 className="text-red-300 border-gray-400 hover:border-red-600 rounded-full border-2 w-min p-1 min-w-max m-1 max-h-8 text-center self-center order-2">Not Verified</h3>;
    }

    return (
        <div className="rounded-lg my-2 flex justify-between flex-row flex-nowrap container mx-auto border-gray-500 border-opacity-80 border-2 content-center items-center bg-background" key={commit.sha}>
            <div className="m-2 order-1 flex-shrink">
                <p className="font-bold text-lg">{(commit.commit.message.split("\n"))[0]}</p>
                <h3>{`${commit.commit.author?.name ?? "Comitter/author name not available"} commited on ${(new Date(commit.commit.author?.date ?? NaN)).toDateString()}`}</h3>
            </div>

            {
                Component
            }
        </div>
    );
};

const Changes: FC<ChangesProps> = ({ commits }) => {
    return (
        <>
            <Head>
                <title>Robigan - Changes</title>
                <meta name="description" content="A page for seeing all the changes made on the main github repo's branch" />
                <meta name="theme-color" content="#78244C" />
            </Head>
            <PageSelector />
            <UnderConstruct textWhite={true} />
            {
                Array.isArray(commits) ? commits.map((commit) => {
                    return Change({ commit: commit });
                }) : (() => {
                    if (process.env.NODE_ENV === "test") throw new TypeError(`GitHub commits data is not an array!\nCommits Object: ${JSON.stringify(commits, null, 4)}`);
                    return <h2>There seems to have been an error when fetching the data</h2>;
                })()
            }
            <BackgroundColor /* backgroundColor="#78244C" */ backgroundColor="#202731" disableMetaThemeColor={true} />
        </>
    );
};

export default Changes;