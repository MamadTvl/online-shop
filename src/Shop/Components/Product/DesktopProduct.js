import React, {useEffect, useState} from "react";
import {Button, Card, Chip, IconButton, MenuItem, Snackbar, SvgIcon, TextField, Typography} from "@material-ui/core";
import DesktopPhotoViewer from "./DesktopPhotoViewer";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {separateDigit} from "../../../utills/ToFaDigit";
import {useProductStyle} from "./Styles/useProductStyle";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import * as PropTypes from 'prop-types'
import {Alert} from "@material-ui/lab";


function DesktopProduct(props) {
    const {product, addToCart} = props
    const classes = useProductStyle()
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [selectedSize, setSelectedSize] = useState(product.size_list[0])
    const [selectedColor, setSelectedColor] = useState(product.color_list[0])

    const [count, setCount] = useState(1)

    const getMaxStockNumber = () => {
        if (product.merchandise_type === "1") {
            for (let i = 0; i < product.stock_list.length; i++) {
                if (product.stock_list[i].size === selectedSize
                    && product.stock_list[i].color === selectedColor) {
                    return product.stock_list[i].stock_number
                }
            }
        } else {
            return product.stock_number
        }

    }
    const [disabled, setDisabled] = useState(getMaxStockNumber() === 0)
    useEffect(() => {
        setDisabled(getMaxStockNumber() === 0)

    }, [selectedSize, selectedColor])

    let images = [product.preview_image]
    for (let i = 0; i < product.other_image_list.length; i++) {
        images.push(product.other_image_list[i])
    }
    return (
        <>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert
                    dir={'ltr'}
                    variant={'filled'}
                    style={{fontFamily: 'Shabnam'}}
                    onClose={() => setOpenSnackBar(false)}
                    severity={"success"}
                >
                    لینک در کلیپ بورد کپی شد
                </Alert>
            </Snackbar>
            <Card>
                <div className={classes.content}>
                    <DesktopPhotoViewer images={images}/>
                    <div className={classes.detailContainer}>

                        <div className={classes.details}>
                            <Typography className={classes.title}>{product.title}</Typography>
                            <Typography className={classes.subtitle}>مشخصات محصول:</Typography>
                            <Typography className={classes.detail}>{product.specification}</Typography>
                        </div>

                        <div className={classes.selects}>
                            <div className={classes.selectContainer}>
                                <Typography className={classes.label}>سایز</Typography>
                                <TextField
                                    id="size"
                                    select
                                    value={selectedSize}
                                    onChange={(event) => {
                                        setSelectedSize(event.target.value)
                                        setCount(1)
                                    }}
                                    InputProps={{
                                        classes: {
                                            input: classes.textFieldFont,
                                            root: classes.textFieldRoot,
                                        }
                                    }}
                                    variant="outlined"
                                >
                                    {
                                        product.size_list.map((size, index) => (
                                            <MenuItem className={classes.menu} key={index} value={size}>
                                                {size}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </div>
                            <div className={classes.selectContainer}>
                                <Typography className={classes.label}>رنگ</Typography>
                                <TextField
                                    id="color"
                                    select
                                    value={selectedColor}
                                    onChange={(event) => {
                                        setSelectedColor(event.target.value)
                                        setCount(1)
                                    }}
                                    InputProps={{
                                        classes: {
                                            input: classes.textFieldFont,
                                            root: classes.textFieldRoot,
                                        }
                                    }}
                                    variant="outlined"
                                >
                                    {
                                        product.color_list.map((color, index) => (
                                            <MenuItem className={classes.menu} key={index} value={color}>
                                                {color}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </div>
                            <div className={classes.selectContainer}>
                                <Typography className={classes.label}>تعداد</Typography>
                                <div className={classes.buttonGroup}>
                                    <IconButton
                                        disabled={!product.is_exist}
                                        onClick={() => count !== getMaxStockNumber() && setCount(count + 1)}
                                        className={classes.addButton}
                                    >
                                        <AddIcon/>
                                    </IconButton>
                                    <Typography className={classes.countLabel}>{separateDigit(count)}</Typography>
                                    <IconButton
                                        disabled={!product.is_exist}
                                        onClick={() => count !== 1 && setCount(count - 1)}
                                        className={classes.removeButton}
                                    >
                                        <RemoveIcon/>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.actionContainer}>
                        <CopyToClipboard text={window.location.href}>
                            <IconButton className={classes.shareButton} onClick={() => setOpenSnackBar(true)}>
                                <SvgIcon xmlns="http://www.w3.org/2000/svg" width="22.5" height="21"
                                         viewBox="0 0 22.5 21">
                                    <g id="share" transform="translate(-0.75 -1.5)">
                                        <circle id="Ellipse_115" data-name="Ellipse 115" cx="3.75" cy="3.75" r="3.75"
                                                transform="translate(1.5 7.5)" fill="none" stroke="#434343"
                                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <circle id="Ellipse_116" data-name="Ellipse 116" cx="3.75" cy="3.75" r="3.75"
                                                transform="translate(15 2.25)" fill="none" stroke="#434343"
                                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <circle id="Ellipse_117" data-name="Ellipse 117" cx="3.75" cy="3.75" r="3.75"
                                                transform="translate(15 14.25)" fill="none" stroke="#434343"
                                                strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                        <path id="Path_30119" data-name="Path 30119" d="M8.746,9.891,15.254,7.36"
                                              fill="none"
                                              stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="1.5"/>
                                        <path id="Path_30120" data-name="Path 30120" d="M8.6,12.928l6.79,3.395"
                                              fill="none"
                                              stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="1.5"/>
                                    </g>
                                </SvgIcon>

                            </IconButton>
                        </CopyToClipboard>
                        <div className={classes.priceDetailContainer}>

                            {
                                product.is_exist ?
                                    product.has_discount ?
                                        <>
                                            <div className={classes.discountContainer}>
                                                <Chip className={classes.discountChip}
                                                      label={`%${separateDigit(product.percent_of_discount * 100)}`}/>
                                                <Typography
                                                    className={classes.prevPrice}>{separateDigit(product.price)}</Typography>

                                            </div>
                                            <div className={classes.priceContainer}>
                                                <Typography className={classes.toman}>تومان</Typography>
                                                <Typography
                                                    className={classes.price}>{separateDigit(Math.floor(product.price_with_discount))}</Typography>
                                            </div>
                                        </>
                                        :
                                        <div className={classes.priceContainer}>
                                            <Typography className={classes.toman}>تومان</Typography>
                                            <Typography
                                                className={classes.price}>{separateDigit(Math.floor(product.price))}</Typography>
                                        </div>
                                    :
                                    <>
                                        <div className={classes.priceContainer}>
                                            <Typography
                                                className={classes.price}>ناموجود</Typography>
                                        </div>

                                    </>
                            }

                            <Button
                                disabled={!product.is_exist || disabled}
                                className={classes.shopButton}// order : id, color, size, count
                                onClick={() => addToCart({
                                    id: product.id,
                                    color: selectedColor,
                                    size: selectedSize,
                                    count: count,
                                })}
                                dir={'ltr'}
                                variant={'contained'}
                                endIcon={
                                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="19.5" height="21.5"
                                             viewBox="0 0 19.5 21.5">
                                        <g id="shopping-bag" transform="translate(-2.25 -1.25)">
                                            <path id="Path_8" data-name="Path 8"
                                                  d="M6,2,3,6V20a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V6L18,2Z" fill="none"
                                                  stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="1.5"/>
                                            <line id="Line_1" data-name="Line 1" x2="18" transform="translate(3 6)"
                                                  fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="1.5"/>
                                            <path id="Path_9" data-name="Path 9" d="M16,10a4,4,0,0,1-8,0" fill="none"
                                                  stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="1.5"/>
                                        </g>
                                    </SvgIcon>
                                }
                            >
                                افزودن به سبد خرید
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

DesktopProduct.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
}


export default DesktopProduct