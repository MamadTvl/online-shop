import React from "react";
import PropType from 'prop-types'
import {Card, Chip, IconButton, MenuItem, SvgIcon, TextField, Typography} from "@material-ui/core";
import {useOrderCardStyle} from "./Styles/useOrderCardStyle";
import AddIcon from "@material-ui/icons/Add";
import {separateDigit} from "../../../utills/ToFaDigit";
import RemoveIcon from "@material-ui/icons/Remove";
import useWindowSize from "../../../utills/Hooks/useWindowSize";


function OrderCard(props) {
    const {box, onChangeSelects, product, deleteHandler} = props

    const size = useWindowSize()
    const classes = useOrderCardStyle()
    const getMaxStockNumber = () => {
        if (product.merchandise_type === "1") {
            for (let i = 0; i < product.stock_list.length; i++) {
                if (product.stock_list[i].size === box.size
                    && product.stock_list[i].color === box.color) {
                    return product.stock_list[i].stock_number
                }
            }
        } else {
            return product.stock_number
        }

    }
    const isExist = (size, color) => {
        if (product.merchandise_type === "1") {
            for (let i = 0; i < product.stock_list.length; i++) {
                if (product.stock_list[i].size === size
                    && product.stock_list[i].color === color) {
                    return product.stock_list[i].stock_number !== 0
                }
            }
        } else {
            return product.stock_number !== 0
        }
    }
    return (
        <Card className={classes.card}>
            <img className={classes.image} src={product.preview_image} alt={product.title}/>
            <div className={classes.content}>
                <Typography className={classes.name}>{product.title}</Typography>
                <div className={classes.downItem}>
                    <div className={classes.action}>
                        <div className={classes.selectors}>
                            <TextField
                                style={{marginLeft: 8, marginBottom: size.width <= 600 ? 8 : 0}}
                                //size
                                select
                                value={box.size}
                                onChange={
                                    (event) => {
                                        if (isExist(event.target.value, box.color)) {
                                            onChangeSelects({
                                                id: product.id,
                                                color: box.color,
                                                size: box.size,
                                                count: box.count,
                                            }, {
                                                id: product.id,
                                                color: box.color,
                                                size: event.target.value,
                                                count: box.count,
                                            })
                                        }
                                    }}
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        root: classes.textFieldRoot,
                                    }
                                }}
                                fullWidth
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
                            <TextField
                                //color
                                select
                                value={box.color}
                                onChange={
                                    (event) => {
                                        if (isExist(box.size, event.target.value)) {
                                            onChangeSelects({
                                                id: product.id,
                                                color: box.color,
                                                size: box.size,
                                                count: box.count,
                                            }, {
                                                id: product.id,
                                                color: event.target.value,
                                                size: box.size,
                                                count: box.count,
                                            })
                                        }
                                    }}
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        root: classes.textFieldRoot,
                                    }
                                }}
                                fullWidth
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
                        <div className={classes.buttons}>
                            <div className={classes.buttonGroup}>
                                <IconButton
                                    onClick={
                                        () => {
                                            box.count !== getMaxStockNumber() &&
                                            onChangeSelects({
                                                id: product.id,
                                                color: box.color,
                                                size: box.size,
                                                count: box.count,
                                            }, {
                                                id: product.id,
                                                color: box.color,
                                                size: box.size,
                                                count: box.count + 1,
                                            })
                                        }
                                    }
                                    className={classes.addButton}>
                                    <AddIcon/>
                                </IconButton>
                                <Typography className={classes.countLabel}>{separateDigit(box.count)}</Typography>
                                <IconButton
                                    onClick={
                                        () => {
                                            box.count !== 1 && onChangeSelects({
                                                id: product.id,
                                                color: box.color,
                                                size: box.size,
                                                count: box.count,
                                            }, {
                                                id: product.id,
                                                color: box.color,
                                                size: box.size,
                                                count: box.count - 1,
                                            })
                                        }
                                    }
                                    className={classes.removeButton}
                                >
                                    <RemoveIcon/>
                                </IconButton>
                            </div>
                            <div className={classes.deleteButton}>
                                <IconButton
                                    onClick={() => {
                                        deleteHandler({
                                            id: product.id,
                                            color: box.color,
                                            size: box.size,
                                            count: box.count,
                                        })
                                    }}
                                >
                                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="19.5" height="21.5"
                                             viewBox="0 0 19.5 21.5">
                                        <g id="trash-2" transform="translate(-2.25 -1.25)">
                                            <path id="Path_2565" data-name="Path 2565" d="M3,6H21" fill="none"
                                                  stroke="#434343" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="1.5"/>
                                            <path id="Path_2566" data-name="Path 2566"
                                                  d="M19,6V20a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6M8,6V4a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2V6"
                                                  fill="none" stroke="#434343" strokeLinecap="round"
                                                  strokeLinejoin="round" strokeWidth="1.5"/>
                                            <line id="Line_6" data-name="Line 6" y2="6" transform="translate(10 11)"
                                                  fill="none" stroke="#434343" strokeLinecap="round"
                                                  strokeLinejoin="round" strokeWidth="1.5"/>
                                            <line id="Line_7" data-name="Line 7" y2="6" transform="translate(14 11)"
                                                  fill="none" stroke="#434343" strokeLinecap="round"
                                                  strokeLinejoin="round" strokeWidth="1.5"/>
                                        </g>
                                    </SvgIcon>
                                </IconButton>
                                <Typography className={classes.deleteLabel}>حذف</Typography>
                            </div>
                        </div>
                    </div>
                    <div className={classes.priceDetailContainer}>
                        {
                            product.has_discount
                                ? <>
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
                                : <>
                                    <div className={classes.priceContainer}>
                                        <Typography className={classes.toman}>تومان</Typography>
                                        <Typography
                                            className={classes.price}>{separateDigit(product.price)}</Typography>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </Card>
    )
}

OrderCard.propTypes = {
    box: PropType.object.isRequired,
    onChangeSelects: PropType.func.isRequired,
    product: PropType.object.isRequired,
    deleteHandler: PropType.func.isRequired,
}


export default OrderCard