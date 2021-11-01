import Head from "next/head";
// import Change from "../components/Change.js";
import PageSelector from "../components/PageSelector.js";
import BackgroundColor from "../components/BackgroundColor.js";

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

const Change = function({ commit }) {
    process.env.NODE_ENV === "development" ? console.log(commit.commit.message) : undefined;

    return (
        <div className="bg-gray-500 bg-opacity-80 rounded my-2 flex justify-between flex-row container mx-auto" key={commit.sha}>
            <div className="m-2">
                <h1 className="font-bold">{(commit.commit.message.split("\n"))[0]}</h1>
                <h3>{`${commit.commit.author.name} commited on ${commit.commit.author.date}`}</h3>
            </div>
            {
                commit.commit.verification.verified ? 
                    <h3 className="text-green-300 border-gray-400 hover:border-green-600 rounded-full border-2 w-min p-1 min-w-max m-1 max-h-8 text-center self-center">Verified</h3> : 
                    <h3 className="text-red-300 border-gray-400 hover:border-red-600 rounded-full border-2 w-min p-1 min-w-max m-1 max-h-8 text-center self-center">Not Verified</h3>
            }
        </div>
    );
};

export default function Changes({ commits }) {
    return (
        <>
            <Head>
                <title>Robigan - Changes</title>
                <meta name="description" content="A page for seeing all the changes made on the main github repo's branch" />
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
            <BackgroundColor backgroundColor="#78244C" ></BackgroundColor>
        </>
    );
}