/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Tuinen Boomputte`,
    siteUrl: `https://www.tuinenboomputte.be`
  },
  plugins: ["gatsby-plugin-netlify-cms", 
            "gatsby-plugin-emotion", 
            "gatsby-plugin-image", 
            "gatsby-plugin-react-helmet", 
            "gatsby-plugin-sitemap", 
            "gatsby-plugin-sharp", 
            "gatsby-transformer-sharp", {
              resolve: 'gatsby-source-filesystem',
              options: {
                "name": "images",
                "path": "./src/images/"
              },
              __key: "images"
            }   
]
};