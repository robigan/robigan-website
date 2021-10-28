export default function Change({ commit }) {
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
}