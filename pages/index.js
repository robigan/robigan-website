import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Robigan - Homepage</title>
                <meta name="description" content="Robigan's homepage" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Image src="/images/bg-homepage3.jpeg" alt="Background Image" layout="fill" />
            <div>
                <nav className={styles.nav}>
                    <Link href="/about">
                        <a>Start</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </nav>
                <h1 className={styles["main-text"]} style={{fontSize: "3em"}}>robigan</h1>
            </div>
        </>
    );
}
