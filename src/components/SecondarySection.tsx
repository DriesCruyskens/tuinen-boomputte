import { css } from '@emotion/react';

import { StaticImage } from "gatsby-plugin-image"

import { COLORS, BREAKPOINTS } from '../constants/constants'

const sectionStyle = css`
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 100px;

    padding: 60px 40px 60px 40px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        flex-direction: column-reverse;
        gap: 60px;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        padding: 60px 10px 60px 10px;
    }
`;

const imageStyle = css`
    display: block;
    width: 500px;
    height: 500px;
    border-radius: 50%;

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        width: 400px;
        height: 400px;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        width: 270px;
        height: 270px;
    }
`;

const textStyle = css`
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    color: ${COLORS.textColor};

    display: block;
    max-width: 450px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        max-width: 80%;
    }

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        max-width: 90%;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        max-width: 95%;
        font-size: 16px;
    }
`;

const SecondarySection = () => {
    return (
        <section css={sectionStyle}>
            <StaticImage css={imageStyle} alt="Garden Background" src="../images/bushes1.jpeg"></StaticImage>
            <p css={textStyle}>Onze voorkeur gaat uit naar oordeelkundige, efficiënte en piekfijne uitvoering. Daarom stellen we altijd een bezoek voor zodat we zicht krijgen op het terrein en de eigenschappen ervan zoals grondsoort, zonoriëntatie, helling, en andere omgevingsfactoren.</p>
        </section>
    )
}

export default SecondarySection