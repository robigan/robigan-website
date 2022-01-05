import { ParsedUrlQuery } from "querystring";

export interface PostParams extends ParsedUrlQuery {
    id: string;
}

export type PostFrontMatter = {
    title?: string;
    description?: string;
    layout?: string;
    date?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export type PostStaticPropsResultProps = {
    code: string;
    frontMatter: PostFrontMatter;
    urlId: string;
}