import React, {useEffect, useState} from "react";
import SwipeableViews from 'react-swipeable-views';
import image from '../../../img/blog.png'
import {ButtonBase, IconButton, SvgIcon} from "@material-ui/core";
import {usePhotoViewerStyle} from "./Styles/usePhotoViewerStyle";

function PhotoViewer() {
    const [index, setIndex] = useState(0)
    const images = [image, image, image, image, image, image, image, image]
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
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1.5; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });
    }, [])




    return (
        <div className={classes.container}>
            <SwipeableViews index={index} enableMouseEvents>
                {
                    images.map((image) => (
                        <img className={classes.imageView} src={image} alt={'Hello'}/>
                    ))
                }
            </SwipeableViews>
            <IconButton className={classes.nextArrow}>
                <SvgIcon style={{width: '8px', height: '14px'}} xmlns="http://www.w3.org/2000/svg" width="5.811" height="10.121" viewBox="0 0 5.811 10.121">
                    <path id="chevron-right" d="M13,14,9,10l4-4" transform="translate(-8.25 -4.939)" fill="none"
                          stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </SvgIcon>

            </IconButton>

            <IconButton className={classes.prevArrow}>
                <SvgIcon style={{width: '8px', height: '14px'}}  xmlns="http://www.w3.org/2000/svg" width="5.811" height="10.121" viewBox="0 0 5.811 10.121">
                    <path id="chevron-left" d="M13,14,9,10l4-4" transform="translate(-8.25 -4.939)" fill="none"
                          stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                </SvgIcon>
            </IconButton>
            <div id={'image-buttons'} className={classes.imageButtonContainer}>
                {
                    images.map((image, index) => (
                        <ButtonBase className={classes.listItem} onClick={() => setIndex(index)}>
                            <img className={classes.imageButton} src={image} alt={'Hello'}/>
                        </ButtonBase>
                    ))
                }
            </div>
        </div>
    )

}


export default PhotoViewer