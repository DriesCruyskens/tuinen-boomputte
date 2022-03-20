import { css } from '@emotion/react';

import { StaticImage } from "gatsby-plugin-image"

import { COLORS, BREAKPOINTS } from '../constants/constants'

import ImageGallery from '@browniebroke/gatsby-image-gallery'
import { graphql, useStaticQuery } from 'gatsby';

const sectionStyle = css`
    max-width: 800px;
    margin: 120px auto 60px auto;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        margin-top: 60px;
        max-width: 80%;
    }

    @media (max-width: ${BREAKPOINTS.phoneLandscape}) {
        margin-top: 30px;
        max-width: 90%;
    }
`;

const titleStyle = css`
    font-size: 30px;
    color: ${COLORS.green};
    font-family: "Gotham Bold";
    margin: 0;
    margin-bottom: 30px;

    @media (max-width: ${BREAKPOINTS.tablet}) {
        text-align: center;
    }
`;

// This is here so Typescript does not throw error.
// https://stackoverflow.com/questions/63754776/how-to-fix-binding-element-post-implicitly-has-an-any-type-ts7031
type Node = {
    node: {
        childImageSharp: any;
    };
}

const Gallery = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allFile(sort: {fields: name}, filter: {relativeDirectory: {eq: "gallery"}}) {
            edges {
                node {
                    relativePath
                    childImageSharp {
                        thumb: gatsbyImageData(
                            width: 270
                            height: 270
                            placeholder: BLURRED)
                        full: gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
    `);

    const images = data.allFile.edges.map(({ node }: Node, index: number) => {
        return {...node.childImageSharp,
                // caption: `Image ${index}`,
                // title: `Image ${index}`, 
                thumbAlt: `Image ${index}`
            }
    });

    return (
        <section css={sectionStyle}>
            <h2 css={titleStyle}>Gallerij</h2>
            <ImageGallery images={images} />
        </section>
    )
}

export default Gallery