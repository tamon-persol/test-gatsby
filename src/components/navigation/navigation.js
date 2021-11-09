import * as React from "react"
import {Link} from "gatsby"
import * as style from "./style.module.sass"
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = () => {
    const [isActive, setActive] = React.useState(false)

    return (
        <div className={style.wrapper}>
            <div className={style.containerSp}>
                <Link className={style.logo} to="/">
                    <StaticImage src='../../images/logo.png' alt='logo' />
                </Link>

                <div className={`${style.burger} ${isActive ? style.active : ""}`} onClick={() => setActive(!isActive)}/>
            </div>


            <div className={`${style.container} ${isActive ? style.activeSide : ""}`}>
                <Link className={`${style.logo} ${isActive ? style.disableLogo : ""}`} to="/">
                    <StaticImage src='../../images/logo.png' alt='logo' />
                </Link>

                <div className={style.navigation}>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    )
};

export default Navigation
