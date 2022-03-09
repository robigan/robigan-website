import { getEnumerablePosts } from "../../../common/posts";
// import type { NextApiResponse } from "next";
import { WebsiteApiResponse } from "../../../lib/apiTypes/api";
import { GetAllPostsReq, GetAllPostsRes } from "../../../lib/apiTypes/blog/all";

const handler = async (req: GetAllPostsReq, res: WebsiteApiResponse<GetAllPostsRes>) => {
    // const { result, error } = await (readdir(await realpath("./_blogs")).then((value) => ({result: value, error: null}), (error) => ({result: null, error: (error as Error)})));

    // if (result === null || error !== null) {
    //     res.status(500).json({status: "error", message: (error !== null ? error.message : "No reason provided")});
    //     return;
    // }

    // const paths = result.map((filename) => filename.substring(0, filename.length - 3));
    
    // if (req.query.limit && parseInt(req.query.limit)) {
    //     res.status(200).json(paths.splice(0, parseInt(req.query.limit)));
    //     return;
    // } 
    // else if (req.query.limit && isNaN(parseInt(req.query.limit)) ) {
    //     res.status(400).json({status: "error", message: "The limit query string supplied wasn't able to be turned into an Int"});
    //     return;
    // } 
    // else {
    //     res.status(200).json(paths);
    //     return;
    // }
    const limit = parseInt(req.query.limit ?? "");
    const { result, error } = (await getEnumerablePosts((isNaN(limit) ? undefined : limit), true));

    if (result === null || error !== null) {
        if (error instanceof Error) {
            res.status(500).json({status: "error", message: error.message});
        } else {
            res.status(500).json({status: "error", message: error});
        }

        return;
    }

    res.status(200).json(result);
};

export default handler;