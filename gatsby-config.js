/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Tuinen Boomputte`,
    siteUrl: `https://www.tuinenboomputte.be`,
    description: `Wij zijn een gepassioneerd tuinbedrijf uit het Pajottenland met oog voor detail en een neus voor efficiëntie. Ervaren en gespecialiseerd in het onderhouden van tuinen.`,
    keywords: `tuinman, gezocht, tuinonderhoud, hovenier, tuinen, boomputte, yente, snoeien, hagen, dilbeek, vlezenbeek, tuinaannemer, itterbeek, schepdaal, sint-pieters-leeuw, onderhoud, beuk, haag, taxus, buxus, liguster, laurierhaag`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
  ],
};