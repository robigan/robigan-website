import Link from "next/link";

const pages = {
    "/": "Home", 
    "/changes": "Changes",
    "/blog": "Blog",
    "/projects": "Projects"
};

export default function PageSelector() {
    return (
        <div className={"fixed text-black bottom-16 z-10 transform left-2/4 -translate-x-2/4 bg-white bg-opacity-50 p-2 rounded-full"}>
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
}