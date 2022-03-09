import { NextApiRequest } from "next";

export interface GetAllPostsReq extends NextApiRequest {
    query: {
        limit?: string;
    }
}

export type GetAllPostsRes = string[];