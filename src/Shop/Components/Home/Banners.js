import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {useStyles} from "./Styles/BannersStyle";
import first from '../../../img/first.png'
import second from '../../../img/second.png'
import third from '../../../img/third.png'

function Banners() {
    const classes = useStyles()

    return (
        <>
        <Grid className={classes.container} container justify={"space-between"}>
            <Grid className={classes.imageContainer} item md={5} xs={12}>
                <img className={classes.firstImage} src={first} alt={'first'}/>
                <Typography className={classes.title} noWrap={false}>{`۲ تا بخر ۳ \
                تا ببر`}</Typography>
            </Grid>
            <Grid className={classes.secondImageContainer} item md={7} xs={12}>
                <img className={classes.secondImage} src={second} alt={'second'}/>
                <Typography className={classes.title}>حراج بهاره</Typography>
            </Grid>
            <Grid className={classes.thirdImageContainer} item xs={12}>
                <img className={classes.thirdImage} src={third} alt={'third'}/>
                <Typography className={classes.title}>امسال، شیک‌تر بپوش!</Typography>
            </Grid>
        </Grid>
            <div className={classes.thirdImageXsContainer}>
                <img className={classes.thirdImage} src={third} alt={'third'}/>
                <Typography className={classes.title}>امسال، شیک‌تر بپوش!</Typography>
            </div>
            </>
    )
}

export default Banners