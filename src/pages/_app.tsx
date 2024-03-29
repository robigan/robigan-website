import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { FC } from "react";
import { IconContext } from "react-icons/lib";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const _App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#101010" />
            </Head>


            <IconContext.Provider value={{ size: "100%" }}>
                <Component {...pageProps} />
            </IconContext.Provider>

            <Analytics />
            <SpeedInsights />
        </>
    );
};

export default _App;
