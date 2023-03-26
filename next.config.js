module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["raw.githubusercontent.com", "picsum.photos"]
    },
    async redirects() {
        return [
            {
                source: "/contact/instagram",
                destination: "/contact/linktree",
                permanent: true,
            },
            {
                source: "/contact/whatsapp",
                destination: "/contact/linktree",
                permanent: true,
            },
            {
                source: "/contact/telegram",
                destination: "/contact/linktree",
                permanent: true,
            },
        ];
    },
};
