import React, {useState} from "react";
import {ButtonBase, Dialog} from "@material-ui/core";
import {useImageDialogStyle} from "./Styles/useImageDilaogStyle";
import SwipeableViews from "react-swipeable-views";
import Title from "../Public/Title";
import CloseIcon from '@material-ui/icons/Close';

function ImageViewerDialog(props) {
    const {open, images, setOpen} = props
    const classes = useImageDialogStyle()
    const [index, setIndex] = useState(0)


    return (
        <Dialog maxWidth={false} open={open} onClose={setOpen(false)}>
            <div className={classes.dialog}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Title title={`تصاویر "${document.title}"`}/>
                    <CloseIcon onClick={()=> setOpen(false)} color={'inherit'} style={{color : '#F16522'}}/>
                </div>
                <div className={classes.imagesContainer}>
                    <SwipeableViews onChangeIndex={(event) => setIndex(event)} axis={'x-reverse'} index={index}
                                    enableMouseEvents className={classes.previewImage}>
                        {
                            images.map((image) => (
                                <img
                                    className={classes.image}
                                    src={image}
                                    alt={document.title}
                                />
                            ))
                        }
                    </SwipeableViews>
                    <div id={'image-buttons'} className={classes.imageButtonContainer}>
                        {
                            images.map((image, index) => (
                                <ButtonBase
                                    className={classes.listItem}
                                    onClick={() => setIndex(index)}
                                >
                                    <img
                                        id={`image-button-${index}`}
                                        className={classes.imageButton}
                                        src={image}
                                        alt={document.title}
                                    />
                                </ButtonBase>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Dialog>
    )

}

export default ImageViewerDialog

