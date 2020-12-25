import React, {useEffect, useState} from "react";
import {useStyles} from "./Styles/AmazingOffersStyle";
import ProductCard from "../Public/ProuductCard";
import {Grid, Typography} from "@material-ui/core";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../Public/NextArrow'
import PrevArrow from "../Public/PrevArrow";
import * as PropTypes from "prop-types";


function AmazingOffers(props) {
    const classes = useStyles()
    const {products, cover} = props
    const size = useWindowSize()
    const [setting, setSetting] = useState({
        className: 'amazing-slider-slick',
        dots: false,
        infinite: true,
        slidesToShow: 2, // 900 - 700
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        rtl: true,
    })


    useEffect(() => {
        if (products.length !== 0) {
            try {
                const slides = document.getElementsByClassName('amazing-slider-slick')[0]
                    .children[1].children[0].children
                // if you want to find out what you are doing log it !
                for (let i = 0; i < slides.length; i++) {
                    slides[i].children[0].style.display = 'flex'
                    slides[i].children[0].style.justifyContent = 'center'
                }
            } catch (e) {

            }

        }
    }, [products.length])
    useEffect(() => {
        if (products.length !== 0) {
            try {
                const slides = document.getElementsByClassName('amazing-slider-slick')[0]
                    .children[1].children[0].children
                for (let i = 0; i < slides.length && size.width > 400; i++) {
                    slides[i].style.padding = '0 20px'
                }
                const slideContainer = document.getElementsByClassName('amazing-slider-slick')[0]
                slideContainer.style.marginTop = '23px'
            } catch (e) {
            }
        }
    }, [products.length, size.width])

    useEffect(() => {
        if (size.width < 900 && size.width >= 800) {
            setSetting({
                className: 'amazing-slider-slick',
                dots: false,
                infinite: true,
                slidesToShow: 2, // 900 - 700
                slidesToScroll: 1,
                nextArrow: <NextArrow/>,
                prevArrow: <PrevArrow/>,
                rtl: true,
            })
        }
        if (size.width < 800) {
            setSetting({
                className: 'amazing-slider-slick',
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <NextArrow/>,
                prevArrow: <PrevArrow/>,
                rtl: true,
            })
            if (size.width < 500) {
                setSetting({
                    className: 'amazing-slider-slick',
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: null,
                    prevArrow: <PrevArrow/>,
                    rtl: true,
                })
            }
            // document.getElementById('slider-container-div').style.width = '50%'

        }
    }, [size.width])
    const setSmGrid = () => {
        if (size.width >= 800 && size.width <= 900)
            return [3, 9]
        else if (size.width < 800 && size.width >= 600){
            return [5, 7]
        }else {
            return [4, 8]
        }
    }
    return (
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
                <img src={cover} alt={''} className={classes.previewImage}/>
            </Grid>
            <Grid
                item
                md={9}
                sm={setSmGrid()[1]}
                xs={size.width > 400 ? 8 : 7}
                style={{paddingTop: 0, paddingBottom: 0}}
            >
                {
                    size.width > 900 ?
                        <Grid container spacing={2} direction={"row"}>
                            {
                                products.map((product) => (
                                    <Grid item xs={4}>
                                        <ProductCard product={product}/>
                                    </Grid>
                                ))
                            }

                        </Grid>
                        :
                        <div className={classes.sliderContainer}>
                            <Slider {...setting}>
                                {
                                    products.map((product) => (

                                        <ProductCard className={classes.card} product={product}/>

                                    ))
                                }
                            </Slider>
                        </div>
                }
            </Grid>

        </Grid>
    )
}

AmazingOffers.propTypes = {
    products: PropTypes.array.isRequired,
    cover: PropTypes.string.isRequired,
}

export default AmazingOffers