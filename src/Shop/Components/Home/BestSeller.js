import React from 'react'
import ProductsSlider from "../Public/ProductsSlider";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import ProductGrid from "../Public/ProductGrid";
import Title from "../Public/Title";
import {useProductSliderStyles} from "../Public/Styles/ProductsSliderStyle";
import PropType from "prop-types"


function BestSeller(props) {
    const size = useWindowSize()
    const {products} = props
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

BestSeller.propTypes = {
    products: PropType.array.isRequired,
}

export default BestSeller