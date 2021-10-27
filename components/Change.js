export default function Change({ commit }) {
    return (
        <div className="container bg-gray-500 bg-opacity-50 rounded m-2">
            <h1 className="font-bold">Commit Message &quot;{commit.commit.message}&quot;</h1>
            <h3>ID: {commit.sha}</h3>
            {
                commit.commit.verification.verified ? 
                    <h3 className="text-green-300 border-gray-400 hover:border-green-300 rounded-full border-2 w-min p-1 min-w-max">Verified</h3> : 
                    <h3 className="text-red-300 border-gray-400 hover:border-red-300 rounded-full border-2 w-min p-1 min-w-max">Not Verified</h3>
            }
        </div>
    );
}