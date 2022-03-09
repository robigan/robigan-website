import { FC } from "react";
import { SimpleArticleProps } from "../../lib/SimpleArticleTypes";

const SimpleArticle:FC<SimpleArticleProps> = ({ /* frontMatter, */ RenderedComponent }) => {
    return (
        <>
            <div className="container bg-background rounded-lg min-h-max m-10" style={{minHeight:"50vh"}}>
                <div className="text-center m-2 text-base">
                    <RenderedComponent></RenderedComponent>
                </div>
            </div>
        </>
    );
};

export default SimpleArticle;