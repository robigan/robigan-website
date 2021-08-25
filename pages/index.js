import Head from "next/head";
import styles from "../styles/index.module.css";
import Section from "../components/Section";
import shapeStyles from "../styles/shapeStyles.section.module.css";
import ContactMe from "../components/ContactMe";

export default function Home() {
    return (
        <>
            <Head>
                <title>Robigan - Homepage</title>
                <meta name="description" content="Robigan's homepage" />
            </Head>
            <div className={styles.Sections}>
                <Section backgroundColor="blueviolet" shapeStyle="Tilt1">
                    <h1>Hello There</h1>
                    <p>I am robigan and this is my web page.</p>
                </Section>
                <Section backgroundColor="#202731" shapeStyle="None">
                    <div className={shapeStyles.Tilt1}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ "fill": "blueviolet" }}></path>
                        </svg>
                    </div>
                    <div style={{ height: "5vh" }}></div>
                    <h1>Nice Curves</h1>
                    <p>Beatae enim iusto deserunt, asperiores ad fugiat odit, veniam voluptatem quam harum corporis excepturi earum consequatur. Excepturi rerum ad, id fuga, explicabo doloribus ab illum tempora officiis libero repudiandae sequi!</p>
                </Section>
                <Section backgroundColor="tomato">
                    <div className={shapeStyles.Wavy1}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" style={{ "fill": "#202731" }}></path>
                        </svg>
                    </div>
                    <div style={{ height: "12vh" }}></div>
                    <h1>Contact Me</h1>
                    <ContactMe />
                </Section>
            </div>
        </>
    );
}
