module.exports = {
  siteMetadata: {
    title: `Coding Palta`,
    siteUrl: `https://codingpalta.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-svgr", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-plugin-i18n',
    options: {
      langKeyDefault: 'en',
      useLangKeyLayout: false,
      prefixDefault: false,
    },
  }],
  pathPrefix: "/coding-palta-web",
};

