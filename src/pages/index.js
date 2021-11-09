import * as React from "react"
import Layout from "../components/layout/layout";
import Welcome from "../components/welcome/welcome";
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

const IndexPage = ({data}) => {
    const { imageData } = data;
    const image = getImage(imageData.childrenImageSharp[0]);
    return (
    <Layout>

       <Welcome image={image}/>
    </Layout>
  )
};
export const query = graphql`
    query {
        imageData: file(relativePath: {eq: "projects/PH856-EdwardsG-Mod1--14.jpg"}) {
            childrenImageSharp {
                gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                    quality: 50
                    webpOptions: { quality: 80 }
                    transformOptions: { cropFocus: NORTHWEST, fit: COVER }
                    blurredOptions: { toFormat: PNG, width: 10 }
                )
            }
        }
    }
`

export default IndexPage
