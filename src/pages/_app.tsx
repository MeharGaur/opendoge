import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "lib/components/layout";

import "lib/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <Layout>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
