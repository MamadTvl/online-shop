import React from "react";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import ProductsSlider from "../Public/ProductsSlider";
import ProductGrid from "../Public/ProductGrid";
import Title from "../Public/Title";
import * as PropTypes from "prop-types";

function SimilarProducts(props) {
    const size = useWindowSize()
    const {products} = props

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

SimilarProducts.propTypes = {
    products: PropTypes.object.isRequired,
}

export default SimilarProducts