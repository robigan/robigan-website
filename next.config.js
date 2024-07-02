// @ts-check
// const contactsImport = require("./public/contacts.json");
import contactsImport from "./public/contacts.json" assert { type: "json" };
import { _compileUri } from "./src/lib/contact/_contact.js";

/** @type {import('./src/lib/contact').Contacts} */
const contacts = contactsImport.contacts;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/contact/instagram",
                destination: "/contact/linktree",
            },
            {
                source: "/contact/whatsapp",
                destination: "/contact/linktree",
            },
            {
                source: "/contact/telegram",
                destination: "/contact/linktree",
            },
            {
                source: "/contact/signal",
                destination: "/contact/linktree",
            },
        ];
    },
    async redirects() {
        // return [
        //   {
        //     source: '/rdr/discord',
        //     destination: 'https://discord.com/users/315526915828219906',
        //     permanent: true,
        //   },
        // ]
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const computedRedirects = Object.entries(contacts).filter(([_, value]) => {
            return value.preferredType === "uri";
        }).map(([key, value]) => {
            return {
                source: `/rdr/${key}`,
                destination: _compileUri(value),
                permanent: true,
            };
        });

        return [...computedRedirects, {
            source: "/instagram",
            destination: "/contact/instagram",
            permanent: true,
        },
        {
            source: "/ig",
            destination: "/contact/instagram",
            permanent: true,
        },
        {
            source: "/whatsapp",
            destination: "/contact/whatsapp",
            permanent: true,
        },
        {
            source: "/wa",
            destination: "/contact/whatsapp",
            permanent: true,
        },
        {
            source: "/telegram",
            destination: "/contact/telegram",
            permanent: true,
        },
        {
            source: "/tg",
            destination: "/contact/telegram",
            permanent: true,
        },
        {
            source: "/signal",
            destination: "/contact/signal",
            permanent: true,
        },
        {
            source: "/sgnl",
            destination: "/contact/signal",
            permanent: true,
        }];
    },
};

export default nextConfig;
