import React, {useState} from "react";
import {Button, Card} from "@material-ui/core";
import Title from "../Components/Public/Title";
import Step from "../Components/Public/Step"
import FirstStep from "../Components/SignUp/FirstStep";
import ShopLayout from "../Layouts/ShopLayout";
import {useHistory} from 'react-router-dom'
import {useSignUpPageStyle} from "./Styles/useSignUpPageStyle";
import SecondStep from "../Components/SignUp/SecondStep";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import ThirdStep from "../Components/SignUp/ThirdStep";

function SignUpPage() {
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
        state: '',
        city: '',
        password: ''

    })
    const [errors, setErrors] = useState({
        mobileNumber: false,
        code: false,
        name: false,
        email: false,
        password: false,
    })
    const time = new Date();
    time.setSeconds(time.getSeconds() + 120);

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

    const handleSubmit = (event) => {
        event.preventDefault()
        if (step === 0) {
            if (values.mobileNumber.length === 11)
                setStep(1)
            else {
                setErrors({...errors, mobileNumber: true})
                setTimeout(
                    () => setErrors({...errors, mobileNumber: false})
                    , 1000)
            }
        } else if (step === 1) {
            setStep(2)

        } else {
            history.push('/')
        }
    }

    return (
        <>
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
                        // disabled={loading}
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