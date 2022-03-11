import { GetStaticProps } from "next";
import Head from "next/head";
import BackgroundColor from "../../components/Background/BackgroundColor";
import BlogPosts from "../../components/BlogPosts";
import PageSelector from "../../components/PageSelector";
import DefaultSection from "../../components/Sections/DefaultSection";
import UnderConstruct from "../../components/UnderContruct";
import { getStaticPaths as getStaticPosts } from "./[id]";

const development = process.env.NODE_ENV === "development";

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
            <PageSelector />
            <DefaultSection h1="Blog" p="The dedicated homepage to the blogging portion of my site" paddingBot="5vh" />
            <BackgroundColor /* backgroundColor="#3b1226" */ disableMetaThemeColor={true} />
            <UnderConstruct />
            {development && <div className="flex flex-nowrap flex-row flex-auto justify-center container left-1/2 -translate-x-1/2 absolute">
                <BlogPosts title="Most popular blog posts"></BlogPosts>
                <BlogPosts title="Most recent blog posts"></BlogPosts>
            </div>}
        </>
    );
};

export default Blog;