import React from "react";
import {Button, Card, Chip, IconButton, SvgIcon, TextField, Typography} from "@material-ui/core";
import PhotoViewer from "./PhotoViewer";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {separateDigit} from "../../../utills/ToFaDigit";
import {useProductStyle} from "./Styles/useProductStyle";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useLocation} from "react-router-dom"

function DesktopProduct() {
    const classes = useProductStyle()
    const location = useLocation()
    const product = {
        title: 'آستین کوتاه باله دار خاکستری',
        detail: 'تیشرت دخترانه جنس: یکرو ویسکوز، اسلپ\n' +
            'جنس: ویسکوز\n' +
            'سبک: روزمره\n' +
            'نوع: تیشرت\n' +
            'یقه: یقه گرد\n' +
            'نوع آستین: آستین کوتاه\n' +
            'طرح: ساده\n' +
            'رنگ: خاکستر',
        description: '',
        sizes: ['لارج', "ایکس لارج", "دو ایکس لارج", "اسمال"],
        colors: ['زرد', "قرمز", "سبز", "آبی"],
        count: 0,
        hasDiscount: true,
        discount: 0.15,
        price: 2459000,
        priceWithDiscount: 2659000,

    }

    return (
        <Card>
            <div className={classes.content}>
                {/*<div style={{width: '100%'}}>*/}
                    <PhotoViewer/>
                {/*</div>*/}
                <div className={classes.detailContainer}>

                    <div className={classes.details}>
                        <Typography className={classes.title}>{product.title}</Typography>
                        <Typography className={classes.subtitle}>مشخصات محصول:</Typography>
                        <Typography className={classes.detail}>{product.detail}</Typography>
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
                    </div>
                </div>

                <div className={classes.actionContainer}>
                    <CopyToClipboard text={window.location.href}>
                        <IconButton className={classes.shareButton}>
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" width="22.5" height="21" viewBox="0 0 22.5 21">
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
                                    <path id="Path_30120" data-name="Path 30120" d="M8.6,12.928l6.79,3.395" fill="none"
                                          stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="1.5"/>
                                </g>
                            </SvgIcon>

                        </IconButton>
                    </CopyToClipboard>
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
                </div>
            </div>
        </Card>
    )
}


export default DesktopProduct