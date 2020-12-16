import React, {useEffect, useState} from "react";
import {useStyles} from "./Styles/AmazingOffersStyle";
import productImage from "../../../img/img.png";
import ProductCard from "../Public/ProuductCard";
import {Grid, Typography} from "@material-ui/core";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import previewImage from "../../../img/shoes.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from './NextArrow'
import PrevArrow from "./PrevArrow";

function AmazingOffers() {
    const classes = useStyles()
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

    function createData(name, price, img, hasDiscount, discount, newPrice) {
        return {name, price, img, hasDiscount, discount, newPrice}
    }

    const products = [
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    ]

    useEffect(() => {
        const slides = document.getElementsByClassName('amazing-slider-slick')[0]
            .children[1].children[0].children
        // if you want to find out what you are doing log it !
        for (let i = 0; i < slides.length; i++) {
            slides[i].children[0].style.display = 'flex'
            slides[i].children[0].style.justifyContent = 'center'
        }
    }, [])
    useEffect(() => {
        const slides = document.getElementsByClassName('amazing-slider-slick')[0]
            .children[1].children[0].children
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.padding = '0 20px'
        }
        const slideContainer = document.getElementsByClassName('amazing-slider-slick')[0]
        slideContainer.style.marginTop = '23px'
    }, [])

    useEffect(() => {
        if (size.width < 900 && size.width >= 800){
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
        if (size.width < 800){
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

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Typography className={classes.title}>پیشنهاد</Typography>
                <Typography className={classes.title}>شگفت‌انگیز</Typography>
                <img src={previewImage} alt={products[0].name} className={classes.previewImage}/>
            </div>

            {
                size.width > 900 ?
                    <Grid container spacing={2} direction={"row"}>
                        {
                            products.map((product) => (
                                <Grid item xs={4}>
                                    <ProductCard className={classes.card} product={product}/>
                                </Grid>
                            ))
                        }

                    </Grid>
                    :
                    <div className={classes.sliderContainer} >
                        <Slider {...setting}>
                            {
                                products.map((product) => (

                                    <ProductCard className={classes.card} product={product}/>

                                ))
                            }
                        </Slider>
                    </div>
            }

        </div>
    )
}


export default AmazingOffers