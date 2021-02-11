import React, {useEffect, useState} from "react";
import {Button, Card, Snackbar} from "@material-ui/core";
import Title from "../Components/Public/Title";
import Step from "../Components/Public/Step"
import FirstStep from "../Components/SignUp/FirstStep";
import {useHistory} from 'react-router-dom'
import {useSignUpPageStyle} from "./Styles/useSignUpPageStyle";
import SecondStep from "../Components/SignUp/SecondStep";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import ThirdStep from "../Components/SignUp/ThirdStep";
import useSendSms from "../PostData/useSendSms";
import {Alert} from "@material-ui/lab";
import useValidation from "../PostData/useValidation";
import useSignUp from "../PostData/useSignUp";

function SignUpPage() {
    document.title = 'ثبت نام'
    const classes = useSignUpPageStyle()
    const size = useWindowSize()
    const [step, setStep] = useState(0)
    const history = useHistory()
    const [values, setValues] = useState({
        mobileNumber: '',
        code: '',
        timer: 2,
        name: '',
        email: '',
        state: {
            name: '',
            id: null,
        },
        city: {
            name: '',
            id: null,
        },
        password: ''

    })
    const [errors, setErrors] = useState({
        mobileNumber: false,
        code: false,
        name: false,
        email: false,
        password: false,
        state: false,
        city: false,
    })
    const time = new Date();
    time.setSeconds(time.getSeconds() + 120);
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [alertMessage, setAlertMessage] = useState('به نظر میرسد که مشکلی پیش آمده لطفا دوباره تلاش کنید')
    const [fetchSms, setFetchSms] = useState(false)
    const [fetchValidation, setFetchValidation] = useState(false)
    const [fetchSignup, setFetchSignup] = useState(false)

    const [validationResult, validationLoading] = useValidation(fetchValidation, values)
    const [sendSmsLoading, sendSmsResult] = useSendSms(fetchSms, values.mobileNumber)
    const [signupLoading, signupResult] = useSignUp(fetchSignup, values)

    const setTitle = (step) => {
        switch (step) {
            case 0:
                return 'ثبت‌نام حساب کاربری'
            case 1:
                return 'تایید کد کاربری'
            case 2:
                return 'تکمیل اطلاعات کاربری'
            default:
                break
        }

    }
    const setButton = (step) => {
        switch (step) {
            case 0:
                return 'ارسال کد'
            case 1:
                return 'تایید کد'
            case 2:
                return 'ثبت‌نام'
            default:
                break
        }
    }

    useEffect(() => {
        if (!sendSmsLoading && fetchSms){
            if (sendSmsResult === "OK"){
                setStep(1)
            }
            else {
                setErrors({...errors, mobileNumber: true})
                setTimeout(
                    () => setErrors({...errors, mobileNumber: false})
                    , 1000)
                setOpenSnackBar(true)
                setAlertMessage('این شماره موبایل قبلا ثبت شده است')
            }
            setFetchSms(false)
        }
    }, [sendSmsLoading, sendSmsResult])

    useEffect(() => {
        if (!validationLoading && fetchValidation){
            if (validationResult){
                setStep(2)
            } else {
                setOpenSnackBar(true)
                setAlertMessage('کد اشتباه است')
            }
            setFetchValidation(false)
        }
    }, [validationLoading, validationResult])

    useEffect(() => {
        if (!signupLoading && fetchSignup){
            if (signupResult){
                history.push('/login')
            }else {
                setOpenSnackBar(true)
                setAlertMessage('مشکلی پیش آمده لطفا دوباره تلاش کنید')
            }
        }
    }, [signupLoading, signupResult])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (step === 0) {
            if (values.mobileNumber.length === 11){
                setFetchSms(true)
            }
            else {
                setErrors({...errors, mobileNumber: true})
                setTimeout(
                    () => setErrors({...errors, mobileNumber: false})
                    , 1000)
            }
        } else if (step === 1) {
            setFetchValidation(true)
        } else if (step === 2) {
            if (values.name === '') {
                setErrors({...errors, name: true})
                setTimeout(
                    () => setErrors({...errors, name: false})
                    , 5000)
            } else if (!values.email.includes('@')) {
                setErrors({...errors, email: true})
                setTimeout(
                    () => setErrors({...errors, email: false})
                    , 5000)

            } else if (values.state.name === ''){
                setErrors({...errors, state: true})
                setTimeout(
                    () => setErrors({...errors, state: false})
                    , 5000)
            } else if(values.city.name === ''){
                setErrors({...errors, city: true})
                setTimeout(
                    () => setErrors({...errors, city: false})
                    , 5000)
            } else if (values.password.length < 6) {
                setErrors({...errors, password: true})
                setTimeout(
                    () => setErrors({...errors, password: false})
                    , 5000)
            }else{
                setFetchSignup(true)
            }

        }
    }

    return (
        <>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={() => setOpenSnackBar(false)}>
                <Alert
                    dir={'ltr'}
                    variant={'filled'}
                    style={{fontFamily: 'Shabnam'}}
                    onClose={() => setOpenSnackBar(false)}
                    severity={"error"}
                >
                    {alertMessage}
                </Alert>
            </Snackbar>
            <form onSubmit={handleSubmit} className={classes.container}>
                <Title title={setTitle(step)}/>
                <Card>
                    <Step index={0} step={step} stepClass={classes.step}>
                        <FirstStep
                            values={values}
                            setValues={setValues}
                            errors={errors}
                        />
                    </Step>
                    <Step index={1} step={step} stepClass={classes.step}>
                        <SecondStep
                            expiryTimestamp={time}
                            values={values}
                            setValues={setValues}
                            errors={errors}
                            setStep={setStep}
                            setFetchSms={setFetchSms}
                        />
                    </Step>
                    <Step index={2} step={step} stepClass={classes.step}>
                        <ThirdStep
                            values={values}
                            setValues={setValues}
                            errors={errors}
                        />
                    </Step>
                </Card>
                <div style={{width: size.width >= 600 ? '33.33%' : '100%', float: 'left', marginTop: 24}}>
                    <Button
                        disabled={sendSmsLoading || signupLoading}
                        type={'submit'}
                        fullWidth
                        className={classes.signUpButton}
                        variant={'contained'}
                    >
                        {setButton(step)}
                    </Button>
                </div>
            </form>
        </>
    )

}

export default SignUpPage
