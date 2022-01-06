import { readdir, readFile, realpath } from "fs/promises";
import { bundleMDX } from "mdx-bundler";
import { PostFrontMatter } from "../lib/posts";

/**
 * A method for getting the mdxBundle of a blog post by it's ID (basically posts' filename - fileext)
 * @param id The id of the blog post duhh
 * @param postChecking If true, will check that the post contains all the necessary frontmatter metadata
 * @returns The mdxBundle of the post duhh
 */
const readPost = async (id: string, postChecking = true) => {
    const file = readFile(await realpath(`./_blogs/${id}.md`), { // Patch the fact that via the API a user could create shit fuckery in the form of file creation
        encoding: "utf8"
    });

    const mdxBundle = bundleMDX({
        source: ((await file).trim())
    });

    if (postChecking) {
        const { frontmatter }: Record<"frontmatter", PostFrontMatter> = (await mdxBundle);
        if (frontmatter.title === undefined || frontmatter.description === undefined) throw new TypeError(`The post ${id}.md is supposed to have the the properties title and description in it's frontmatter`);
    }

    return mdxBundle;
};

/**
 * Gets all the possible blog post names/IDs
 * @param limit A number which splices the array between index 0 and limit
 * @param removeFileExt Returns a blog posts' ID instead of filename (IDs are basically filenames without file ext.)
 * @returns An array of strings that maybe nullable containing all the blog posts' filenames or "IDs"
 */
const getEnumerablePosts = async (limit?: number, removeFileExt?: true) => {
    const { result, error } = await (readdir(await realpath("./_blogs")).then((value) => ({result: value, error: null}), (error) => ({result: null, error: (error as Error)})));

    const limitedResult = (typeof limit === "number") && Array.isArray(result) ? result.splice(0, limit) : result;
    const newResult = (typeof removeFileExt === "boolean") && Array.isArray(limitedResult) ? limitedResult.map((filename) => filename.substring(0, filename.length - 3)) : limitedResult;

    return { result: newResult , error };
};

export { readPost, getEnumerablePosts }; 