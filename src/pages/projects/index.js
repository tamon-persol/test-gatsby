import React from 'react'
import {graphql} from "gatsby";

export default function PostPage({data}) {
    const mdx = data.mdx.frontmatter;
    return (
        <>
            <h1>{mdx.shortTitle}!</h1>
        </>
    )
}

export const query = graphql`
    query PostBySlug($slug: String) {
        mdx(slug: { eq: $slug }) {
            id
            slug
            body
            frontmatter {
                shortTitle
                embeddedImagesLocal {
                    childImageSharp {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                        )
                    }
                }
            }
        }
    }
`