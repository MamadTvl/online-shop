import React from 'react'
import ProductsSlider from "../Public/ProductsSlider";
import productImage from "../../../img/img.png";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import ProductGrid from "../Public/ProductGrid";
import Title from "../Public/Title";
import {useProductSliderStyles} from "../Public/Styles/ProductsSliderStyle";

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

function BestSeller() {
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
        <div className={classes.sliderContainer}>
            <Title title={'پرفروش‌ترین محصولات'}/>
            {
                size.width !== undefined && setComponent(products)
            }

        </div>

    )

}

export default BestSeller