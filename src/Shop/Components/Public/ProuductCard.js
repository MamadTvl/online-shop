import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import {Link} from 'react-router-dom'
import PropType from 'prop-types'
import {separateDigit, toFaDigit} from "../../../utills/ToFaDigit";
import {useProductCardStyles} from "./Styles/useProductCardStyle";


function ProductCard(props) {
    const classes = useProductCardStyles()
    const {product, className} = props
    return (
        <Card component={'div'} className={className ? className : classes.card}>

            <CardActionArea
                classes={{
                    root: classes.cardRoot,
                }}
                onClick={
                    () => window.scrollTo(0, 0)}
            >
                <Link className={classes.cardRoot}
                      to={`/products/${product.unique_code}/${product.title}/${product.id}`} target="_blank"
                      rel="noopener noreferrer">
                    <CardMedia className={classes.cardMedia} image={product.preview_image} title={product.name}/>
                    <CardContent title={product.name} className={classes.cardContent}>
                        <Typography className={classes.cardTitle}>{product.title}</Typography>
                        <div className={classes.priceContainer}>
                            {
                                product.is_exist ?
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
                                        <>
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
                                        </>
                                    :
                                    <>
                                        <Typography
                                            className={classes.priceLabel}
                                        >
                                            ناموجود
                                        </Typography>
                                    </>
                            }
                        </div>
                    </CardContent>
                </Link>
            </CardActionArea>

        </Card>
    )
}

ProductCard.propTypes = {
    product: PropType.object.isRequired,
    className: PropType.any,
}

export default ProductCard