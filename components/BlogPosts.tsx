import { FC } from "react";
import { BlogPostsProps } from "../lib/BlogPosts";
import BlogPost from "./BlogPost";

const BlogPosts:FC<BlogPostsProps> = ({ title }) => {
    return (
        <div className="container m-2 mx-7">
            <h1 className="text-center">{title}</h1>
            <div className="flex flex-wrap flex-col">
                <BlogPost title="Test" description="Test description" link=""></BlogPost>
                <BlogPost title="Test" description="Test description" link=""></BlogPost>
            </div>
        </div>
    );
};

export default BlogPosts;