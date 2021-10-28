import styles from "../styles/project.module.css";

export default function Project({ backgroundColor = "#fff", textColor = "#000", text = "", title = "", url = "", extraStyles = {}}) {
    return (
        <div style={Object.assign({ backgroundColor: backgroundColor, color: textColor }, extraStyles)} className={styles.project + " rounded-3xl text-center flex flex-col flex-nowrap justify-between"}>
            <h1>{title}</h1>
            <p>{text}</p>
            <a href={url}>Visit the project page</a>
        </div>
    );
}