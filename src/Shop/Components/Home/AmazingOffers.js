import React from "react";
import {useStyles} from "./Styles/AmazingOffersStyle";
import ProductCard from "../Public/ProuductCard";
import {Grid, Typography} from "@material-ui/core";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import * as PropTypes from "prop-types";


function AmazingOffers(props) {
    const classes = useStyles()
    const {products, cover} = props
    const size = useWindowSize()

    const setSmGrid = () => {
        if (size.width >= 800 && size.width <= 900)
            return [3, 9]
        else if (size.width < 800 && size.width >= 600) {
            return [5, 7]
        } else {
            return [4, 8]
        }
    }
    return (
        <>
            {
                size.width > 900 ?
                    <Grid classes={{"spacing-xs-5": classes.spacingContainer}} container spacing={5}
                          className={classes.container}>
                        <Grid
                            item
                            md={3}
                            sm={setSmGrid()[0]}
                            xs={size.width > 400 ? 4 : 5}
                            className={classes.titleContainer}
                        >
                            <Typography className={classes.title}>پیشنهاد</Typography>
                            <Typography className={classes.title}>شگفت‌انگیز</Typography>
                            <img src={cover} alt={'پیشنهاد شگفت‌انگیز'} className={classes.previewImage}/>
                        </Grid>
                        <Grid
                            item
                            md={9}
                            sm={setSmGrid()[1]}
                            xs={size.width > 400 ? 8 : 7}
                            style={{paddingTop: 0, paddingBottom: 0, margin: '-20px'}}
                        >
                            {
                                <Grid style={{height: '100%'}} container spacing={2} direction={"row"}>
                                    {
                                        products.map((product) => (
                                            <Grid item xs={4}>
                                                <ProductCard product={product}/>
                                            </Grid>
                                        ))
                                    }

                                </Grid>

                            }
                        </Grid>

                    </Grid>
                    :
                    <>
                        <div style={{overflow: 'auto'}} className={classes.container}>
                            <div style={{width: '33%', marginRight: 16,}} className={classes.titleContainer}>
                                <Typography className={classes.title}>پیشنهاد</Typography>
                                <Typography className={classes.title}>شگفت‌انگیز</Typography>
                                <img src={cover} alt={'پیشنهاد شگفت‌انگیز'} className={classes.previewImage}/>
                            </div>
                            <div className={classes.sliderContainer}>
                                {
                                    products.map((product) => (

                                        <ProductCard className={classes.card} product={product}/>

                                    ))
                                }
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

AmazingOffers.propTypes = {
    products: PropTypes.array.isRequired,
    cover: PropTypes.string.isRequired,
}

export default AmazingOffers