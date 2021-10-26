import "../styles/changes.module.css";

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

function Change({ commit }) {
    return (
        <>
            <h1>{commit.commit.message}</h1>
        </>
    );
}

export default function Changes({ commits }) {
    return (
        <>
            {commits.map((commit) => {
                return Change({ commit: commit});
            })}
        </>
    );
}