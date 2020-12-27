import React from "react";
import {Card, Typography} from "@material-ui/core";
import {useAddressFactorCardStyle} from "./Styles/useAddressFactorCardStyle";
import PropTypes from 'prop-types';
import {toFaDigit} from "../../../utills/ToFaDigit";


function AddressFactorCard(props) {
    const {info} = props
    const classes = useAddressFactorCardStyle()

    return (
        <Card className={classes.card}>
            <div className={classes.container}>
                <div className={classes.dataContainer}>
                    <Typography className={classes.title}>نام و نام خانوادگی</Typography>
                    <Typography className={classes.label}>{info.costumer_name}</Typography>
                </div>
                <div className={classes.dataContainer}>
                    <Typography className={classes.title}>شماره موبایل</Typography>
                    <Typography className={classes.label}>{toFaDigit(info.phone_number)}</Typography>
                </div>
                <div className={classes.dataContainer}>
                    <Typography className={classes.title}>ایمیل</Typography>
                    <Typography className={classes.label}>{info.email}</Typography>
                </div>
                <div className={classes.dataContainer}>
                    <Typography className={classes.title}>استان</Typography>
                    <Typography className={classes.label}>{info.state_obj.name}</Typography>
                </div>
                <div className={classes.dataContainer}>
                    <Typography className={classes.title}>شهر</Typography>
                    <Typography className={classes.label}>{info.city_obj.name}</Typography>
                </div>
                <div className={classes.dataContainer}>
                    <Typography className={classes.title}>کدپستی</Typography>
                    <Typography className={classes.label}>{toFaDigit(info.post_code)}</Typography>
                </div>
            </div>
            <div className={classes.dataContainer}>
                <Typography className={classes.title}>آدرس</Typography>
                <Typography className={classes.label}>{toFaDigit(info.address)}</Typography>
            </div>
        </Card>
    )

}

AddressFactorCard.propTypes = {
    info: PropTypes.object.isRequired,
}

export default AddressFactorCard