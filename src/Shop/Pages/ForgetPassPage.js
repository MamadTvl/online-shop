import React, {useState} from "react";
import {useForgetPassStyle} from "./Styles/useForgetPassPageStyle";
import ShopLayout from "../Layouts/ShopLayout";
import Title from "../Components/Public/Title";
import {Button, Card} from "@material-ui/core";
import Step from "../Components/Public/Step";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import {useHistory} from "react-router-dom";
import FirstStep from "../Components/ForgetPass/FirstStep";
import SecondStep from "../Components/SignUp/SecondStep";
import ThirdStep from "../Components/ForgetPass/ThirdStep";


function ForgetPassPage() {
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
                        className={classes.forgetButton}
                        variant={'contained'}
                    >
                        {setButton(step)}
                    </Button>
                </div>
            </form>
        </ShopLayout>
    )


}

export default ForgetPassPage