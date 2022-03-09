export type PostFrontMatter = {
    title?: string;
    description?: string;
    layout?: string;
    date?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}