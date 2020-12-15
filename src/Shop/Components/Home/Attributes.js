import React from "react";
import {useStyles} from "./Styles/AttributesStyle";
import {Grid, Typography} from "@material-ui/core";
import PropTypes from "prop-types"
import {toFaDigit} from "../../../utills/ToFaDigit";

function Attributes(props) {
    const {attributes} = props
    const classes = useStyles()

    return(
        <div className={classes.main}>
            <Typography className={classes.title}>با خیال راحت، از ما خرید کنید.</Typography>
            <Grid container>
                {
                    attributes.map((attribute)=> (
                        <Grid item md={4} xs={12}>
                            <div className={classes.container}>
                                <img className={classes.image} src={attribute.image} alt={attribute.title}/>
                                <Typography className={classes.attributeTitle}>{toFaDigit(attribute.title)}</Typography>
                                <Typography className={classes.attributeDescription}>{toFaDigit(attribute.text)}</Typography>
                            </div>
                        </Grid>
                    ))

                }
            </Grid>
        </div>
    )
}
Attributes.propTypes ={
    attributes: PropTypes.array.isRequired,
}


export default Attributes