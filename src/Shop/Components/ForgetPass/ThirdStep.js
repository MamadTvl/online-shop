import React, {useState} from "react";
import {IconButton, InputAdornment, TextField, Typography} from "@material-ui/core";
import {toFaDigit} from "../../../utills/ToFaDigit";
import {useForgetPassStyle} from "../../Pages/Styles/useForgetPassPageStyle";
import PropType from "prop-types";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


function ThirdStep(props) {
    const classes = useForgetPassStyle()
    const {values, setValues, errors} = props
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (password) => (event) => {
        setValues({...values, [password]: event.target.value})
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return(
        <div style={{width: '100%'}}>
            <Typography className={classes.title}>رمزعبور جدید خود را وارد کنید</Typography>
            <div className={classes.mobileContainer}>
                <Typography className={classes.label}>رمزعبور</Typography>
                <TextField
                    required
                    dir={'ltr'}
                    error={errors.password}
                    helperText={toFaDigit('حداقل شامل 6 کاراکتر')}
                    type={showPassword ? 'text' : 'password'}
                    value={toFaDigit(values.password)}
                    onChange={handleChange('password')}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>,
                        classes: {
                            input: classes.input,
                            root: classes.textFieldRoot,
                        }
                    }}
                    FormHelperTextProps={{
                        style: {
                            fontFamily: 'Shabnam',
                            fontSize: 10,
                            fontWeight: 500,
                            textAlign: 'right'
                        }
                    }}
                    fullWidth
                    variant="outlined"
                />
            </div>
        </div>
    )
}

ThirdStep.propTypes = {
    values: PropType.object.isRequired,
    setValues: PropType.func.isRequired,
    errors: PropType.object.isRequired,
}

export default ThirdStep
