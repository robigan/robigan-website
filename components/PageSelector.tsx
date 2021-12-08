import Link from "next/link";
import { PageSelectorPages } from "../lib/PageSelectorTypes";

const pages: PageSelectorPages = {
    "/": "Home", 
    "/blog": "Blog",
    "/projects": "Projects",
    "/changes": "Changes"
};

const PageSelector = () => {
    return (
        <div className={"fixed text-white bottom-16 z-10 transform left-2/4 -translate-x-2/4 bg-black bg-opacity-90 p-2 rounded-full"}>
            {Object.keys(pages).map((linkHref) => {
                return (
                    <span key={linkHref} className="py-3 px-2">
                        <Link href={linkHref}>
                            <a>{pages[linkHref]}</a>
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

export default PageSelector;