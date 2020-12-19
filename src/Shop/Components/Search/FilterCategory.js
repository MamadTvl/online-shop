import React, {useState} from "react";
import {Card, CardActions, CardHeader, Collapse, FormControlLabel, IconButton, Typography} from "@material-ui/core";
import {CategoryCheckbox, useFilterCategoryStyle} from "./Styles/FilterStyles";
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as PropTypes from "prop-types";


function FilterCategory(props) {
    const classes = useFilterCategoryStyle()
    const {categories, dispatch, setChange} = props
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card style={{width: '100%'}}>
            <CardHeader

                title={<Typography className={classes.title}>دسته‌بندی</Typography>}
            />
            <CardActions className={classes.categories}>
                <div className={classes.container}>
                    {
                        categories.slice(0, 4)
                            .map((category) => (
                                <FormControlLabel
                                    control={<CategoryCheckbox
                                        checked={category.checked}
                                        onChange={() => {
                                            dispatch({
                                                type: 'selectCategory',
                                                categoryId: category.id,
                                                value: !category.checked
                                            })
                                            setChange(prvState => prvState + 1)
                                        }}
                                        name={category.name}

                                    />}
                                    label={<Typography className={classes.label}>{category.name}</Typography>}
                                />
                            ))
                    }
                    {
                        categories.length > 4 &&
                        <div className={classes.seeMoreContainer}>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon/>
                            </IconButton>
                            {
                                expanded
                                    ? <Typography className={classes.seeMoreText}>مشاهده کمتر</Typography>
                                    : <Typography className={classes.seeMoreText}>مشاهده بیشتر</Typography>
                            }
                        </div>
                    }
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div className={classes.container}>
                            {
                                categories.slice(4, categories.length)
                                    .map((category) => (
                                        <FormControlLabel
                                            control={
                                                <CategoryCheckbox
                                                    checked={category.checked}
                                                    onChange={() => {
                                                        dispatch({
                                                            type: 'selectCategory',
                                                            categoryId: category.id,
                                                            value: !category.checked
                                                        })
                                                        setChange(prvState => prvState + 1)
                                                    }}
                                                />}
                                            label={<Typography className={classes.label}>{category.name}</Typography>}
                                        />
                                    ))
                            }
                        </div>
                    </Collapse>
                </div>

            </CardActions>
        </Card>
    )

}


export default FilterCategory

FilterCategory.propTypes = {
    categories: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    setChange: PropTypes.number.isRequired,
}