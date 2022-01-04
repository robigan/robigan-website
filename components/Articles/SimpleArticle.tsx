import { FC } from "react";
import { SimpleArticleProps } from "../../lib/SimpleArticleTypes";

const SimpleArticle:FC<SimpleArticleProps> = ({ /* frontMatter, */ RenderedComponent }) => {
    return (
        <>
            <div className="container bg-background rounded-lg min-h-max" style={{minHeight:"50vh"}}>
                {/* <h1 className="text-center m-2 my-5 text-5xl mb-1">{frontMatter.title}</h1>
                <h3 className="text-center m-2 my-1 text-base">{frontMatter.description}</h3> */}
                <div className="text-center m-2 text-base">
                    <RenderedComponent></RenderedComponent>
                </div>
            </div>
        </>
    );
};

export default SimpleArticle;