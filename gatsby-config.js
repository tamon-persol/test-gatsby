module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "edyy portfoilio",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects`,
      },
    },
  ],
};
