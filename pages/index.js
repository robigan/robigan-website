import Head from "next/head";
import Image from "next/image";
import UIBox from "../components/UIBox";
import Console from "../components/Console";
import styles from "../styles/Home.module.css";

export default function Home() {
    const ConsoleState = {};

    return (
        <>
            <Head>
                <title>Robigan - Homepage</title>
                <meta name="description" content="Robigan's homepage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image src="/images/bg-homepage2.jpeg" alt="Background Image" layout="fill" />
            <div className={styles.UIParent}>
                <UIBox StyleState={{ order: 0 }} props={<p>Lorem Ipsum Dolor</p>} />
                <UIBox StyleState={{ order: 1 }} props={
                    <>
                        <p>To Do:</p>
                        <p>Fix the flexbox container</p>
                        <p>Fix relative positions</p>
                        <p>Make the console lineAdd() function</p>
                        <p>Learn about lifting states</p>
                    </>
                } />
                <UIBox StyleState={{ order: 2, flexGrow: 0.5, borderRadius: "10px" }} props={<Console ConsoleState={ConsoleState} />} />
            </div>
        </>
    );
}
