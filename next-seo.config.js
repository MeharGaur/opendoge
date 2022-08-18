/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MoonMan Rewards",
  titleTemplate: "%s | MoonMan Rewards",
  defaultTitle: "MoonMan Rewards",
  description: "MoonMan Rewards dashboard where you can claim and withdraw your rewards.",
  canonical: "https://rewards.moonman.live",
  openGraph: {
    url: "https://rewards.moonman.live",
    title: "MoonMan Rewards",
    description: "MoonMan Rewards dashboard where you can claim and withdraw your rewards.",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-tailwind**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "MoonMan logo",
      },
    ],
    site_name: "MoonMan Rewards",
  },
//   twitter: {
//     handle: "@moonman",
//     cardType: "summary_large_image",
//   },
};

export default defaultSEOConfig;
