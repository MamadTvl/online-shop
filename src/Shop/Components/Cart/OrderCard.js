import React from "react";
import PropType from 'prop-types'
import {Card, Chip, IconButton, SvgIcon, TextField, Typography} from "@material-ui/core";
import {useOrderCardStyle} from "./Styles/useOrderCardStyle";
import AddIcon from "@material-ui/icons/Add";
import {separateDigit} from "../../../utills/ToFaDigit";
import RemoveIcon from "@material-ui/icons/Remove";
import useWindowSize from "../../../utills/Hooks/useWindowSize";


function OrderCard(props) {
    const {selects, setSelects, product, deleteHandler} = props
    const size = useWindowSize()
    const classes = useOrderCardStyle()
    return (
        <Card className={classes.card}>
            <img className={classes.image} src={product.image} alt={product.title}/>
            <div className={classes.content}>
                <Typography className={classes.name}>{product.title}</Typography>
                <div className={classes.downItem}>
                    <div className={classes.action}>
                        <div className={classes.selectors}>
                            <TextField
                                style={{marginLeft: 8, marginBottom: size.width <= 600 ? 8 : 0}}
                                //size
                                dir={'ltr'}
                                select
                                // value={toFaDigit(values.code)}
                                // onChange={handleChange('state')}
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        root: classes.textFieldRoot,
                                    }
                                }}
                                fullWidth
                                variant="outlined"
                            />
                            <TextField
                                //color
                                dir={'ltr'}
                                select
                                // value={toFaDigit(values.code)}
                                // onChange={handleChange('state')}
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        root: classes.textFieldRoot,
                                    }
                                }}
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.buttons}>
                            <div className={classes.buttonGroup}>
                                <IconButton className={classes.addButton}>
                                    <AddIcon/>
                                </IconButton>
                                <Typography className={classes.countLabel}>{separateDigit(product.count)}</Typography>
                                <IconButton className={classes.removeButton}>
                                    <RemoveIcon/>
                                </IconButton>
                            </div>
                            <div className={classes.deleteButton}>
                                <IconButton>
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
                </div>
            </div>
        </Card>
    )
}

OrderCard.propTypes = {
    selects: PropType.object.isRequired,
    setSelects: PropType.func.isRequired,
    product: PropType.object.isRequired,
    deleteHandler: PropType.func.isRequired,
}


export default OrderCard