import React from "react";
import image from '../../../img/create_account.png'
import {TextField, Typography} from "@material-ui/core";
import {useSignUpPageStyle} from "../../Pages/Styles/useSignUpPageStyle";
import PropType from 'prop-types'
import {toFaDigit} from "../../../utills/ToFaDigit";

function FirstStep(props) {
    const classes = useSignUpPageStyle()
    const {values, setValues, errors} = props
    const handleChange = (mobileNumber) => (event) => {
        setValues({...values, [mobileNumber]: event.target.value})
    }
    return (
        <>
            <div className={classes.imageContainer}>
                <img src={image} alt={'create_account'} className={classes.image}/>
            </div>
            <div className={classes.mobileContainer}>
                <Typography className={classes.label}>شماره موبایل</Typography>
                <TextField
                    dir={'ltr'}
                    type={'tel'}
                    error={errors.mobileNumber}
                    placeholder={toFaDigit('09123456789')}
                    value={toFaDigit(values.mobileNumber)}
                    onChange={handleChange('mobileNumber')}
                    InputProps={{
                        classes: {
                            input: classes.input,
                            root: classes.textFieldRoot,
                        }
                    }}
                    fullWidth
                    variant="outlined"
                />
            </div>
        </>
    )
}

FirstStep.propTypes = {
    values: PropType.object.isRequired,
    setValues: PropType.func.isRequired,
    errors: PropType.object.isRequired,
}


export default FirstStep