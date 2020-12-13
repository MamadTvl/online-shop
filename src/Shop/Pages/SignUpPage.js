import React, {useState} from "react";
import {Button, Card} from "@material-ui/core";
import Title from "../Components/Public/Title";
import Step from "../Components/SignUp/Step"
import FirstStep from "../Components/SignUp/FirstStep";
import ShopLayout from "../Layouts/ShopLayout";
import {useHistory} from 'react-router-dom'
import {useSignUpPageStyle} from "./Styles/useSignUpPageStyle";
import SecondStep from "../Components/SignUp/SecondStep";
import useWindowSize from "../../utills/Hooks/useWindowSize";

function SignUpPage() {
    const classes = useSignUpPageStyle()
    const size = useWindowSize()
    const [step, setStep] = useState(0)
    const history = useHistory()
    const [values, setValues] = useState({
        mobileNumber: '',
        code: '',
        timer: 2,
        information: {
            name: '',
            email: '',
            state: '',
            city: '',
            password: ''
        }
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
                return (
                    <Button
                        // disabled={loading}
                        type={'submit'}
                        fullWidth
                        className={classes.signUpButton}
                        variant={'contained'}
                    >
                        ارسال کد
                    </Button>
                )
            case 1:
                return (
                    <Button
                        // disabled={loading}
                        type={'submit'}
                        fullWidth
                        className={classes.signUpButton}
                        variant={'contained'}
                    >
                        تایید کد
                    </Button>
                )
            case 2:
                return (
                    <Button>

                    </Button>
                )
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
        <ShopLayout>
            <form onSubmit={handleSubmit} className={classes.container}>
                <Title title={setTitle(step)}/>
                <Card>
                    <Step index={0} step={step}>
                        <FirstStep
                            values={values}
                            setValues={setValues}
                            errors={errors}
                        />
                    </Step>
                    <Step style={{}} index={1} step={step}>
                        <SecondStep
                            expiryTimestamp={time}
                            values={values}
                            setValues={setValues}
                            errors={errors}
                            setStep={setStep}
                        />
                    </Step>
                    <Step style={{}} index={2} step={step}>
                        <div>
                            helllllo
                        </div>
                    </Step>
                </Card>
                <div style={{width: size.width >= 600 ? '33.33%' : '100%', float: 'left', marginTop: 24}}>
                    {setButton(step)}
                </div>
            </form>
        </ShopLayout>
    )

}

export default SignUpPage