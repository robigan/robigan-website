import { NextApiRequest } from "next";
import { PostFrontMatter } from "../../posts";

export interface GetPostReq extends NextApiRequest {
    query: {
        id?: string;
    }
}

export interface GetPostRes {
    frontMatter: PostFrontMatter;
}