import { css } from '@emotion/react';

import { StaticImage } from "gatsby-plugin-image"

const imageStyle = css`
    max-width: 30%;
    margin: 100px auto 100px auto;
    display: block;
`;

const Hero = () => {
    return (
        <StaticImage css={imageStyle} alt="Tuinen Boomputte Logo" src="../images/header.jpg"></StaticImage>
    )
}

export default Hero