import React, {useEffect, useState} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
import {useProductSliderStyles} from "./Styles/ProductsSliderStyle";
import useWindowSize from "../../../utills/Hooks/useWindowSize";
import ProductCard from "./ProuductCard";
import PropType from 'prop-types'

function ProductsSlider(props) {
    const classes = useProductSliderStyles()
    const {products} = props

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

    useEffect(() => {
        if (products.length >= 4) {
            const slides = document.getElementsByClassName('custom-slider-slick')[0]
                .children[1].children[0].children
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.padding = '0 20px'
            }
            const slideContainer = document.getElementsByClassName('custom-slider-slick')[0]
            slideContainer.style.marginTop = '23px'
        }

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
        if (size.width >= 373 && size.width <= 500 && products.length >= 4) {
            const slides = document.getElementsByClassName('custom-slider-slick')[0]
                .children[1].children[0].children
            // if you want to find out what you are doing log it !
            for (let i = 0; i < slides.length; i++) {
                slides[i].children[0].style.display = 'flex'
                slides[i].children[0].style.justifyContent = 'center'
            }
        }
    }, [size.width])


    return (
        <div>
            <Slider {...responsiveSetting}>
                {
                    products.map((product) => (
                        <ProductCard className={classes.card} product={product}/>
                    ))
                }
            </Slider>
        </div>
    )
}

ProductsSlider.propTypes = {
    products: PropType.array.isRequired,
}

export default ProductsSlider