import * as React from "react";

import { css, Global } from '@emotion/react';
import { PageProps, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import gothamBook from '../fonts/Gotham-Book.otf';
import gothamBold from '../fonts/Gotham-Bold.otf';

import { COLORS } from '../constants/constants'

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
  color: '${COLORS.textColor}',
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

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({
  data,
}) => {
  return (
    <main>
      <Global styles={globalStyle} />
      <title>Home</title>
      <h1>
        Tuinen Boomputte
        <br />
      </h1>
      <FontAwesomeIcon icon={faAt} color={COLORS.green} size="2x" fixedWidth></FontAwesomeIcon>
      <FontAwesomeIcon icon={faEnvelope} color={COLORS.lightGreen}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPhone} color={COLORS.greenYellow}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>

      <footer css={FooterStyles}>
        © {new Date().getFullYear()} {data.site.siteMetadata.title}
      </footer>
    </main>
  )
}

export const query = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

export default IndexPage
