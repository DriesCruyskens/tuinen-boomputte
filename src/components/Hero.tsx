import { css } from '@emotion/react';

import { StaticImage } from "gatsby-plugin-image"
import { BREAKPOINTS } from '../constants/constants';

const imageStyle = css`
    max-width: 30%;
    margin: 100px auto 100px auto;
    display: block;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        max-width: 60%;
    }

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        margin: 70px auto 70px auto;
        max-width: 80%;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        margin: 50px auto 50px auto;
        max-width: 90%;
    }
`;

const Hero = () => {
    return (
        <StaticImage css={imageStyle} alt="Tuinen Boomputte Logo" src="../images/header.jpg"></StaticImage>
    )
}

export default Hero