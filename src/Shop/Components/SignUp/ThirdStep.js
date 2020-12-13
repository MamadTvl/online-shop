import React, {useState} from "react";
import {Grid, IconButton, InputAdornment, TextField, Typography} from "@material-ui/core";
import {useSignUpPageStyle} from "../../Pages/Styles/useSignUpPageStyle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {toFaDigit} from "../../../utills/ToFaDigit";
import PropType from 'prop-types'

function ThirdStep(props) {
    const {values, setValues, errors} = props
    const classes = useSignUpPageStyle()
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>نام و نام‌خانوادگی*</Typography>
                    <TextField
                        error={errors.name}
                        placeholder={'نام و نام‌خانوادگی شما'}
                        value={values.name}
                        onChange={handleChange('name')}
                        InputProps={{
                            classes: {
                                input: classes.input,
                                root: classes.textFieldRoot,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>آدرس پست الکترونیک*</Typography>
                    <TextField
                        dir={'ltr'}
                        error={errors.email}
                        placeholder={'آدرس پست الکترونیک شما'}
                        value={values.email}
                        onChange={handleChange('email')}
                        InputProps={{
                            classes: {
                                input: classes.input,
                                root: classes.textFieldRoot,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>استان</Typography>
                    <TextField
                        dir={'ltr'}
                        select
                        placeholder={'استان خود را انتخاب کنید'}
                        // value={toFaDigit(values.code)}
                        onChange={handleChange('state')}
                        InputProps={{
                            classes: {
                                input: classes.input,
                                root: classes.textFieldRoot,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>شهر</Typography>
                    <TextField
                        dir={'ltr'}
                        select
                        placeholder={'شهر خود را انتخاب کنید'}
                        // value={toFaDigit(values.code)}
                        onChange={handleChange('city')}
                        InputProps={{
                            classes: {
                                input: classes.input,
                                root: classes.textFieldRoot,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>رمزعبور</Typography>
                    <TextField
                        dir={'ltr'}
                        error={errors.password}
                        placeholder={'رمزعبور شما'}
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
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </>
    )
}

ThirdStep.propTypes = {
    values: PropType.object.isRequired,
    setValues: PropType.func.isRequired,
    errors: PropType.func.isRequired,
}

export default ThirdStep