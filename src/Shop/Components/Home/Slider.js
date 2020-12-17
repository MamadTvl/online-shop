import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/SliderSyle.css'
import PropTypes from 'prop-types';


function Slider(props) {
    const {sliders} = props
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
    };
    return (
        <div className={'slide-container'}>
            <SlickSlider{...settings}>
                <img className={'image'} src={sliders[0].cover} alt={''}/>
                <img className={'image'} src={sliders[1].cover} alt={''}/>
                <img className={'image'} src={sliders[2].cover} alt={''}/>
                <img className={'image'} src={sliders[3].cover} alt={''}/>
            </SlickSlider>
        </div>
    )
}

Slider.propTypes = {
    sliders: PropTypes.array.isRequired,
}

export default Slider