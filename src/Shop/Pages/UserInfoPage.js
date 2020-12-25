import React, {useEffect, useState} from "react";
import {Button, Card, CircularProgress, Grid, MenuItem, TextField, Typography} from "@material-ui/core";
import {useUserInfoPageStyle} from "./Styles/useUserInfoPageStyle";
import Title from "../Components/Public/Title";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import useUserData from "../FetchData/useUserData";
import {toFaDigit} from "../../utills/ToFaDigit";
import useStateData from "../FetchData/useStateData";
import useCityData from "../FetchData/useCityData";
import usePathUserInfo from "../PostData/usePathUserInfo";

function UserInfoPage() {
    const [loading, result] = useUserData(true)
    const classes = useUserInfoPageStyle()
    const size = useWindowSize()
    const [values, setValues] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        state: {
            name: '',
            id: null,
        },
        city: {
            name: '',
            id: null,
        },
    })
    const [fetchCities, setFetchCities] = useState(false)
    const [statesLoading, states] = useStateData(true)
    const [citiesLoading, cities] = useCityData(fetchCities, values.state.id)
    const [fetchSubmit, setFetchSubmit] = useState(false)
    const [updateLoading, updateResult] = usePathUserInfo(fetchSubmit, result.id, values)

    const [errors, setErrors] = useState({
        name: false,
        mobileNumber: false,
        email: false,
    })
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
    useEffect(() => {
        if (!loading) {
            setValues({
                ...values,
                name: result.name_and_last_name,
                mobileNumber: result.mobile_number,
                email: result.email,
                state: result.state
                    ? {
                        name: result.state_name,
                        id: result.state
                    }
                    : {
                        name: '',
                        id: null,
                    },
                city: result.city
                    ? {
                        name: result.city_name,
                        id: result.city,
                    }
                    : {
                        name: '',
                        id: null,
                    }

            })
            setFetchCities(true)
        }
    }, [loading, result])
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!values.email.includes('@')) {
            setErrors({
                ...errors,
                email: true,
            })
            setTimeout(
                () => setErrors({...errors, email: false})
                , 5000)
        } else {
            setFetchSubmit(true)
        }
    }

    return (
        <>
            <form className={classes.container} onSubmit={handleSubmit}>
                <Title title={'ویرایش اطلاعات کاربری'}/>
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
                                disabled
                                dir={'ltr'}
                                error={errors.mobileNumber}
                                value={toFaDigit((values.mobileNumber).toString())}
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
                                value={values.state.name ? values.state.name : ''}
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
                    </Grid>
                </Card>
                <div style={{
                    width: size.width >= 600 ? '33.33%' : '100%',
                    float: 'left',
                    marginTop: 24,
                    position: 'relative'
                }}>
                    {updateLoading && <CircularProgress size={38} className={classes.buttonProgress}/>}
                    <Button
                        disabled={updateLoading}
                        type={'submit'}
                        fullWidth
                        className={classes.editButton}
                        variant={'contained'}
                    >
                        ویرایش
                    </Button>
                </div>
            </form>
        </>
    )

}

export default UserInfoPage