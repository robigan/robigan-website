import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { FC } from "react";
import { IconContext } from "react-icons/lib";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Banner from "../components/Banner";

const _App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#101010" />
            </Head>

            <div className="h-screen w-screen flex flex-col flex-nowrap">
                <Banner id="new-pgp-keys-2024-07-02">
                    <Banner.Content>
                        <p>My PGP keys have been updated. Please download the new keys. New key fingerprint: 2482 E740 CEB6 94AF 0E24 B6AB 4643 CC01 3EC7 5214
                            <br />
                        See the Robigan OS (About) section in /media/robigan/Keys or download from OpenPGP / Ubuntu / MIT keyservers.</p>
                    </Banner.Content>
                </Banner>
    
                <IconContext.Provider value={{ size: "100%" }}>
                    <Component {...pageProps} />
                </IconContext.Provider>
            </div>

            <Analytics />
            <SpeedInsights />
        </>
    );
};

export default _App;
