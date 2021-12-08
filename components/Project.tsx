import styles from "../styles/project.module.css";

import { FC } from "react";
import { ProjectProps } from "./ProjectTypes";

const Project: FC<ProjectProps> = ({ backgroundColor = "#fff", textColor = "#000", text = "", title = "", url = "", extraStyles = {}}) => {
    return (
        <div style={Object.assign({ backgroundColor: backgroundColor, color: textColor }, extraStyles)} className={styles.project + " rounded-3xl text-center flex flex-col flex-nowrap justify-between"}>
            <h1>{title}</h1>
            <p>{text}</p>
            <a href={url}>Visit the project page</a>
        </div>
    );
};

export default Project;