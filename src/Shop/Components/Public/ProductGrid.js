import React from "react";
import PropTypes from "prop-types"
import {Grid} from "@material-ui/core";
import ProductCard from "./ProuductCard";
import {useProductSliderStyles} from "./Styles/ProductsSliderStyle";


function ProductGrid(props) {
    const {products} = props
    const classes = useProductSliderStyles()
    // if 1 = xs=6
    return (
        <Grid justify={'center'} container spacing={2}>
            {
                products.map(product => (
                    <Grid  item >
                        <ProductCard className={classes.card} product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    )

}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,

}
export default ProductGrid