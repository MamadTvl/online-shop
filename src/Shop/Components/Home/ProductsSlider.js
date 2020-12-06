import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
import productImage from '../../../img/img.png'
import {useStyles} from "./Styles/ProductsSliderStyle";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import ProductCard from "./ProuductCard";


function ProductsSlider() {
    const classes = useStyles()

    function createData(name, price, img, hasDiscount, discount, newPrice) {
        return {name, price, img, hasDiscount, discount, newPrice}
    }

    const size = useWindowSize()

    const [responsiveSetting, setResponsiveSetting] = useState({
        className: 'custom-slider-slick',
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        rtl: true,
    })

    const products = [
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
        createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    ]

    useEffect(() => {
        const slides = document.getElementsByClassName('custom-slider-slick')[0]
            .children[1].children[0].children
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.padding = '0 20px'
        }
        const slideContainer = document.getElementsByClassName('custom-slider-slick')[0]
        slideContainer.style.marginTop = '23px'

    }, [])

    useEffect(() => {
        if (size.width > 1280) {
            setResponsiveSetting({
                className: 'custom-slider-slick',
                dots: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 2,
                nextArrow: <NextArrow/>,
                prevArrow: <PrevArrow/>,
                rtl: true,
            })
        }
        if (size.width <= 1280 && size.width > 800) {
            setResponsiveSetting({
                className: 'custom-slider-slick',
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                nextArrow: <NextArrow/>,
                prevArrow: <PrevArrow/>,
                rtl: true,
            })
        }
        if (size.width <= 800 && size.width > 500) {
            setResponsiveSetting({
                className: 'custom-slider-slick',
                dots: false,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: <NextArrow/>,
                prevArrow: <PrevArrow/>,
                rtl: true,
            })
        }
        if (size.width <= 500) {
            setResponsiveSetting({
                className: 'custom-slider-slick',
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <NextArrow/>,
                prevArrow: <PrevArrow/>,
                rtl: true,
            })
        }
        if (size.width >= 373 && size.width <= 500) {
            const slides = document.getElementsByClassName('custom-slider-slick')[0]
                .children[1].children[0].children
            // if you want to find out what you are doing console it !
            for (let i = 0; i < slides.length; i++) {
                slides[i].children[0].style.display = 'flex'
                slides[i].children[0].style.justifyContent = 'center'
            }
        }
    }, [size.width])


    return (
        <div className={classes.SliderContainer}>
            <div style={{display: 'flex', marginTop: 60}}>
                <div className={classes.titleContainer}/>
                <Typography className={classes.title}>پرفروش‌ترین محصولات</Typography>
            </div>
            <div>
                <Slider {...responsiveSetting}>
                    {
                        products.map((product) => (
                            <ProductCard className={classes.card} product={product}/>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default ProductsSlider