import { GetStaticProps } from "next";
import Head from "next/head";
import BackgroundColor from "../../components/Background/BackgroundColor";
import BackgroundImage from "../../components/Background/BackgroundImage";
import PageSelector from "../../components/PageSelector";
import DefaultSection from "../../components/Sections/DefaultSection";
import UnderConstruct from "../../components/UnderContruct";
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
            <PageSelector />
            <DefaultSection h1="Blog" p="The dedicated homepage to the blogging portion of my site" />
            <BackgroundColor />
            <BackgroundImage src="/Background.png" layout="fixed" alt="" width="2870" height="1740" />
            <UnderConstruct />
        </>
    );
};

export default Blog;