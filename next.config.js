// @ts-check
// const contactsImport = require("./public/contacts.json");
import contactsImport from "./public/contacts.json" assert { type: "json" };
import { _compileUri } from "./src/lib/data/_contact.js";

/** @type {import('./src/lib/data/contact').Contacts} */
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
        return Object.entries(contacts).filter(([_, value]) => {
            return value.preferredType === "uri";
        }).map(([key, value]) => {
            return {
                source: `/contact/${key}`,
                destination: _compileUri(value),
                permanent: true,
            };
        });
    },
};

export default nextConfig;
