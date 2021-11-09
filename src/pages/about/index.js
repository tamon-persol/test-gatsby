import React from 'react'
import Layout from '../../components/layout/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as style from './style.module.sass'

const Index = ({ data }) => {

    const { imageData } = data
    const image = getImage(imageData.childrenImageSharp[0])
    return (<Layout>
        <div>
            <GatsbyImage className={style.image} alt='gb' image={image} />
            <div>
                <div>
                    <p>
                        Gary “Eddie” Edwards is a photographer who has spent the last 18 years photographing
                        the world around him. <br />
                        At present his work is focused on portraiture, places, and people. <br />
                        The work he creates is focused primarily around life, light, and his way of looking. <br />
                    </p>
                    <p>
                        At Kanagawa Photo, he strives to create something unique and tailored to any situation
                        that arises and meet challenges head on.
                    </p>

                    <p>Photography is a lifestyle for Eddie and he strives to maintain that intimacy with the work
                        he creates and the people he chooses to work with.
                    </p>

                    <p>Outside of photography, Eddie is a parent, avid explorer, traveler, foodie, and outdoorsman.</p>

                        <p>you can contact me to: <a href="mailto:info&#64;example.com">info&#64;example.com</a></p>

                </div>
            </div>
        </div>
    </Layout>)

}
export const query = graphql`
    query {
        imageData: file(relativePath: {eq: "projects/PH856-EdwardsG-Mod5--3.jpg"}) {
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
export default Index