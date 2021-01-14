import React from "react";
import {useStyles} from "./Styles/AmazingOffersStyle";
import ProductCard from "../Public/ProuductCard";
import {Typography} from "@material-ui/core";
import * as PropTypes from "prop-types";


function AmazingOffers(props) {
    const classes = useStyles()
    const {products, cover} = props
    return (
        <div style={{overflow: 'auto'}} className={classes.container}>
            <div style={{width: '33%', marginRight: 16,}} className={classes.titleContainer}>
                <Typography className={classes.title}>پیشنهاد</Typography>
                <Typography className={classes.title}>شگفت‌انگیز</Typography>
                <img src={cover} alt={'پیشنهاد شگفت‌انگیز'} className={classes.previewImage}/>
            </div>
            <div className={classes.sliderContainer}>
                {
                    products.map((product) => (

                        <ProductCard className={classes.card} product={product}/>

                    ))
                }
            </div>
        </div>
    )
}

AmazingOffers.propTypes = {
    products: PropTypes.array.isRequired,
    cover: PropTypes.string.isRequired,
}

export default AmazingOffers