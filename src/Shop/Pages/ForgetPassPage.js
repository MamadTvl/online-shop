import React, {useEffect, useState} from "react";
import {useForgetPassStyle} from "./Styles/useForgetPassPageStyle";
import Title from "../Components/Public/Title";
import {Button, Card, Snackbar} from "@material-ui/core";
import Step from "../Components/Public/Step";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import {useHistory} from "react-router-dom";
import FirstStep from "../Components/ForgetPass/FirstStep";
import SecondStep from "../Components/SignUp/SecondStep";
import ThirdStep from "../Components/ForgetPass/ThirdStep";
import useValidation from "../PostData/useValidation";
import useRestorePassword from "../PostData/useRestorePassword";
import useSendResetSms from "../PostData/useSendResetSms";
import {Alert} from "@material-ui/lab";


function ForgetPassPage() {
    document.title = 'فراموشی رمز عبور'
    const classes = useForgetPassStyle()
    const [step, setStep] = useState(0)
    const size = useWindowSize()
    const history = useHistory()
    const [values, setValues] = useState({
        mobileNumber: '',
        code: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        mobileNumber: false,
        code: false,
        password: false,
    })
    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [alertMessage, setAlertMessage] = useState('به نظر میرسد که مشکلی پیش آمده لطفا دوباره تلاش کنید')

    const [fetchSms, setFetchSms] = useState(false)
    const [fetchValidation, setFetchValidation] = useState(false)
    const [fetchRestorePassword, setFetchRestorePassword] = useState(false)

    const [sendSmsLoading, sendSmsResult] = useSendResetSms(fetchSms, values.mobileNumber)
    const [validationLoading, validationResult] = useValidation(fetchValidation, values)
    const [restoreLoading ,restoreResult] = useRestorePassword(fetchRestorePassword, values)

    const time = new Date();
    time.setSeconds(time.getSeconds() + 120);

    const setTitle = (step) => {
        if (step === 0)
            return 'فراموشی رمز عبور'
        else if (step === 1)
            return 'تایید کد کاربری'
        else if (step === 2)
            return 'تغییر رمزعبور'
    }
    const setButton = (step) => {
        if (step === 0)
            return 'ارسال کد'
        else if (step === 1)
            return 'تایید کد'
        else if (step === 2)
            return 'تغییر رمزعبور'
    }
    useEffect(() => {
        if (!sendSmsLoading && fetchSms) {
            if(sendSmsResult){
                setStep(1)
            } else {
                setErrors({...errors, mobileNumber: true})
                setTimeout(
                    () => setErrors({...errors, mobileNumber: false})
                    , 1000)
                setOpenSnackBar(true)
                setAlertMessage('حسابی ثبت نشده است، دوباره تلاش کنید')
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
        if (!restoreLoading && fetchRestorePassword){
            if (restoreResult){
                history.push('/login')
            }else {
                setOpenSnackBar(true)
                setAlertMessage('مشکلی پیش آمده لطفا دوباره تلاش کنید')
            }
            setFetchRestorePassword(false)
        }
    }, [restoreLoading ,restoreResult])

    const handleSubmit = (event) => {
        event.preventDefault()
        if (step === 0) {
            if (values.mobileNumber.length === 11)
                setFetchSms(true)
            else {
                setErrors({...errors, mobileNumber: true})
                setTimeout(
                    () => setErrors({...errors, mobileNumber: false})
                    , 1000)
            }
        } else if (step === 1) {
            setFetchValidation(true)
        } else {
            if (values.password.length < 6) {
                setErrors({...errors, password: true})
                setTimeout(
                    () => setErrors({...errors, password: false})
                    , 5000)
            } else {
                setFetchRestorePassword(true)
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
                        disabled={sendSmsLoading || restoreLoading}
                        type={'submit'}
                        fullWidth
                        className={classes.forgetButton}
                        variant={'contained'}
                    >
                        {setButton(step)}
                    </Button>
                </div>
            </form>
        </>
    )


}

export default ForgetPassPage
