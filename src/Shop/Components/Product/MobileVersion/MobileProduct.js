import React from "react";
import {Grid} from "@material-ui/core";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import ProductViewCard from "./ProductViewCard";
import DetailCard from "./DetailCard";
import DescriptionCard from "./DescriptionCard";
import CommentContainer from "./CommentContainer";
import * as PropTypes from 'prop-types'

function MobileProduct(props) {
    const classes = useMobileProductStyle()
    const {product} = props
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ProductViewCard product={product}/>
            </Grid>
            <Grid item xs={12}>
                <DetailCard product={product}/>
            </Grid>
            <Grid item xs={12}>
                <DescriptionCard product={product}/>
            </Grid>
            <Grid item xs={12}>
                <CommentContainer comments={product.comment_list}/>
            </Grid>
        </Grid>
    )
}

MobileProduct.propTypes = {
    product: PropTypes.object.isRequired,
}


export default MobileProduct