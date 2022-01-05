import { NextApiResponse } from "next";

/**
 * A supplemental error code included in the body's response that can be used to specify additional, internal error codes
 */
type ErrorResCode = number;

export interface ErrorRes {
    status?: "error",
    message?: string,
    code?: ErrorResCode
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface WebsiteApiResponse<T = unknown> extends NextApiResponse<T | ErrorRes> {}