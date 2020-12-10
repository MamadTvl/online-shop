import React from "react";
import {Typography} from "@material-ui/core";
import {useSimilarProductsStyle} from "./Styles/useSimilarProductsStyle";
import productImage from "../../../img/img.png";
import ProductCard from "../Public/ProuductCard";

function createProductData(name, price, img, hasDiscount, discount, newPrice) {
    return {name, price, img, hasDiscount, discount, newPrice}
}

function SimilarProducts() {
    const classes = useSimilarProductsStyle()
    const products = [
        createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    ]
    return(
        <div style={{marginTop: 32}}>
            <div className={classes.titleContainer}>
                <div className={classes.titleRectangle}/>
                <Typography className={classes.title}>محصولات مرتبط</Typography>
            </div>
            <div className={classes.productsContainer}>
                {
                    products.map((product, index) => (
                        <ProductCard product={product} className={index !== 0 ?classes.card : null}/>
                    ))
                }
            </div>
        </div>
    )
}

export default SimilarProducts