import Head from "next/head";
import PageSelector from "../../components/PageSelector";

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