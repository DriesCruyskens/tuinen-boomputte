import { css } from '@emotion/react';

import { StaticImage } from "gatsby-plugin-image"

import { COLORS, BREAKPOINTS } from '../constants/constants'

const sectionStyle = css`
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: row;
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

    @media (max-width: ${BREAKPOINTS.tablet}) {
        display: none;
    }
`;

const titleStyle = css`
    font-size: 30px;
    color: ${COLORS.green};
    font-family: "Gotham Bold";

    @media (max-width: ${BREAKPOINTS.tablet}) {
        text-align: center;
    }
`;

const contentContainerStyle = css`
    margin: 0;

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
    }
`;

const listItemStyle = css`
    font-size: 18px;
    color: ${COLORS.textColor};
    margin-bottom: 10px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        text-align: center;
    }

    @media (max-width: ${BREAKPOINTS.phonePortrait}) {
        font-size: 16px;
    }
`;

const activities: string[] = [
    "Snoeien van hagen en planten",
    "Aanplantingen",
    "Aanleggen grasmatten & inzaaien gazon",
    "Gras maaien", "Verticuteren",
    "Aanbrengen boomschors",
    "Onkruid Verwijderen",
    "Bemesten",
    "Kalk strooien",
    "Blad opkuis",
    "Meenemen snoeiafval",
    "Advies en suggesties geven omtrent plantenkeuze",
    "Onderhoud van tuinen"
];


const TertiarySection = () => {
    return (
        <section css={sectionStyle}>
            <StaticImage css={imageStyle} alt="Garden Background" src="../images/garden1.jpeg"></StaticImage>
            <div css={contentContainerStyle}>
                <h2 css={titleStyle}>Activiteiten</h2>
                <ul css={css`list-style-type: none; margin: 0; padding: 0;`}>
                    {activities.map((activity: string) => {
                        return <li css={listItemStyle}>{activity}</li>;
                    })}
                </ul>
            </div>
        </section>
    )
}

export default TertiarySection