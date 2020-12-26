import React, {useState} from "react";
import {Button, Card, Chip, IconButton, MenuItem, SvgIcon, TextField, Typography} from "@material-ui/core";
import MobilePhotoViewer from "./MobilePhotoViewer";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import {separateDigit} from "../../../../utills/ToFaDigit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PropType from 'prop-types'


function ProductViewCard(props) {
    const {product, addToCart} = props
    const classes = useMobileProductStyle()
    const [selectedSize, setSelectedSize] = useState(product.size_list[0]) // todo: duplicate code
    const [selectedColor, setSelectedColor] = useState(product.color_list[0])
    const [count, setCount] = useState(1)
    const getMaxStockNumber = () => {
        if (product.merchandise_type === 1) {
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
    let images = [product.preview_image]
    for (let i = 0; i < product.other_image_list.length; i++) {
        images.push(product.other_image_list[i])
    }

    return (
        <Card className={classes.card}>
            <MobilePhotoViewer images={images}/>
            <Typography className={classes.title}>{product.title}</Typography>
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
                                        className={classes.price}>{separateDigit(product.price_with_discount)}</Typography>
                                </div>
                            </>
                            :
                            <div className={classes.priceContainer}>
                                <Typography className={classes.toman}>تومان</Typography>
                                <Typography
                                    className={classes.price}>{separateDigit(product.price)}</Typography>
                            </div>
                        :
                        <>
                            <div className={classes.priceContainer}>
                                <Typography
                                    className={classes.price}>ناموجود</Typography>
                            </div>

                        </>
                }
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
                <Button
                    disabled={!product.is_exist}
                    className={classes.shopButton}
                    dir={'ltr'}
                    onClick={() => addToCart({
                        id: product.id,
                        color: selectedColor,
                        size: selectedSize,
                        count: count,
                    })}
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
        </Card>
    )
}

ProductViewCard.propTypes = {
    product: PropType.object.isRequired,
    addToCart: PropType.func.isRequired,
}


export default ProductViewCard