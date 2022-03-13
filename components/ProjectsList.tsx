import styles from "../styles/Project.module.css";
import { FC } from "react";
import { ProjectsListProps, ProjectProps } from "../lib/ProjectsList";

const Project: FC<ProjectProps> = ({ description, title, url, thumbnail, extraStyles = {}, backgroundColor = "#fff", textColor = "#000"}) => {
    return (
        <div style={Object.assign({ backgroundColor: backgroundColor, color: textColor }, extraStyles)} className={styles.project + " rounded-3xl text-center flex flex-col flex-nowrap justify-between"}>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={url}>Visit the project page</a>
        </div>
    );
};

const ProjectsList:FC<ProjectsListProps> = () =>  {
    return (
        <div className="flex flex-row flex-auto">
            {}
        </div>
    );
};

export default ProjectsList;