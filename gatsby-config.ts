import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: process.env.ENABLE_PATH_PREFIX === `true` ? `/blog` : undefined,
  siteMetadata: {
    title: "gatsby-typescript",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [],
};

export default config;
