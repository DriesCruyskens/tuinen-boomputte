import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// https://dev.to/smetzdev/how-to-translate-the-gatsby-seo-component-to-typescript-15jl
export function SEO({
    lang = "nl",
    meta = [],
    title,
}: SEOProps) {
    const { site } = useStaticQuery<QueryTypes>(SEOStaticQuery)

    const defaultTitle = site.siteMetadata.title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
            meta={[
                {
                    name: `description`,
                    content: site.siteMetadata.description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: site.siteMetadata.description,
                },
                {
                    property: `og:type`,
                    content: `business.business`,
                },
                {
                    property: `og:url`,
                    content: `${site.siteMetadata.siteUrl}`,
                },
                {
                    property: `og:image`,
                    content: `${site.siteMetadata.siteUrl}tuinen_boomputte.jpg`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    property: `twitter:url`,
                    content: `${site.siteMetadata.siteUrl}`,
                },
                {
                    property: `twitter:image`,
                    content: `${site.siteMetadata.siteUrl}tuinen_boomputte.jpg`,
                },
                {
                    name: `twitter:description`,
                    content: site.siteMetadata.description,
                },
            ].concat(meta)}>
            {/* <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "url": "${site.siteMetadata.siteUrl}",
                    "name": "${site.siteMetadata.title}",
                    "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+5-601-785-8543",
                            "contactType": "Customer Support"
                        }
                    "areaServed": {
                            
                        }
                    }
                `}
            </script> */}
        </Helmet>
    )
}

// Types
type SEOProps = {
    description?: string
    lang?: string
    meta?: Meta
    title: string
}

type Meta = ConcatArray<PropertyMetaObj | NameMetaObj>

type PropertyMetaObj = {
    property: string
    content: string
}

type NameMetaObj = {
    name: string
    content: string
}

type QueryTypes = {
    site: {
        siteMetadata: {
            title: string
            description: string
            siteUrl: string
        }
    }
}

// Queries
const SEOStaticQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`