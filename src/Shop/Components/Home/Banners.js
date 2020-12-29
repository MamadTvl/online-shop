import React from "react";
import {Grid} from "@material-ui/core";
import {useStyles} from "./Styles/BannersStyle";
import PropTypes from 'prop-types'


function Banners(props) {
    const {banners} = props
    const classes = useStyles()

    return (
        <>
            <Grid className={classes.container} container justify={"space-between"}>
                <Grid className={classes.imageContainer} item md={5} xs={12}>
                    <img className={classes.firstImage} src={banners[0].image} alt={'didartshop.ir'}/>
                </Grid>
                <Grid className={classes.secondImageContainer} item md={7} xs={12}>
                    <img className={classes.secondImage} src={banners[1].image} alt={'didartshop.ir'}/>
                </Grid>
                <Grid className={classes.thirdImageContainer} item xs={12}>
                    <img className={classes.thirdImage} src={banners[2].image} alt={'didartshop.ir'}/>
                </Grid>
            </Grid>
            <div className={classes.thirdImageXsContainer}>
                <img className={classes.thirdImage} src={banners[2].image} alt={'didartshop.ir'}/>
            </div>
        </>
    )
}

Banners.propTypes = {
    banners: PropTypes.array.isRequired,
}

export default Banners