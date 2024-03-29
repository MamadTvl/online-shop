import React from "react";
import {Button, Card, CardActions, CardHeader, Typography} from "@material-ui/core";
import ThumbComponent, {FilterStyles, useFilterPriceStyle} from "./Styles/FilterStyles";
import {separateDigit} from '../../../utills/ToFaDigit'
import * as PropTypes from "prop-types";

function FilterPrice(props) {
    const classes = useFilterPriceStyle()
    const {filterValues, dispatch, filterPrice} = props

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
                    value={[filterValues.from, filterValues.to]}
                    defaultValue={[filterValues.from, filterValues.to]}
                    step={100000}
                    onChange={(event, newValues) => {
                        dispatch(
                            {
                                type: 'priceFilter',
                                filterValues: {...filterValues,from: newValues[0], to: newValues[1]}
                            })
                    }}
                    max={filterValues.max}
                    scale={(x) => x}
                />
                <div className={classes.priceContainer}>
                    <div className={classes.fromPrice}>
                        <Typography className={classes.label}>از</Typography>
                        <Typography className={classes.price}>{separateDigit(filterValues.from)}</Typography>
                        <Typography className={classes.label}>تومان</Typography>
                    </div>
                    <div className={classes.toPrice}>
                        <Typography className={classes.label}>تا</Typography>
                        <Typography className={classes.price}>{separateDigit(filterValues.to)}</Typography>
                        <Typography className={classes.label}>تومان</Typography>

                    </div>
                </div>
                <Button
                    variant={'contained'}
                    fullWidth
                    className={classes.filterButton}
                    onClick={filterPrice}
                >
                    اعمال فیلتر
                </Button>
            </CardActions>
        </Card>
    )
}

export default FilterPrice

FilterPrice.propTypes = {
    filterValues: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    filterPrice: PropTypes.func.isRequired,
}
