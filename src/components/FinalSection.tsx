import { css } from '@emotion/react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StaticImage } from "gatsby-plugin-image"

import { COLORS, BREAKPOINTS } from '../constants/constants'

const sectionStyle = css`
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    padding: 60px 40px 60px 40px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        gap: 60px;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        padding: 30px 10px 30px 10px;
    }
`;

const imageStyle = css`
    display: block;
    width: 400px;
    margin: 20px 20px 40px 20px;

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        width: 400px;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        width: 270px;
        margin-bottom: 20px;
    }
`;

const textStyle = css`
    font-size: 18px;
    line-height: 30px;
    margin: 0;
    color: ${COLORS.textColor};
    text-align: center;

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
        font-size: 17px;
    }
`;

const textStyleBold = css`
    font-size: 20px;
    margin: 0;
    color: ${COLORS.textColor};
    text-align: center;

    font-family: "Gotham Bold";

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
        font-size: 17px;
    }
`;

const contactCardStyle = css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    margin-top: 40px;

    background-color: #cce2b95F;
    border-radius: 20px;
    padding: 60px;

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        margin-top: 20px;
        max-width: 90%;
        padding: 20px;
    }
`;

const contactItemStyle = css`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const contactLinkStyle = css`
    font-size: 18px;
    font-family: "Gotham Bold";
    color: ${COLORS.textColor};

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        font-size: 15px;
    }
`;

const FinalSection = () => {
    return (
        <section css={sectionStyle}>
            <StaticImage css={imageStyle} alt="Garden Background" src="../images/logo.png"></StaticImage>
            <p css={textStyle}>U zoekt een tuinman met vakkennis, aangepast en professioneel materiaal, oog voor afwerking en een eerlijke prijs?</p>
            <h2 css={textStyleBold}>Contacteer ons voor een vrijblijvende offerte.</h2>
            <div css={contactCardStyle}>
                <div css={contactItemStyle}>
                    <FontAwesomeIcon icon={faPhone} color={COLORS.textColor}></FontAwesomeIcon>
                    <a css={contactLinkStyle} href="tel:+32472401583" target="_blank">+32 4 72 40 15 83</a>
                </div>
                <div css={contactItemStyle}>
                    <FontAwesomeIcon icon={faEnvelope} color={COLORS.textColor}></FontAwesomeIcon>
                    <a css={contactLinkStyle} href="mailto:tuinen.boomputte@gmail.com" target="_blank">tuinen.boomputte@gmail.com</a>
                </div>
                <div css={contactItemStyle}>
                    <FontAwesomeIcon icon={faLocationDot} color={COLORS.textColor}></FontAwesomeIcon>
                    <a css={contactLinkStyle} href="http://maps.google.com/?q=Jourdanstraat 121 bus 35a Sint-Gillis 1060" target="_blank">Jourdanstraat 121 bus 35a Sint-Gillis 1060</a>
                </div>
                <div css={contactItemStyle}>
                    <span css={contactLinkStyle}>BTW: BE 077 99 09 19 7</span>
                </div>
            </div>
        </section>
    )
}

export default FinalSection