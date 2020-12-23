import React, {useState} from "react";
import {Grid, IconButton, InputAdornment, MenuItem, TextField, Typography} from "@material-ui/core";
import {useSignUpPageStyle} from "../../Pages/Styles/useSignUpPageStyle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {toFaDigit} from "../../../utills/ToFaDigit";
import PropType from 'prop-types'
import useStateData from "../../FetchData/useStateData";
import useCityData from "../../FetchData/useCityData";

function ThirdStep(props) {
    const {values, setValues, errors} = props
    const classes = useSignUpPageStyle()
    const [showPassword, setShowPassword] = useState(false)
    const [fetchCities, setFetchCities] = useState(false)
    const [statesLoading, states] = useStateData(true)
    const [citiesLoading, cities] = useCityData(fetchCities, values.state.id)

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const findStateId = (name) => {
        for (let i = 0; i < states.length; i++) {
            if (states[i].name === name) {
                return states[i].id
            }
        }
    }
    const findCityId = (name) => {
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name === name) {
                return cities[i].id
            }
        }
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>نام و نام‌خانوادگی*</Typography>
                    <TextField
                        required
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
                        required
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
                        required
                        disabled={statesLoading}
                        error={errors.state}
                        select
                        placeholder={'استان خود را انتخاب کنید'}
                        value={values.state.name}
                        // value={toFaDigit(values.code)}
                        onChange={(event) => {
                            setValues({
                                ...values,
                                state: {
                                    name: event.target.value,
                                    id: findStateId(event.target.value)
                                },
                                city: {
                                    name: '',
                                    id: null,
                                }
                            })
                            setFetchCities(true)
                        }}
                        InputProps={{
                            classes: {
                                input: classes.input,
                                root: classes.textFieldRoot,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    >
                        {
                            states.map((state) => (
                                <MenuItem className={classes.menu} key={state.id} value={state.name}>
                                    {state.name}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>شهر</Typography>
                    <TextField
                        required
                        error={errors.city}
                        disabled={citiesLoading}
                        select
                        placeholder={'شهر خود را انتخاب کنید'}
                        value={values.city.name}
                        onChange={(event) => {
                            setValues({
                                ...values,
                                city: {
                                    name: event.target.value,
                                    id: findCityId(event.target.value)
                                }
                            })
                            setFetchCities(false)
                        }}
                        InputProps={{
                            classes: {
                                input: classes.input,
                                root: classes.textFieldRoot,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    >
                        {
                            cities.map((city) => (
                                <MenuItem className={classes.menu} key={city.id} value={city.name}>
                                    {city.name}
                                </MenuItem>
                            ))
                        }

                    </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>رمزعبور</Typography>
                    <TextField
                        required
                        helperText={toFaDigit('حداقل شامل 6 کاراکتر')}
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