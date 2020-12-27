import React from "react";
import {Grid} from "@material-ui/core";
import ProductViewCard from "./ProductViewCard";
import DetailCard from "./DetailCard";
import DescriptionCard from "./DescriptionCard";
import CommentContainer from "./CommentContainer";
import * as PropTypes from 'prop-types'

function MobileProduct(props) {
    const {product, addToCart} = props
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ProductViewCard addToCart={addToCart} product={product}/>
            </Grid>
            <Grid item xs={12}>
                <DetailCard product={product}/>
            </Grid>
            <Grid item xs={12}>
                <DescriptionCard product={product}/>
            </Grid>
            <Grid item xs={12}>
                <CommentContainer comments={product.comment_objs_list} productId={product.id}/>
            </Grid>
        </Grid>
    )
}

MobileProduct.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
}


export default MobileProduct