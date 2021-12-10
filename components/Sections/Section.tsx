import { FC } from "react";
import { SectionProps } from "../../lib/indexTypes";
import styles from "../../styles/Section.module.css";

const Section: FC<SectionProps> = ({ children, backgroundColor = "#ffffff00", paddingTop = false, paddingBot = false, extraStyles = {self: {}, top: {}, bottom: {}}}) => {
    return (
        <section style={Object.assign({ backgroundColor: backgroundColor, minHeight: 150 }, extraStyles.self ?? {} )} className={styles["Section-padding"] + " p-0 relative flex flex-col items-center "}>
            {
                (typeof paddingTop === "boolean") && paddingTop ? <div style={{ height: "5rem" }}></div> : typeof paddingTop === "string" ? <div style={Object.assign({ height: `calc(${paddingTop})` }, extraStyles.top ?? {})}></div> : <></>
            }
            {children}
            {
                (typeof paddingBot === "boolean") && paddingBot ? <div style={{ height: "5rem" }}></div> : typeof paddingBot === "string" ? <div style={Object.assign({ height: `calc(${paddingBot})` }, extraStyles.bottom ?? {})}></div> : <></>
            }
        </section>
    );
};

export default Section;