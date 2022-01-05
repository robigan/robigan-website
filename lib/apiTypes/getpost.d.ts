import { NextApiRequest } from "next";
import { PostFrontMatter } from "../idTypes";

export interface GetPostReq extends NextApiRequest {
    query: {
        id?: string;
    }
}

export interface GetPostRes {
    frontMatter: PostFrontMatter;
}