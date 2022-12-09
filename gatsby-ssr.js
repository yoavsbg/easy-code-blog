/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
 const React = require('react')

 const HeadComponents = [
   <script
     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2729041642631152"
     crossOrigin="anonymous"
     async
   />,
 ]


exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents  }) => {
  setHeadComponents(HeadComponents)
  setHtmlAttributes({ lang: `en` })
}
