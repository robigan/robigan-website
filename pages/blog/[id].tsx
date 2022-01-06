import Head from "next/head";
// import { useRouter } from "next/router";
import BackgroundColor from "../../components/Background/BackgroundColor";
import { readdir, realpath, readFile } from "fs/promises";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { FC, useMemo } from "react";
import { GetStaticProps, GetStaticPaths, PreviewData, InferGetStaticPropsType } from "next";
import { PostParams, PostStaticPropsResultProps } from "../../lib/idTypes";
import SimpleArticle from "../../components/Articles/SimpleArticle";
import PageSelector from "../../components/PageSelector";
import DefaultSection from "../../components/Sections/DefaultSection";
import { readPost, getEnumerablePosts } from "../../common/posts";

// const development = process.env.NODE_ENV === "development";

export const getStaticPaths: GetStaticPaths = async () => {
    const { result, error } = (await getEnumerablePosts(undefined, true));
    
    if (result === null || error !== null) {
        return {
            paths: [],
            fallback: false
        };
    }

    const paths = result.map((filename) => {
        const formatted = filename.substring(0, filename.length - 3);

        return {
            params: {
                id: formatted
            },
        };
    });

    // development && (console.log(posts, paths));

    return {
        paths,
        fallback: false
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<PostStaticPropsResultProps, PostParams, PreviewData> = async ({ params }) => {
    if (params === undefined) throw new TypeError("Internal error, params needs to be returned by getStaticPaths");

    const mdxBundle = readPost(params.id);

    return {
        props: {
            code: (await mdxBundle).code,
            frontMatter: (await mdxBundle).frontmatter,
            urlId: params.id
        },
    };
};

const Post:FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ code, frontMatter }) => {
    const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
    
    if (frontMatter.title === undefined) throw new TypeError("Internal error, although this should have been caught at build time, the post's frontmatter is missing the title property");
    if (frontMatter.description === undefined) throw new TypeError("Internal error, although this should have been caught at build time, the post's frontmatter is missing the description property");

    return (
        <>
            <Head>
                <title>Robigan - Blog | {frontMatter.title}</title>
                <meta name="description" content={frontMatter.description} />
            </Head>
            <PageSelector />
            <DefaultSection h1={"Blog - " + frontMatter.title} p={frontMatter.description} paddingBot="5vh" />
            <BackgroundColor />
            <div className="flex flex-col flex-auto items-center">
                <SimpleArticle frontMatter={frontMatter} RenderedComponent={MDXComponent} />
            </div>
        </>
    );
};

export default Post;