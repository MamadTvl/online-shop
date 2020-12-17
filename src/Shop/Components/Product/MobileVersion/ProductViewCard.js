import React from "react";
import {Button, Card, Chip, IconButton, SvgIcon, TextField, Typography} from "@material-ui/core";
import MobilePhotoViewer from "./MobilePhotoViewer";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import {separateDigit} from "../../../../utills/ToFaDigit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PropType from 'prop-types'


function ProductViewCard(props) {
    const {product} = props
    const classes = useMobileProductStyle()

    return (
        <Card className={classes.card}>
            <MobilePhotoViewer/>
            <Typography className={classes.title}>{product.title}</Typography>
            <div className={classes.priceDetailContainer}>
                <div className={classes.discountContainer}>
                    <Chip className={classes.discountChip} label={`%${separateDigit(product.discount * 100)}`}/>
                    <Typography className={classes.prevPrice}>{separateDigit(product.price)}</Typography>

                </div>
                <div className={classes.priceContainer}>
                    <Typography className={classes.toman}>تومان</Typography>
                    <Typography
                        className={classes.price}>{separateDigit(product.priceWithDiscount)}</Typography>

                </div>
            </div>
            <div className={classes.selects}>
                <div className={classes.selectContainer}>
                    <Typography className={classes.label}>سایز</Typography>
                    <TextField
                        // style={{flexGrow: 1}}
                        id="size"
                        select
                        value={''}
                        // onChange={handleChange}
                        InputProps={{
                            classes: {
                                input: classes.textFieldFont,
                                root: classes.textFieldRoot,
                            }
                        }}
                        variant="outlined"
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography className={classes.label}>رنگ</Typography>
                    <TextField
                        // style={{flexGrow: 1}}
                        id="color"
                        select
                        // value={selectedCategory ? selectedCategory.name : ''}
                        // onChange={handleChange}
                        InputProps={{
                            classes: {
                                input: classes.textFieldFont,
                                root: classes.textFieldRoot,
                            }
                        }}
                        variant="outlined"
                    />
                </div>
                <div className={classes.selectContainer}>
                    <Typography className={classes.label}>تعداد</Typography>
                    <div className={classes.buttonGroup}>
                        <IconButton className={classes.addButton}>
                            <AddIcon/>
                        </IconButton>
                        <Typography className={classes.countLabel}>{separateDigit(product.count)}</Typography>
                        <IconButton className={classes.removeButton}>
                            <RemoveIcon/>
                        </IconButton>
                    </div>
                </div>
                <Button
                    className={classes.shopButton}
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
        </Card>
    )
}

ProductViewCard.propTypes = {
    product: PropType.object.isRequired,
}


export default ProductViewCard