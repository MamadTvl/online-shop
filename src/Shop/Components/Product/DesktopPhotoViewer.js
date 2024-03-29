import React, {useEffect, useState} from "react";
import SwipeableViews from 'react-swipeable-views';
import {ButtonBase, IconButton, SvgIcon} from "@material-ui/core";
import {usePhotoViewerStyle} from "./Styles/usePhotoViewerStyle";
import * as PropTypes from "prop-types";
import {GlassMagnifier} from 'react-image-magnifiers'

function DesktopPhotoViewer(props) {
    const [index, setIndex] = useState(0)
    const {images} = props
    const classes = usePhotoViewerStyle()

    useEffect(() => {
        const slider = document.getElementById('image-buttons');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }, [])

    useEffect(() => {
        const slider = document.getElementById('image-buttons');
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
            console.log('touchend')
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('touchcancel', () => {
            console.log('touchcancel')
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
            const imageButton = document.getElementById(`image-button-${i}`)
            imageButton.style.borderColor = '#989898'
        }
        const imageButton = document.getElementById(`image-button-${index}`)
        imageButton.style.borderColor = '#434343'
    }, [index])


    return (
        <div className={classes.container}>
            <SwipeableViews
                onChangeIndex={(event) => setIndex(event)}
                axis={'x-reverse'}
                index={index}
                enableMouseEvents
            >
                {
                    images.map((image) => (
                        <GlassMagnifier
                            magnifierSize={'50%'}
                            allowOverflow={true}
                            dragToMove={false}
                            className={classes.imageView}
                            imageSrc={image}
                            largeImageSrc={image}
                            imageAlt={document.title}
                        />
                    ))
                }
            </SwipeableViews>
            <IconButton onClick={() => index !== 0 && setIndex(prevState => prevState - 1)}
                        className={classes.nextArrow}>
                <SvgIcon style={{width: '8px', height: '14px'}} xmlns="http://www.w3.org/2000/svg" width="5.811"
                         height="10.121" viewBox="0 0 5.811 10.121">
                    <path id="chevron-right" d="M13,14,9,10l4-4" transform="translate(-8.25 -4.939)" fill="none"
                          stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </SvgIcon>

            </IconButton>

            <IconButton onClick={() => index !== images.length - 1 && setIndex(prevState => prevState + 1)}
                        className={classes.prevArrow}>
                <SvgIcon style={{width: '8px', height: '14px'}} xmlns="http://www.w3.org/2000/svg" width="5.811"
                         height="10.121" viewBox="0 0 5.811 10.121">
                    <path id="chevron-left" d="M13,14,9,10l4-4" transform="translate(-8.25 -4.939)" fill="none"
                          stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </SvgIcon>
            </IconButton>
            <div id={'image-buttons'} className={classes.imageButtonContainer}>
                {
                    images.map((image, index) => (
                        <ButtonBase className={classes.listItem} onClick={() => setIndex(index)}>
                            <img id={`image-button-${index}`} className={classes.imageButton} src={image}
                                 alt={document.title}/>
                        </ButtonBase>
                    ))
                }
            </div>
        </div>
    )

}

DesktopPhotoViewer.propTypes = {
    images: PropTypes.array.isRequired,
}

export default DesktopPhotoViewer