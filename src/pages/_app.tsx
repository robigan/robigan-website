import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { FC } from "react";
import { IconContext } from "react-icons/lib";
import ModalManager from "../components/ModalManager";

const _App: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#101010" />
            </Head>


            <ModalManager.Provider>
                <IconContext.Provider value={{ size: "100%" }}>
                    <Component {...pageProps} />
                </IconContext.Provider>
            </ModalManager.Provider>
        </>
    );
};

export default _App;
