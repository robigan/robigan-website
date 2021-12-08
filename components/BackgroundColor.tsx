import Head from "next/head";

const BackgroundColor = ({ backgroundColor = "#ffffff00", disableMetaThemeColor = false }) => {
    return (
        <>
            {!disableMetaThemeColor && <Head>
                <meta name="theme-color" content={backgroundColor} />
            </Head>}
            <div style={{ zIndex: "-10",backgroundColor: backgroundColor }} className="fixed w-screen h-screen top-0 left-0">
            </div>
        </>
    );
};

export default BackgroundColor;