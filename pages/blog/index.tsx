import { GetStaticProps } from "next";
import Head from "next/head";
import PageSelector from "../../components/PageSelector";
import { getStaticPaths as getStaticPosts } from "./[id]";

export const getStaticProps: GetStaticProps = async () => {
    const posts = (await getStaticPosts({})).paths;

    return {
        props: {
            posts
        }
    };
};

const Blog = () => {
    return (
        <>
            <Head>
                <title>Robigan - Blog</title>
                <meta name="description" content="Robigan's blog page" />
            </Head>
            <PageSelector></PageSelector>
            <h1 className="text-black text-center">This page is still under construction, please comeback later</h1>
        </>
    );
};

export default Blog;