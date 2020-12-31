import React from "react";
import {TextField, Typography} from "@material-ui/core";
import {toFaDigit} from "../../../utills/ToFaDigit";
import {useForgetPassStyle} from "../../Pages/Styles/useForgetPassPageStyle";
import PropType from "prop-types";


function FirstStep(props) {
    const classes = useForgetPassStyle()
    const {values, setValues, errors} = props

    const handleChange = (mobileNumber) => (event) => {
        setValues({...values, [mobileNumber]: event.target.value})
    }
    return(
        <div style={{width: '100%'}}>
            <Typography className={classes.title}>شماره موبایل خود را وارد کنید</Typography>
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
        </div>
    )
}

FirstStep.propTypes = {
    values: PropType.object.isRequired,
    setValues: PropType.func.isRequired,
    errors: PropType.object.isRequired,
}

export default FirstStep