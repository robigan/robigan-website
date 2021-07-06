import styles from "../styles/Console.module.css";

export default function Console() {
    return (
        <div className={styles.Console}>
            <p className={styles.ConsoleLine}>Test</p>
            <input className={styles.ConsoleInput}></input>
        </div>
    );
}

export function lineAdd({ targetConsole }) {
    targetConsole;
}