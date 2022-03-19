import * as React from "react";

import { css, Global } from '@emotion/react';
import { useStaticQuery, graphql } from "gatsby"

import gothamBook from '../fonts/Gotham-Book.otf';
import gothamBold from '../fonts/Gotham-Bold.otf';

const globalStyle = css`
@font-face {
  font-family: "GothamBook";
  src: url(${gothamBook}) format("opentype");
}

@font-face {
  font-family: "Gotham Bold";
  src: url(${gothamBold}) format("opentype");
}

body {
  font-family: "GothamBook";
}
`

const FooterStyles = css`
  margin: 50px;
  font-size: .7rem;
  text-align: center;

  @media (max-width: 500px) {
    padding: 0 3%;
}
`

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main>
      <Global styles={globalStyle}/>
      <title>Home</title>
      <h1>
        Tuinen Boomputte
        <br />
      </h1>
      <footer css={FooterStyles}>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
      </footer>
    </main>
  )
}

export default IndexPage