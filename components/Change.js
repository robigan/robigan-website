export default function Change({ commit }) {
    console.log(commit.commit.message);

    return (
        <div className="container bg-gray-500 bg-opacity-50 rounded m-2 flex justify-between flex-row" key={commit.sha}>
            <h2 className="font-bold">{(commit.commit.message.split("\n"))[0]}</h2>
            <h3>ID: {commit.sha.substring(0, 6)}</h3>
            {
                commit.commit.verification.verified ? 
                    <h3 className="text-green-300 border-gray-400 hover:border-green-600 rounded-full border-2 w-min p-1 min-w-max m-1">Verified</h3> : 
                    <h3 className="text-red-300 border-gray-400 hover:border-red-600 rounded-full border-2 w-min p-1 min-w-max m-1">Not Verified</h3>
            }
        </div>
    );
}