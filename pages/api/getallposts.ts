import { readdir, realpath } from "fs/promises";
// import type { NextApiResponse } from "next";
import { WebsiteApiResponse } from "../../lib/apiTypes/api";
import { GetAllPostsReq, GetAllPostsRes } from "../../lib/apiTypes/getallposts";

const handler = async (req: GetAllPostsReq, res: WebsiteApiResponse<GetAllPostsRes>) => {
    const paths = (await readdir(await realpath("./_blogs"))).map((filename) => filename.substring(0, filename.length - 3));
    
    if (req.query.limit && parseInt(req.query.limit)) {
        res.status(200).json(paths.splice(0, parseInt(req.query.limit)));
    } 
    else if (req.query.limit && isNaN(parseInt(req.query.limit)) ) {
        res.status(400).json({status: "error", message: "The limit query string supplied wasn't able to be turned into an Int"});
    } 
    else {
        res.status(200).json(paths);
    }
};

export default handler;