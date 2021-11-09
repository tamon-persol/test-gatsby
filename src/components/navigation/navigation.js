import * as React from "react"
import {Link} from "gatsby"
import * as style from "./style.module.sass"

const Navigation = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Link className={style.logo} to="/">
                    Eddy Portfolio
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
