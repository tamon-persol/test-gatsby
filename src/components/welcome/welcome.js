import * as style from './style.module.sass'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Welcome = ({ image }) => {
    return (
        <div className={style.container}>
            <div className={style.horizontal}>
                <GatsbyImage className={style.image} image={image} alt='bg' />

                <p className={style.text}>
                    Welcome all,<br />
                    I’m a world traveler,<br />
                    photographer,<br />
                    avid reader and lover of adventure
                </p>
            </div>

            <button className={style.btn}><Link to='/projects'> Explore </Link></button>
        </div>
    )
}

export default Welcome