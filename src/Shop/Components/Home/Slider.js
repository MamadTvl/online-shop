import React from "react";
import imageSlider from '../../../img/slider.png'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/SliderSyle.css'

function Slider() {
    const imageSliders = [imageSlider, imageSlider, imageSlider]
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
    };
    return (
        <div className={'slide-container'}>
            <SlickSlider{...settings}>
                    <img className={'image'} src={imageSliders[0]} alt={''}/>
                    <img className={'image'} src={imageSliders[1]} alt={''}/>
                    <img className={'image'} src={imageSliders[2]} alt={''}/>
            </SlickSlider>
        </div>
    )
}

export default Slider