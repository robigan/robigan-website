import styles from "../styles/Console.module.css";

export default function Console({ /** @type {Object} */ConsoleState }) {
    if (!ConsoleState) throw new Error("ConsoleState is not defined/is falsey");
    ConsoleState.lines = [];
    ConsoleState.lineAdd = async (Text) => {
        ConsoleState.lines.push(<p className={styles.ConsoleLine}>{Text}</p>);
    };

    ConsoleState.lineAdd("Lorem");
    ConsoleState.lineAdd("Ipsum");
    ConsoleState.lineAdd("Dolor");

    return (
        <div className={styles.Console}>
            <div className={styles.ConsoleContent}>
                {ConsoleState.lines}
            </div>
            <input className={styles.ConsoleInput} placeholder="Type something here!"></input>
        </div>
    );
}

export function lineAdd({ targetConsole }) {
    targetConsole;
}