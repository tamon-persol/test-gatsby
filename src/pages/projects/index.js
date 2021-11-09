import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from './style.module.sass'


function getSpanEstimate(size) {
    if (size > 250) {
        return 2
    }

    return 1
}

export default function PostPage({ data }) {

    const [index, setIndex] = useState(null)
    return (
        <Layout>
            <div>
                <h1>Projects</h1>
                <div className={style.gridContainer}>
                    {
                        data.imagesData.edges
                            .map(image => image.node.childrenImageSharp[0])
                            .filter(image => image !== undefined)
                            .map((imageData, i) => {

                                const image = getImage(imageData)
                                const styleIn = {
                                    gridColumnEnd: `span ${getSpanEstimate(image.width)}`,
                                    gridRowEnd: `span ${getSpanEstimate(image.height)}`,
                                }
                                return (
                                    <div className={`${style.imageContainer} ${index === i && style.overlay}`}
                                         style={styleIn} key={i} onClick={() => {
                                        if (index !== i) {
                                            setIndex(i)
                                        } else {
                                            setIndex(null)
                                        }
                                    }}>
                                        <GatsbyImage className={`${style.image} ${index === i && style.imageFull}`}
                                                     image={image} alt='project' />
                                    </div>

                                )
                            })
                    }
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        imagesData: allFile(filter: {relativeDirectory: {eq: "projects"}}
        ) {
            edges {
                node {
                    relativePath
                    childrenImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`