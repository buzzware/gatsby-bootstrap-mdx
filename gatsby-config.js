module.exports = {
  siteMetadata: {
    title: `Gatsby Bootstrap`,
    description: `Gatsby Bootstrap MDX`,
    author: `Gary McGhee`,
    siteUrl: "https://www.yourdomain.tld"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
        ],
        sassOptions: {
          precision: 6,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-bootstrap-mdx`,
        short_name: `gatsby-bootstrap-mdx`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "MyTrackingId",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: {
        //   default: require.resolve("./src/components/Layout.js"),
        // },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
