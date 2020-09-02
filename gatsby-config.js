const path = require("path");

module.exports = {
    siteMetadata: {
        title: `Tanz`,
        description: `Tanz portfolio.`,
        author: `@tanz`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-typescript`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-i18n`,
            options: {
                langKeyDefault: `en`,
                useLangKeyLayout: false,
            },
        },
        {
            resolve: `gatsby-plugin-root-import`,
            options: {
                src: path.join(__dirname, `src`),
                components: path.join(__dirname, `src/components`),
                pages: path.join(__dirname, `src/pages`),
                styles: path.join(__dirname, `src/styles`),
                images: path.join(__dirname, `src/images`),
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
