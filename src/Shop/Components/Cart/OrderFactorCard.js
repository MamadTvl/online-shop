import React from "react";
import {Card, Typography} from "@material-ui/core";
import {useOrderFactorCardStyle} from "./Styles/useOrderFactorCardStyle";
import PropType from 'prop-types';
import {toFaDigit} from "../../../utills/ToFaDigit"


function OrderFactorCard(props) {
    const {product} = props
    const classes = useOrderFactorCardStyle()
    return (
        <Card className={classes.card}>
            <img className={classes.image} src={product.image} alt={product.title}/>
            <div className={classes.container}>
                <Typography className={classes.title}>{product.title}</Typography>
                <div>
                    <div className={classes.labelContainer}>
                        <Typography className={classes.label}>رنگ:</Typography>
                        <Typography className={classes.data}>{product.color}</Typography>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{marginLeft: 8}} className={classes.labelContainer}>
                            <Typography className={classes.label}>تعداد:</Typography>
                            <Typography className={classes.data}>{toFaDigit((product.count).toString())}</Typography>
                        </div>
                        <div className={classes.labelContainer}>
                            <Typography className={classes.label}>سایز:</Typography>
                            <Typography className={classes.data}>{product.size}</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

OrderFactorCard.propTypes = {
    product: PropType.object.isRequired,
}
export default OrderFactorCard