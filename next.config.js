/** @type {import('next').NextConfig} */
module.exports = {
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
};
