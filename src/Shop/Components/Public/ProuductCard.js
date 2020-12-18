import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import {useProductSliderStyles} from "./Styles/ProductsSliderStyle";
import {useHistory} from 'react-router-dom'
import PropType from 'prop-types'
import {separateDigit, toFaDigit} from "../../../utills/ToFaDigit";


function ProductCard(props) {
    const classes = useProductSliderStyles()
    const {product, className} = props
    const history = useHistory()
    return (
        <Card component={'div'} className={className}>
            <CardActionArea
                onClick={
                    () => history.push(`/products/${product.unique_code}/${product.title}?id=${product.id}`)}
            >
                <CardMedia className={classes.cardMedia} image={product.preview_image} title={product.name}/>
                <CardContent>
                    <Typography className={classes.cardTitle}>{product.title}</Typography>
                    {
                        product.has_discount ?

                            <div className={classes.discountCard}>
                                <br/>
                                <div style={{display: 'flex'}}>
                                    <Chip
                                        classes={{root: classes.discountChip}}
                                        label={`%${toFaDigit((product.percent_of_discount * 100).toString())}`}
                                    />
                                    <Typography
                                        className={classes.discountLabel}
                                    >
                                        {separateDigit(product.price)}
                                    </Typography>
                                </div>
                                <div
                                    style={{display: 'flex'}}
                                >
                                                    <span
                                                        style={{
                                                            fontFamily: 'Shabnam',
                                                            fontSize: 14,
                                                            color: '#545454',
                                                            marginRight: 8,
                                                            marginTop: 8,
                                                        }}
                                                    >
                                                        تومان
                                                    </span>
                                    <Typography
                                        className={classes.priceLabel}
                                    >
                                        {separateDigit(product.price_with_discount)}
                                    </Typography>
                                </div>

                            </div>
                            :
                            <div>
                                <div className={classes.normalCard}>
                                                <span style={{
                                                    fontFamily: 'Shabnam',
                                                    fontSize: 14,
                                                    color: '#545454',
                                                    marginRight: 8,
                                                    marginTop: 8,
                                                }}>تومان</span>
                                    <Typography
                                        className={classes.priceLabel}
                                    >
                                        {separateDigit(product.price)}
                                    </Typography>
                                </div>
                            </div>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

ProductCard.propTypes = {
    product: PropType.object.isRequired,
    className: PropType.any.isRequired,
}

export default ProductCard