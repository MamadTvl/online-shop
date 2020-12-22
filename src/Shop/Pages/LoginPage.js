import React, {useState} from "react";
import ShopLayout from "../Layouts/ShopLayout";
import {useLoginPageStyle} from "./Styles/useLoginPageStyle";
import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@material-ui/core";
import loginImage from '../../img/Login.png'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ItemLink from "../../Routes/Link/ItemLink";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Title from "../Components/Public/Title";
import useAxios from "axios-hooks";
import {useHistory} from 'react-router-dom'
import useWindowSize from "../../utills/Hooks/useWindowSize";
import {useAuth} from "../../utills/Auth";

function LoginPage() {
    const classes = useLoginPageStyle()
    const history = useHistory()
    const baseUrl = "https://api.didartshop.ir"
    const [values, setValues] = useState({
        mobileNumber: '',
        password: '',
        showPassword: false
    })
    const [error, setError] = useState(false)
    const [{loading}, signIn] = useAxios({
        url: `${baseUrl}/user/sign_in`,
        method: 'POST'
    }, {manual: true})
    const auth = useAuth();
    const size = useWindowSize()

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

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const response = await signIn({
                data: {
                    "mobile_number": values.mobileNumber,
                    "password": values.password,
                }
            })
            if (response.data.status === "success") {
                localStorage.setItem("Authorization", response.data.data.token)
                history.go(0)
            } else {
                setError(true)
            }
        } catch (err) {
            history.go(0)
        }
    }

    return (
        <>
            <form onSubmit={handleLogin} className={classes.container}>
                <Title title={'ورود به حساب کاربری'}/>
                <Card className={classes.card}>
                    <div className={classes.imageContainer}>
                        <img alt={'login'} src={loginImage} className={classes.image}/>
                    </div>
                    <CardContent classes={{root: classes.contentRoot}} className={classes.cardContent}>
                        <div className={classes.mobileContainer}>
                            <Typography style={{marginBottom: '12px'}} className={classes.label}>شماره
                                موبایل</Typography>
                            <TextField
                                dir={'ltr'}
                                error={error}
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
                                <ItemLink style={{margin: 'auto 0'}} to={'/forget-password'}>
                                    <Typography className={classes.forgetLabel}>رمزعبور خود را فراموش
                                        کرده‌اید!؟</Typography>
                                </ItemLink>
                            </div>
                            <TextField
                                error={error}
                                dir={'ltr'}
                                autocompelete={'current-password'}
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
                            <ItemLink style={{margin: 'auto 0'}} to={'/forget-password'}>
                                <Typography className={classes.forgetMobileLabel}>رمزعبور خود را فراموش
                                    کرده‌اید!؟</Typography>
                            </ItemLink>
                        </div>
                        {
                            size.width < 600 &&
                            <div className={classes.action}>
                                <ItemLink style={{alignSelf: 'flex-start', marginTop: 24,}} to={'/signup'}>
                                    <Button
                                        className={classes.signupButton}
                                        dir={'ltr'}
                                        variant={'text'}
                                        endIcon={
                                            <AddCircleOutlineIcon color={'primary'}
                                                                  classes={{colorPrimary: classes.iconColor}}/>
                                        }
                                    >
                                        ساخت حساب‌کاربری جدید
                                    </Button>
                                </ItemLink>
                                <div style={{position: 'relative', width: '100%'}}>
                                    <Button
                                        fullWidth
                                        disabled={loading}
                                        type={'submit'}
                                        className={classes.signInButton}
                                        variant={'contained'}
                                    >
                                        ورود</Button>
                                    {loading && <CircularProgress size={38} className={classes.buttonProgress}/>}
                                </div>
                            </div>
                        }
                    </CardContent>

                </Card>

                {
                    size.width >= 600 &&
                    <div className={classes.action}>
                        <ItemLink to={'/signup'}>
                            <Button
                                className={classes.signupButton}
                                dir={'ltr'}
                                variant={'text'}
                                endIcon={
                                    <AddCircleOutlineIcon color={'primary'}
                                                          classes={{colorPrimary: classes.iconColor}}/>
                                }
                            >
                                ساخت حساب‌کاربری جدید
                            </Button>
                        </ItemLink>
                        <div style={{position: 'relative'}}>
                            <Button
                                disabled={loading}
                                type={'submit'}
                                className={classes.signInButton}
                                variant={'contained'}
                            >
                                ورود</Button>
                            {loading && <CircularProgress size={38} className={classes.buttonProgress}/>}
                        </div>
                    </div>
                }
            </form>
        </>
    )
}

export default LoginPage