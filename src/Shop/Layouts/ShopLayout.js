import React, {useEffect} from "react";
import Header from './Header'
import Footer from './Footer'
import {useStyles} from "./Styles/ShopLayoutStyle";
import {useHistory} from 'react-router-dom'

function ShopLayout(props) {
    const classes = useStyles()
    const history = useHistory()
    // useEffect(() => {
    //     if (history.location.pathname !==
    //         '/profile' ||
    //         'profile/cart' ||
    //         '/profile/addresses' ||
    //         '/profile/personal-info' ||
    //         '/profile/forget-password' ||
    //         '/login' ||
    //         '/signup' ||
    //         '/search' ||
    //         history.location.pathname.includes('product')
    //     ){
    //         history.push('/')
    //     }
    // }, [])
    return (
        <>
            <Header basketChange={props.basketChange}/>
            <main className={classes.main}>
                <div className={classes.toolbar}/>
                {props.children}
            </main>
            <Footer/>
        </>
    )
}

export default ShopLayout