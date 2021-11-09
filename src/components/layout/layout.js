import * as React from "react"
import * as style from "./style.module.sass"
import Navigation from "../navigation/navigation";

const Layout = ({children}) => {
    return (
        <main className={style.container}>
            <Navigation />
            {children}
        </main>
    )
};

export default Layout
