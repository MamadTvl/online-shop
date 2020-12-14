import React, {useState} from "react";
import {Card, Grid, TextField, Typography} from "@material-ui/core";
import {useUserInfoPageStyle} from "../../Pages/Styles/useUserInfoPageStyle";
import PropType from 'prop-types'


function AddressForm(props) {
    const classes = useUserInfoPageStyle()
    const {values, setValues, errors, setErrors} = props


    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }

    return(
        <Card className={classes.card}>
            <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                    <Typography className={classes.label}>نام و نام‌خانوادگی</Typography>
                    <TextField
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
                        dir={'ltr'}
                        select
                        placeholder={'استان خود را انتخاب کنید'}
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
                    <Typography className={classes.label}>کد پستی</Typography>
                    <TextField
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
                        multiline
                        error={errors.address}
                        value={values.address}
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