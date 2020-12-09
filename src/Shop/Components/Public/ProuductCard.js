import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import {useStyles} from "../Home/Styles/ProductsSliderStyle";


function ProductCard(props) {
    const classes = useStyles()

    return(
        <Card component={'div'} className={props.className}>
            <CardMedia className={classes.cardMedia} image={props.product.img} title={props.product.name}/>
            <CardContent>
                <Typography className={classes.cardTitle}>{props.product.name}</Typography>
                {
                    props.product.hasDiscount ?

                        <div className={classes.discountCard}>
                            <br/>
                            <div style={{display: 'flex'}}>
                                <Chip className={classes.discountChip}
                                      label={`%${props.product.discount}`}/>
                                <Typography
                                    className={classes.discountLabel}>{props.product.price}</Typography>
                            </div>
                            <div style={{display: 'flex'}}>
                                                    <span style={{
                                                        fontFamily: 'Shabnam',
                                                        fontSize: 14,
                                                        color: '#545454',
                                                        marginRight: 8,
                                                        marginTop: 8,
                                                    }}>تومان</span>
                                <Typography
                                    className={classes.priceLabel}>{props.product.newPrice}</Typography>
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
                                    className={classes.priceLabel}>{`${props.product.price}`}</Typography>
                            </div>
                        </div>
                }
            </CardContent>
        </Card>
    )
}

export default ProductCard