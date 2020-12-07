import React, {useState} from "react";
import {
    Card,
    CardActions,
    CardHeader,
    Collapse,
    FormControlLabel,
    FormGroup,
    IconButton,
    Typography
} from "@material-ui/core";
import {CategoryCheckbox, useFilterCategoryStyle} from "./Styles/FilterStyles";
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function FilterCategory() {
    const classes = useFilterCategoryStyle()
    const categories = ["پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک", "پوشاک"]
    const [expanded, setExpanded] = useState(false)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const handleChangeOptions = () => {
    // todo: need useReducer in search component
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
                                    control={<CategoryCheckbox checked={true} onChange={handleChangeOptions}
                                                               name={category}/>}
                                    label={<Typography className={classes.label}>{category}</Typography>}
                                />
                            ))
                    }
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
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <div className={classes.container}>
                            {
                                categories.slice(4, categories.length)
                                    .map((category) => (
                                        <FormControlLabel
                                            control={<CategoryCheckbox checked={false} onChange={handleChangeOptions}/>}
                                            label={<Typography className={classes.label}>{category}</Typography>}
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