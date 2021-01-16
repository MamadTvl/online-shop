import React from "react";
import {Grid} from "@material-ui/core";
import {useStyles} from "./Styles/BannersStyle";
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


function Banners(props) {
    const {banners} = props
    const classes = useStyles()

    return (
        <>
            <Grid className={classes.container} container justify={"space-between"}>
                <Grid className={classes.imageContainer} item md={5} xs={12}>
                    <Link to={{
                        pathname: '/search',
                        search: '?campaign_id=1',
                        state: {showCampaign: true}
                    }}>
                        <img className={classes.firstImage} src={banners[0].image ? banners[0].image : null} alt={'کمپین شماره ۱'}/>
                    </Link>
                </Grid>
                <Grid className={classes.secondImageContainer} item md={7} xs={12}>
                    <Link to={{
                        pathname: '/search',
                        search: '?campaign_id=2',
                        state: {showCampaign: true}
                    }}
                    >
                        <img className={classes.secondImage} src={banners[1].image ? banners[1].image : null} alt={'کمپین شماره ۲'}/>
                    </Link>
                </Grid>
                <Grid className={classes.thirdImageContainer} item xs={12}>
                    <Link to={{
                        pathname: '/search',
                        search: '?campaign_id=3',
                        state: {showCampaign: true}
                    }}
                    >
                        <img className={classes.thirdImage} src={banners[2].image ? banners[2].image : null} alt={'کمپین شماره ۳'}/>
                    </Link>
                </Grid>
            </Grid>
            <div className={classes.thirdImageXsContainer}>
                <Link to={{
                    pathname: '/search',
                    search: '?campaign_id=3',
                    state: {showCampaign: true}
                }}
                >
                    <img className={classes.thirdImage} src={banners[2].image ? banners[2].image : null} alt={'کمپین شماره ۳'}/>
                </Link>
            </div>
        </>
    )
}

Banners.propTypes = {
    banners: PropTypes.array.isRequired,
}

export default Banners