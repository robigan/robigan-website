import { GetPostReq, GetPostRes } from "../../lib/apiTypes/getpost";
import { readPost } from "../../common/posts";
import { WebsiteApiResponse } from "../../lib/apiTypes/api";

const handler = async (req: GetPostReq, res: WebsiteApiResponse<GetPostRes>) => {
    if (req.query.id === undefined) {
        res.status(400).json({status: "error", message: "Missing id property in the query string part of the request"});
        return;
    }

    const mdxBundle = readPost(req.query.id);

    res.status(200).json({frontMatter: (await mdxBundle).frontmatter});
};

export default handler;