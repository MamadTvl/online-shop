import React from "react";
import Header from './Header'
import Footer from './Footer'
import {useStyles} from "./Styles/ShopLayoutStyle";


function ShopLayout(props) {
    const classes = useStyles()

    return (
        <>
            <Header/>
            <main className={classes.main}>
                <div className={classes.toolbar}/>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}

export default ShopLayout