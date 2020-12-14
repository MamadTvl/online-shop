import React, {useState} from "react";
import ShopLayout from "../Layouts/ShopLayout";
import {Button, Card, Grid, TextField, Typography} from "@material-ui/core";
import {useUserInfoPageStyle} from "./Styles/useUserInfoPageStyle";
import Title from "../Components/Public/Title";
import useWindowSize from "../../utills/Hooks/useWindowSize";


function UserInfoPage() {
    const classes = useUserInfoPageStyle()
    const size = useWindowSize()
    const [values, setValues] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        state: '',
        city: '',
    })

    const [errors, setErrors] = useState({
        name: false,
        mobileNumber: false,
        email: false,
    })

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }

    return (
        <ShopLayout>
            <form className={classes.container}>
                <Title title={'ویرایش اطلاعات کاربری'}/>
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
                    </Grid>
                </Card>
                <div style={{width: size.width >= 600 ? '33.33%' : '100%', float: 'left', marginTop: 24}}>
                    <Button
                        // disabled={loading}
                        type={'submit'}
                        fullWidth
                        className={classes.editButton}
                        variant={'contained'}
                    >
                        ویرایش
                    </Button>
                </div>
            </form>
        </ShopLayout>
    )

}

export default UserInfoPage