import * as React from "react";

import { css } from '@emotion/react';

import { StaticImage } from "gatsby-plugin-image"
import { BREAKPOINTS, COLORS } from '../constants/constants';

const imageStyle = css`
    max-width: 30%;
    margin: 100px auto 0px auto;
    display: block;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        max-width: 60%;
    }

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        margin: 70px auto 0px auto;
        max-width: 80%;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        margin: 50px auto 0px auto;
        max-width: 90%;
    }
`;

const subtitleStyle = css`
    font-family: "Gotham Bold";
    margin: 40px auto 40px auto;
    color: rgb(100, 100, 100);
    letter-spacing: .2rem;
    text-align: center;

    @media (max-width: ${BREAKPOINTS.tablet}) {
    }

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
    }
`;

const Hero = () => {
    return (
        <>
            <StaticImage css={imageStyle} alt="Tuinen Boomputte Logo" src="../images/header.jpg"></StaticImage>
            <p css={subtitleStyle}>Regio Pajottenland</p>
        </>
    )
}

export default Hero