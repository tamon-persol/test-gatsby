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
                    I’m a <span className={style.highText1}>world traveler</span>,<br />
                    <span className={style.highText2}>photographer</span>,<br />
                    avid reader and <span className={style.highText3}>lover of adventure</span>
                </p>
            </div>

            <button className={style.btn}><Link to='/projects'> Explore </Link></button>
        </div>
    )
}

export default Welcome