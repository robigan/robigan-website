import styles from "../styles/UIBox.module.css";

export default function UIBox({ StyleState, props }) {
    StyleState = Object.assign({}, StyleState);
    return (
        <div className={styles.UIBox} style={StyleState}>
            {props}
        </div>
    );
}