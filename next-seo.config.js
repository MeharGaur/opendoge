/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    defaultTitle: "OpenDoge NFT Marketplace",
    titleTemplate: "%s — OpenDoge NFT Marketplace",
    defaultTitle: "OpenDoge",
    description: "OpenDoge is the Premier NFT Marketplace on Dogechain.",
    canonical: "https://opendoge.org",
    openGraph: {
        url: "https://opendoge.org",
        title: "OpenDoge NFT Marketplace",
        description: "OpenDoge is the Premier NFT Marketplace on Dogechain.",
        images: [
            {
                url: "https://opendoge.org/img/og.png",
                alt: "OpenDoge logo",
            },
        ],
        site_name: "OpenDoge NFT Marketplace",
    },
    twitter: {
        handle: "@OpenDoge",
        cardType: "summary_large_image",
    },
}

export default defaultSEOConfig
