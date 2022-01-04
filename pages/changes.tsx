import Head from "next/head";
import PageSelector from "../components/PageSelector";
import BackgroundColor from "../components/Background/BackgroundColor";
import { Commits, ChangesProps, ChangeProps } from "../lib/changesTypes";
import { FC, useMemo } from "react";
import BackgroundImage from "../components/Background/BackgroundImage";
import DefaultSection from "../components/Sections/DefaultSection";

export const getStaticProps = async () => {
    const res = await fetch("https://api.github.com/repos/robigan/robigan-website/commits");
    const data = (await res.json()) as Commits;

    if (!data) {
        return {
            props: {
                commits: null
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

    return (
        // Some of the code below is Copyright of Charlie85270 (MIT License)
        <li className="border-gray-400 flex flex-col mb-2" key={commit.sha}>
            <a href={commit.html_url} role="button" target="_blank" rel="noreferrer" aria-label={"Go to this commit's GitHub page"} className="hover:no-underline">
                <div className="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-background rounded-lg flex flex-1 items-center p-4">
                    <div className="flex-1 pl-1 md:mr-16">
                        <div className="font-medium text-white text-lg">
                            {(commit.commit.message.split("\n"))[0]}
                        </div>
                        <div className="text-gray-200 text-sm">
                            {commit.commit.author?.name ?? "Comitter/author name not available"}
                        </div>
                    </div>
                    <div className="text-gray-200 text-xs mr-4">
                        {(new Date(commit.commit.author?.date ?? NaN)).toDateString()}
                    </div>
                    {
                        (commit.commit.verification?.verified ?? false) ?
                            <div className="text-green-600 text-xs">
                                Verified
                            </div> :
                            <div className="text-red-600 text-xs">
                                Unverified
                            </div>
                    }
                    <div className="w-24 text-right flex justify-end">
                        <svg width="12" fill="currentColor" height="12" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </div>
                </div>
            </a>
        </li>
    );
};

const Changes: FC<ChangesProps> = ({ commits }) => {
    const changeList = useMemo(() => {
        return (
            <ul className="flex flex-col">
                {
                    Array.isArray(commits) ? commits.map((commit) => {
                        return Change({ commit: commit });
                    }) : (() => {
                        if (process.env.NODE_ENV === "test") throw new TypeError(`GitHub commits data is not an array!\nCommits Object: ${JSON.stringify(commits, null, 4)}`);
                        return <h2 className="text-center">There seems to have been an error while fetching the data</h2>;
                    })()
                }
            </ul>
        );
    }, [commits]);

    return (
        <>
            <Head>
                <title>Robigan - Changes</title>
                <meta name="description" content="A page for seeing all the changes made on the main github repo's branch" />
                <meta name="theme-color" content="#78244C" />
            </Head>
            <PageSelector />
            <DefaultSection h1="Changes" p="A list of Changes as seen in the GitHub repository" paddingBot="5vh" />
            {/* <UnderConstruct /> */}
            <BackgroundColor disableMetaThemeColor={true} />
            {/* <BackgroundImage src="/Background.png" layout="fixed" alt="" width="2870" height="1740" /> */}
            <div style={{ zIndex: "-10", backgroundColor: "#202731" }} className="absolute w-screen h-2/4 top-2/4 left-0 select-none">
            </div>
            <div className="bg-background-dark p-4">
                {changeList}
                <div style={{ height: "7.5rem" }}></div>
            </div>
        </>
    );
};

export default Changes;