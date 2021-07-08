import styles from "../styles/Console.module.css";

export default function Console() {
    const ConsoleState = {};
    if (!ConsoleState) throw new Error("ConsoleState is not defined/is falsey");
    ConsoleState.commands = new Map();
    ConsoleState.lines = [];

    ConsoleState.lineAdd = async (Text) => {
        ConsoleState.lines.push(<p className={styles.ConsoleLine}>{Text}</p>);
    };
    ConsoleState.commands.set("clear", async () => {
        ConsoleState.lines = [];
    });

    const test = async (...test) => {
        console.log(test);
    };

    return (
        <div className={styles.Console}>
            <div className={styles.ConsoleContent}>
                {ConsoleState.lines}
            </div>
            <input className={styles.ConsoleInput} placeholder="Type something here!" onInput={test}></input>
        </div>
    );
}

export function lineAdd({ targetConsole }) {
    targetConsole;
}