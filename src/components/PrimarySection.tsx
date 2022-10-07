import { css } from '@emotion/react';

import { StaticImage } from "gatsby-plugin-image"

import { BREAKPOINTS, COLORS } from '../constants/constants'

const sectionStyle = css`
    position: relative; 
    overflow: hidden;
    
    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        padding: 20px;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        padding: 0;
    }
`;

const imageStyle = css`
    display: inline-block;
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
`;

const introCardStyle = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    background-color: white;
    border-radius: 20px;
    float: right;

    position: relative;
    max-width: 450px;
    padding: 55px;
    margin: 60px 15% 60px 60px;

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        margin: 60px auto 60px auto;
        padding: 25px;
        float: initial;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        margin: 60px 10px 60px 10px;
        padding: 15px;
    }
`;

const textStyle = css`
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    color: ${COLORS.textColor};
`;

const headerStyle = css`
  font-family: "Gotham Bold";
  margin: 10px 0 0 0;
`;

const buttonStyle = css`
    display: inline-block;
    background-color: ${COLORS.green};
    padding: 10px 15px 10px 15px;
    border-radius: 10px;

    text-decoration: none;
    color: white;
    font-family: "Gotham Bold";

    transition: background-color 200ms;

    &:hover {
        background-color: ${COLORS.greenYellow}
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        font-size: 15px;
    }
`;

const PrimarySection = () => {
    return (
        <section css={sectionStyle}>
            <StaticImage css={imageStyle} alt="Garden Background" src="../images/garden1.jpeg"></StaticImage>
            <div css={introCardStyle}>
                <h1 css={headerStyle}>Tuinen Boomputte</h1>
                <p css={textStyle}>Wij zijn een gepassioneerd tuinbedrijf uit het Pajottenland met oog voor detail en een neus voor efficiëntie. Ervaren en gespecialiseerd in het onderhouden van tuinen.</p>
                <a css={buttonStyle} href="tel:+32472401583" >+32 4 72 40 15 83</a>
                <a css={buttonStyle} href="mailto:tuinen.boomputte@gmail.com" target="_blank">tuinen.boomputte@gmail.com</a>
            </div>
        </section>
    )
}

export default PrimarySection