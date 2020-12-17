import React from "react";
import {Typography} from "@material-ui/core";
import {useSimilarProductsStyle} from "./Styles/useSimilarProductsStyle";
import productImage from "../../../img/img.png";
import ProductCard from "../Public/ProuductCard";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import {useProductSliderStyles} from "../Public/Styles/ProductsSliderStyle";
import ProductsSlider from "../Public/ProductsSlider";
import ProductGrid from "../Public/ProductGrid";
import Title from "../Public/Title";

function createData(name, price, img, hasDiscount, discount, newPrice) {
    return {name, price, img, hasDiscount, discount, newPrice}
}

const products = [
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    // createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    // createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    // createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    // createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
]

function SimilarProducts() {
    const size = useWindowSize()
    const classes = useProductSliderStyles()

    const setComponent = (products, width) => {
        if (products.length >= 4) {
            return <ProductsSlider products={products}/>
        } else if (products.length === 3) {

            if (window.innerWidth > 800) {
                return <ProductGrid products={products}/>
            } else {
                return <ProductsSlider products={products}/>
            }
        } else if (products.length === 2) {
            if (window.innerWidth > 500) {
                return <ProductGrid products={products}/>
            } else {
                return <ProductsSlider products={products}/>
            }
        } else if (products.length === 1) {
            return <ProductGrid products={products}/>
        }
    }

    return (
        <>
            <Title title={'محصولات مرتبط'}/>
            {
                size.width !== undefined && setComponent(products)
            }

        </>

    )
}

export default SimilarProducts