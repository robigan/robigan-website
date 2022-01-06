import { ParsedUrlQuery } from "querystring";

export interface PostParams extends ParsedUrlQuery {
    id: string;
}

export type PostStaticPropsResultProps = {
    code: string;
    frontMatter: PostFrontMatter;
    urlId: string;
}