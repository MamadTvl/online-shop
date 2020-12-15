import React from "react";
import {Card, Typography} from "@material-ui/core";
import PropType from "prop-types";
import {useAddressCardStyle} from "./Styles/useAddressCardStyle";
import {StyledRadio} from "../Public/StyledRadio";


function AddressCard(props) {
    const classes = useAddressCardStyle()
    const {data, checked, handleChange} = props
    const titles = ['استان', 'شهر', 'کدپستی', 'آدرس']

    const setData = (index) => {
        switch (index) {
            case 0:
                return data.state
            case 1:
                return data.city
            case 2:
                return data.code
            case 3:
                return data.address
            default:
                break
        }
    }
    const handleChangeRadio = (event) => {

    }
    return (
        <Card className={classes.card}>
            <div style={{width: '100%', margin: 'auto 0'}} className={classes.container}>
                <StyledRadio
                    className={classes.radio}
                    checked={checked}
                    onChange={handleChangeRadio}
                />
                {
                    titles.map((title, index) => (
                        <div className={classes.dataContainer}>
                            <Typography className={classes.title}>{title}</Typography>
                            <Typography className={classes.data}>{setData(index)}</Typography>
                        </div>
                    ))
                }
            </div>
        </Card>
    )
}

AddressCard.propTypes = {
    data: PropType.object.isRequired,
    checked: PropType.bool.isRequired,
    handleChange: PropType.func.isRequired,
}

export default AddressCard