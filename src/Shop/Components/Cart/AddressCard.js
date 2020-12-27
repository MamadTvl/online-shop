import React from "react";
import {Card, Typography} from "@material-ui/core";
import PropType from "prop-types";
import {useAddressCardStyle} from "./Styles/useAddressCardStyle";
import {StyledRadio} from "../Public/StyledRadio";
import {toFaDigit} from "../../../utills/ToFaDigit";


function AddressCard(props) {
    const classes = useAddressCardStyle()
    const {data, addressCheckbox, setAddressCheckboxes, index, forceUpdate} = props
    const titles = ['استان', 'شهر', 'کدپستی', 'آدرس']

    const setData = (index) => {
        switch (index) {
            case 0:
                return data.state_obj.name
            case 1:
                return data.city_obj.name
            case 2:
                return data.post_code
            case 3:
                return data.address
            default:
                break
        }
    }
    const handleChangeRadio = (event) => {
        setAddressCheckboxes(prevState => {
            for (let i = 0; i < prevState.length; i++) {
                if (i === index) {
                    prevState[i].checked = event.target.checked
                } else {
                    prevState[i].checked = false
                }
            }
            return prevState
        })
        forceUpdate()
    }
    return (
        <Card className={classes.card}>
            <div key={index} style={{width: '100%', margin: 'auto 0'}} className={classes.container}>
                <StyledRadio
                    className={classes.radio}
                    checked={addressCheckbox.checked}
                    onChange={handleChangeRadio}
                />
                {
                    titles.map((title, index) => (
                        <div className={classes.dataContainer}>
                            <Typography className={classes.title}>{title}</Typography>
                            <Typography className={classes.data}>{toFaDigit(setData(index))}</Typography>
                        </div>
                    ))
                }
            </div>
        </Card>
    )
}

AddressCard.propTypes = {
    data: PropType.object.isRequired,
    addressCheckbox: PropType.object,
    setAddressCheckboxes: PropType.func.isRequired,
    index: PropType.number.isRequired,
    forceUpdate: PropType.func.isRequired,
}

export default AddressCard