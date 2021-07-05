import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Robigan - Homepage</title>
                <meta name="description" content="Robigan's homepage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Image src="/images/background-homepage.jpeg" alt="Background Image" layout="fill" />
                <nav className={styles.nav}>
                    <p>Test</p>
                    <p>Test 2</p>
                </nav>
                <p className={styles["content-text"]}>I am a teenaged web developer that likes dipping his hands into anything, from setting up servers to making full stack apps. I am proficient in JavaScript and Lua, I can also script in Python and Java.</p>
            </div>
        </>
    );
}
