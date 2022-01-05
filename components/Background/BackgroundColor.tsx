import Head from "next/head";

const BackgroundColor = ({ backgroundColor = "#202731ff", disableMetaThemeColor = false }) => {
    return (
        <>
            {!disableMetaThemeColor && <Head>
                <meta name="theme-color" content={backgroundColor} />
            </Head>}
            <div style={{ backgroundColor: backgroundColor }} className="fixed w-screen h-screen top-0 left-0 select-none -z-20">
            </div>
        </>
    );
};

export default BackgroundColor;