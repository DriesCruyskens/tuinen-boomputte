/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Tuinen Boomputte`,
    siteUrl: `https://www.tuinenboomputte.be`,
    desciption: `Wij zijn een gepassioneerd tuinbedrijf uit het Pajottenland met oog voor detail en een neus voor efficiëntie. Ervaren en gespecialiseerd in het onderhouden van tuinen.`,
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