import { FC } from "react";
import { SimpleArticleProps } from "../lib/SimpleArticleTypes";

const SimpleArticle:FC<SimpleArticleProps> = ({ children, frontMatter }) => {
    if (children === undefined) throw new TypeError("For simple article to render, it needs children");
    
    return (
        <div>
            <h1 className="text-center m-2 my-5 text-5xl mb-1">{frontMatter.title}</h1>
            <h3 className="text-center m-2 my-1 text-base">{frontMatter.description}</h3>
            <div className="text-center m-2 mt-10 text-base">
                {
                    children
                }
            </div>
        </div>
    );
};

export default SimpleArticle;