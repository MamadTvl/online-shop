import React, {useState} from "react";
import {Card, CardActions, CardHeader, Typography} from "@material-ui/core";
import ThumbComponent, {FilterStyles, useFilterPriceStyle} from "./Styles/FilterStyles";
import {separateDigit} from '../../../utills/ToFaDigit'

function FilterPrice() {
    const classes = useFilterPriceStyle()
    const [values, setValues] = useState({
        from: 0,
        to: 15000000,
    })
    const handleChange = (event, newValue) => {
        setValues({
            from: newValue[0],
            to: newValue[1],
        })
    }
    return (
        <Card className={classes.card}>
            <CardHeader
                style={{padding: 0, marginRight: 8}}
                title={<Typography className={classes.price}>تعیین بازه قیمت</Typography>}
            />
            <CardActions className={classes.actions}>
                <FilterStyles
                    ThumbComponent={ThumbComponent}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    value={[values.from, values.to]}
                    defaultValue={[0, 15000000]}
                    step={512340}
                    onChange={handleChange}
                    max={15000000}
                    scale={(x) => x}
                />
                <div className={classes.priceContainer}>
                    <div className={classes.fromPrice}>
                        <Typography className={classes.label}>از</Typography>
                        <Typography className={classes.price}>{separateDigit(values.from)}</Typography>
                        <Typography className={classes.label}>تومان</Typography>
                    </div>
                    <div className={classes.toPrice}>
                        <Typography className={classes.label}>تا</Typography>
                        <Typography className={classes.price}>{separateDigit(values.to)}</Typography>
                        <Typography className={classes.label}>تومان</Typography>

                    </div>
                </div>
            </CardActions>
        </Card>
    )
}

export default FilterPrice