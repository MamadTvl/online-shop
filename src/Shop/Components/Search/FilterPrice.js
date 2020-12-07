import React from "react";
import {Card, CardActions, CardHeader, Typography} from "@material-ui/core";
import ThumbComponent, {FilterStyles, useStyle} from "./FilterStyles";


function FilterPrice() {
    const classes = useStyle()
    const handleChange = (event) => {
        console.log(event.target)
    }
    return (
        <Card className={classes.card}>
            <CardHeader
                title={<Typography>تعیین بازه قیمت</Typography>}
            />
            <CardActions className={classes.actions}>
                <FilterStyles
                    ThumbComponent={ThumbComponent}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}

                    defaultValue={[0, 999999999]}
                    step={100000}
                    onChange={handleChange}
                    max={999999999}
                    scale={(x) => x}
                />
                <div className={classes.priceContainer}>
                    <div className={classes.fromPrice}>
                        <Typography>از</Typography>
                        <Typography>{}</Typography>
                        <Typography>تومان</Typography>
                    </div>
                    <div className={classes.toPrice}>
                        <Typography>تا</Typography>
                        <Typography>{}</Typography>
                        <Typography>تومان</Typography>

                    </div>
                </div>
            </CardActions>
        </Card>
    )
}

export default FilterPrice