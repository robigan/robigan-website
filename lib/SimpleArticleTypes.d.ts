import { PostFrontMatter } from "./idTypes";
import { FC } from "react";
import { MDXContentProps } from "mdx-bundler/client";

export type SimpleArticleProps = /* InferGetStaticPropsType<typeof getStaticProps>; */ {
    frontMatter: PostFrontMatter,
    RenderedComponent: FC<MDXContentProps>
}