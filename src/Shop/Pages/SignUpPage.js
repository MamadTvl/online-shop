import React, {useState} from "react";
import {Button, Card} from "@material-ui/core";
import Title from "../Components/Public/Title";
import Step from "../Components/SignUp/Step"
import FirstStep from "../Components/SignUp/FirstStep";
import ShopLayout from "../Layouts/ShopLayout";
import {useSignUpPageStyle} from "./Styles/useSignUpPageStyle";

function SignUpPage() {
    const classes = useSignUpPageStyle()
    const [step, setStep] = useState(0)
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
                    <Button>

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

    return (
        <ShopLayout>
            <form className={classes.container}>
                <Title title={setTitle(step)}/>
                <Card>
                    <Step style={{display: 'flex', padding: 32, alignItems: 'center'}} index={0} step={step}>
                        <FirstStep/>
                    </Step>
                    <Step style={{}} index={1} step={step}>

                    </Step>
                    <Step style={{}} index={2} step={step}>

                    </Step>
                </Card>
                <div style={{width: '33.33%', float: 'left', marginTop: 24}}>
                    {setButton(step)}
                </div>
            </form>
        </ShopLayout>
    )

}

export default SignUpPage