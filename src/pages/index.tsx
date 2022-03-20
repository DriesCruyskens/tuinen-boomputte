import * as React from "react";

import { css, Global } from '@emotion/react';
import { PageProps, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import gothamBook from '../fonts/Gotham-Book.otf';
import gothamBold from '../fonts/Gotham-Bold.otf';

import { COLORS } from '../constants/constants'

import Hero from '../components/Hero';
import PrimarySection from "../components/PrimarySection";
import SecondarySection from "../components/SecondarySection";

const globalStyle = css`
@font-face {
  font-family: "Gotham Book";
  src: url(${gothamBook}) format("opentype");
}

@font-face {
  font-family: "Gotham Bold";
  src: url(${gothamBold}) format("opentype");
}

body {
  margin: 0;
  font-family: "Gotham Book";
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

const defaultProps: DataProps = { site: { siteMetadata: { title: '' } } };

// Documentation on how to use Gatsbyjs with Typescript.
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/
const IndexPage = ({ data: { site } = defaultProps }: PageProps<DataProps>) => {
  return (
    <main>
      <Global styles={globalStyle} />
      <Hero></Hero>
      <PrimarySection></PrimarySection>
      <SecondarySection></SecondarySection>
      <FontAwesomeIcon icon={faAt} color={COLORS.green} size="2x" fixedWidth></FontAwesomeIcon>
      <FontAwesomeIcon icon={faEnvelope} color={COLORS.lightGreen}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faPhone} color={COLORS.greenYellow}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>

      <footer css={FooterStyles}>
        © {new Date().getFullYear()} {site.siteMetadata.title}
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
