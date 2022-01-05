import { FC } from "react";
import { BlogPostProps } from "../lib/BlogPost";

const BlogPost:FC<BlogPostProps> = ({ title, description/* , link */}) => {
    return (
        <div className="bg-background min-h-[100px] rounded-lg m-2">
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
};

export default BlogPost;