import { ParsedUrlQuery } from "querystring";
import { PostFrontMatter } from "./posts";

export interface PostParams extends ParsedUrlQuery {
    id: string;
}

export type PostStaticPropsResultProps = {
    code: string;
    frontMatter: PostFrontMatter;
    urlId: string;
}