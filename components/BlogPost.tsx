import { FC } from "react";
import { BlogPostProps } from "../lib/BlogPost";
// import image from "../public/Background.png";
import Image from "next/image";

const BlogPost:FC<BlogPostProps> = ({ title, description/* , link */}) => {
    return (
        <div className="bg-background min-h-[100px] rounded-lg m-2 p-2 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 mx-2 lg:my-2 lg:mx-1">
                <Image src="picsum" width={300} height={200} layout="intrinsic" alt="Test" className="rounded-lg" loader={({src, width}) => `https://picsum.photos/seed/${src}/${width}`} />
            </div>
            <div className="lg:w-1/2 mx-2 lg:my-2 lg:mx-1">
                <h1 className="border-b-[1px]">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;