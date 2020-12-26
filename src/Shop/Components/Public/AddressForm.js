import React, {useState} from "react";
import {Card, Grid, MenuItem, TextField, Typography} from "@material-ui/core";
import {useUserInfoPageStyle} from "../../Pages/Styles/useUserInfoPageStyle";
import PropType from 'prop-types'
import useStateData from "../../FetchData/useStateData";
import useCityData from "../../FetchData/useCityData";
import {toFaDigit} from "../../../utills/ToFaDigit";


function AddressForm(props) {
    const {values, setValues, errors, setErrors} = props
    const [fetchCities, setFetchCities] = useState(false)
    const [statesLoading, states] = useStateData(true)
    const [citiesLoading, cities] = useCityData(fetchCities, values.state.id)
    const classes = useUserInfoPageStyle()

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

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }

    return (
        <Card className={classes.card}>
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>نام و نام‌خانوادگی</Typography>
                    <TextField
                        required
                        error={errors.name}
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
                    <Typography className={classes.label}>شماره موبایل</Typography>
                    <TextField
                        required
                        dir={'ltr'}
                        error={errors.mobileNumber}
                        value={values.mobileNumber}
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
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>آدرس پست الکترونیک</Typography>
                    <TextField
                        required
                        dir={'ltr'}
                        error={errors.email}
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
                        select
                        placeholder={'استان خود را انتخاب کنید'}
                        onChange={(event) => {
                            setFetchCities(false)
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
                        disabled={citiesLoading}
                        select
                        placeholder={'شهر خود را انتخاب کنید'}
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
                    <Typography className={classes.label}>کد پستی</Typography>
                    <TextField
                        required
                        dir={'ltr'}
                        error={errors.code}
                        value={values.code}
                        onChange={handleChange('code')}
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
                <Grid item xs={12}>
                    <Typography className={classes.label}>آدرس</Typography>
                    <TextField
                        required
                        multiline
                        error={errors.address}
                        value={toFaDigit(values.address)}
                        onChange={handleChange('address')}
                        InputProps={{
                            classes: {
                                input: classes.input,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

AddressForm.propTypes = {
    values: PropType.object.isRequired,
    setValues: PropType.func.isRequired,
    errors: PropType.object.isRequired,
    setErrors: PropType.func.isRequired,

}

export default AddressForm