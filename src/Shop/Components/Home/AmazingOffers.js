import React from "react";
import {useStyles} from "./Styles/AmazingOffersStyle";
import productImage from "../../../img/img.png";
import ProductCard from "./ProuductCard";
import {Typography} from "@material-ui/core";
import useWindowSize from "../../../utills/Hooks/useWindowSize";


function AmazingOffers() {
    const classes = useStyles()
    const size = useWindowSize()

    function createData(name, price, img, hasDiscount, discount, newPrice) {
        return {name, price, img, hasDiscount, discount, newPrice}
    }

    const products = [
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    ]

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>پیشنهاد</Typography>
                <Typography className={classes.title}>شگفت‌انگیز</Typography>
            </div>

            {
                size.width > 600 ?
                    products.map((product) => (
                        <ProductCard className={classes.card} product={product}/>
                    ))
                    : <ProductCard className={classes.card} product={products[0]}/>
            }

        </div>
    )
}


export default AmazingOffers