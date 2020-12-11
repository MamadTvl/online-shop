import React, {useState} from "react";
import ShopLayout from "../Layouts/ShopLayout";
import {useLoginPageStyle} from "./Styles/useLoginPageStyle";
import {Button, Card, CardContent, CardMedia, IconButton, InputAdornment, Typography} from "@material-ui/core";
import loginImage from '../../img/Login.png'
import {StyledTextField} from "../Components/Public/StyledTextField";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ItemLink from "../../Routes/Link/ItemLink";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Title from "../Components/Public/Title";

function LoginPage() {
    const classes = useLoginPageStyle()
    const [values, setValues] = useState({
        mobileNumber: '',
        password: '',
        showPassword: false
    })
    const handleChange = (props) => (event) => {
        setValues(prevState => {
            return {...prevState, [props]: event.target.value}
        })
    }
    const handleClickShowPassword = () => {
        setValues(prevState => {
            return {...prevState, showPassword: !prevState.showPassword}
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <ShopLayout>
            <div className={classes.container}>
                <Title title={'ورود به حساب کاربری'}/>
                <Card className={classes.card}>
                    <CardMedia
                        image={loginImage}
                        className={classes.image}
                    />
                    <CardContent classes={{root: classes.contentRoot}} className={classes.cardContent}>
                        <div className={classes.mobileContainer}>
                            <Typography style={{marginBottom: '12px'}} className={classes.label}>شماره موبایل</Typography>
                            <StyledTextField
                                dir={'ltr'}
                                value={values.mobileNumber}
                                onChange={handleChange('mobileNumber')}
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        root: classes.root,
                                    }
                                }}
                                fullWidth
                                variant="outlined"
                            />
                        </div>
                        <div className={classes.passwordContainer}>
                            <div className={classes.passwordLabels}>
                                <Typography className={classes.label}>رمز عبور</Typography>
                                <ItemLink style={{margin: 'auto 0'}} to={'/profile/forget-password'}>
                                    <Typography className={classes.forgetLabel}>رمزعبور خود را فراموش
                                        کرده‌اید!؟</Typography>
                                </ItemLink>
                            </div>
                            <StyledTextField
                                dir={'ltr'}
                                value={values.password}
                                onChange={handleChange('password')}
                                type={values.showPassword ? 'text' : 'password'}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                        </InputAdornment>,
                                    classes: {
                                        input: classes.input,
                                    }
                                }}
                                fullWidth
                                variant="outlined"
                            />

                        </div>
                    </CardContent>
                </Card>
                <div className={classes.action}>
                    <div className={classes.signupContainer}>
                        <ItemLink style={{display: 'flex'}} to={'/profile/signup'}>
                            <IconButton className={classes.signupButton}>
                                <AddCircleOutlineIcon/>
                            </IconButton>
                            <Typography style={{margin: 'auto'}} className={classes.label}>ساخت حساب‌کاربری جدید</Typography>
                        </ItemLink>
                    </div>
                    <Button
                        className={classes.signInButton}
                        variant={'contained'}
                    >


                        ورود</Button>
                </div>
            </div>
        </ShopLayout>
    )
}

export default LoginPage