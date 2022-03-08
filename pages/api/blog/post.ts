import { GetPostReq, GetPostRes } from "../../../lib/apiTypes/blog/post";
import { readPost } from "../../../common/posts";
import { WebsiteApiResponse } from "../../../lib/apiTypes/api";

const handler = async (req: GetPostReq, res: WebsiteApiResponse<GetPostRes>) => {
    if (req.query.id === undefined) {
        res.status(400).json({status: "error", message: "Missing id property in the query string part of the request"});
        return;
    }
    
    const { result: mdxBundle, error } = await readPost(req.query.id);

    if (mdxBundle === null || error !== null) {
        if (error instanceof Error) {
            if (error.name === "Error" && error.message.startsWith("ENOENT")) {
                res.status(404).json({status: "error", message: error?.message ?? "No error message was provided"});
            } else {
                res.status(500).json({status: "error", message: error?.message ?? "No error message was provided"});
            }
        } else {
            res.status(500).json({status: "error", message: error ?? ""});
        }

        return;
    }
    
    res.status(200).json({frontMatter: mdxBundle.frontmatter});
};

export default handler;