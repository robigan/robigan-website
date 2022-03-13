import { CSSProperties } from "react";

export interface TestProjectProps {
    title: string;
    url: string;
    thumbnail: string;
    description: string;
    show: boolean;
}

export interface ProjectsListProps {
    projects: TestProjectProps[]
}

export interface ProjectProps {
    description: string;
    title: string;
    url: string;
    thumbnail: string;
    extraStyles?: CSSProperties;
    backgroundColor?: string;
    textColor?: string;
}