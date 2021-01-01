import React, {useEffect, useState} from 'react'
import SwipeableViews from "react-swipeable-views";
import {useMobilePhotoViewerStyle} from "./Styles/useMobilePhotoViewerStyle";
import {IconButton} from "@material-ui/core";
import * as PropTypes from "prop-types";


function MobilePhotoViewer(props) {
    const {images} = props

    const [index, setIndex] = useState(0)
    const classes = useMobilePhotoViewerStyle()
    useEffect(() => {
        const slider = document.getElementById('photoViewer-dots');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.targetTouches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('touchend', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('touchcancel', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.targetTouches[0].pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }, [])

    useEffect(() => {
        for (let i = 0; i < images.length; i++) {
            const imageButton = document.getElementById(`photoViewer-dots-${i}`)
            imageButton.style.backgroundColor = 'rgba(0, 0, 0, 0.45)'
        }
        const imageButton = document.getElementById(`photoViewer-dots-${index}`)
        imageButton.style.backgroundColor = 'white'
    }, [index])

    return (
        <div className={classes.container}>
            <SwipeableViews onChangeIndex={(event) => setIndex(event)} style={{borderRadius: 4}} axis={'x-reverse'}
                            index={index} enableMouseEvents>
                {
                    images.map((image) => (
                        <img className={classes.imageView} src={image} alt={document.title}/>
                    ))
                }
            </SwipeableViews>
            <div id={'photoViewer-dots'} className={classes.dotsContainer}>
                {
                    images.map((image, index) => (
                        <IconButton style={{padding: 8}} component={'span'} onClick={() => setIndex(index)}>
                            <div id={`photoViewer-dots-${index}`} className={classes.dot}/>
                        </IconButton>
                    ))
                }
            </div>
        </div>
    )
}

MobilePhotoViewer.propTypes = {
    images: PropTypes.array.isRequired,
}

export default MobilePhotoViewer