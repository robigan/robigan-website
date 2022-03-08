import type { NextApiRequest } from "next";
import { getEnumerablePosts, readPost } from "../../../common/posts";
import { WebsiteApiResponse } from "../../../lib/apiTypes/api";
import { PostFrontMatter } from "../../../lib/posts";

const INTERVAL = 600000;
let lastChecked = 0;
let cachedPostId = "test";

const handler = async (/* req: NextApiRequest, */ res: WebsiteApiResponse<string>) => {
    if ((Date.now() - INTERVAL) > lastChecked) { // If the cache time has hit
        const { result, error } = await getEnumerablePosts();
        if (result === null || error !== null) {
            res.status(500).json({status: "error", message: "Unable to get enumerable posts"});
            return;
        }

        const filtered = result.map(async (id) => {
            const { result: mdxBundle, error: readPostError } = await readPost(id, false);
            if (mdxBundle === null || readPostError !== null) return {id: id, unix: 0};

            const { frontmatter }: Record<"frontmatter", PostFrontMatter> = mdxBundle;
            if (frontmatter.date === undefined) return {id: id, unix: 0};

            return {id: id, unix: Date.parse(frontmatter.date)};
        });

        // const test = Promise.all();

        let latestId = "";
        let latestDate = 0;
        for (const metadataPost of filtered) {
            const awaited = await metadataPost;
            if (latestDate < awaited.unix) {
                latestId = awaited.id;
                latestDate = awaited.unix;
            }
        }

        if (latestId !== "" && latestDate > 0) {
            lastChecked = Date.now();
            cachedPostId = latestId;
            res.status(200).send(cachedPostId);
        }
    } else {
        res.status(200).send(cachedPostId);
    }
};

export default handler;