import React from "react";
import {useTimer} from 'react-timer-hook';
import {Button, SvgIcon, TextField, Typography} from "@material-ui/core";
import {toFaDigit} from "../../../utills/ToFaDigit";
import {useSignUpPageStyle} from "../../Pages/Styles/useSignUpPageStyle";
import PropType from 'prop-types'

function SecondStep(props) {
    const {expiryTimestamp, values, setValues, errors, setStep} = props
    const classes = useSignUpPageStyle()
    const {
        seconds,
        minutes,
        restart,
    } = useTimer({expiryTimestamp})

    const handleChange = (code) => (event) => {
        setValues({...values, [code]: event.target.value})
    }

    return (
        <>
            <div className={classes.timerContainer}>
                <div className={classes.timer_div}>
                    <Typography
                        className={classes.timer}
                        component={'span'}
                    >
                        {toFaDigit(`0${minutes}:${seconds > 10 ? seconds : `0${seconds}`}`)}
                    </Typography>
                    <Typography className={classes.seconds} component={'span'}>ثانیه</Typography>
                </div>
                <Typography className={classes.timerLabel}>تا ارسال دوباره کد تایید</Typography>
            </div>
            <div className={classes.timerContent}>
                <Typography className={classes.timerTitle}>کد پنج رقمی تایید به شماره ۰۹۱۲۶۶۸۷۴۷۳ ارسال شده
                    است.</Typography>
                <div className={classes.codeContainer}>
                    <Typography className={classes.label}>کد تایید</Typography>
                    <TextField
                        dir={'ltr'}
                        error={errors.code}
                        placeholder={'کد تایید ارسالی'}
                        value={toFaDigit(values.code)}
                        onChange={handleChange('code')}
                        InputProps={{
                            classes: {
                                input: classes.input,
                                root: classes.textFieldRoot,
                            }
                        }}
                        fullWidth
                        variant="outlined"
                    />
                </div>
                <div className={classes.timerAction}>
                    <Button
                        className={classes.timerButton}
                        dir={'ltr'}
                        onClick={() => {
                            const time = new Date();
                            time.setSeconds(time.getSeconds() + 120);
                            restart(time)
                        }}
                        variant={'text'}
                        endIcon={
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" width="18.12" height="14.65"
                                     viewBox="0 0 18.12 14.65">
                                <g id="refresh-cw" transform="translate(0.06 -2.221)">
                                    <path id="Path_30094" data-name="Path 30094" d="M21.364,4V8.364H17"
                                          transform="translate(-4.364 -0.272)" fill="none" stroke="#f16522"
                                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    <path id="Path_30095" data-name="Path 30095" d="M1,18.364V14H5.364"
                                          transform="translate(0 -2.999)" fill="none" stroke="#f16522"
                                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    <path id="Path_30096" data-name="Path 30096"
                                          d="M2.825,7.364a6.545,6.545,0,0,1,10.8-2.444L17,8.092M1,11l3.375,3.171a6.545,6.545,0,0,0,10.8-2.444"
                                          transform="translate(0)" fill="none" stroke="#f16522" strokeLinecap="round"
                                          strokeLinejoin="round" strokeWidth="1.5"/>
                                </g>
                            </SvgIcon>

                        }
                    >
                        ارسال دوباره
                    </Button>
                    <Button
                        className={classes.timerButton}
                        dir={'ltr'}
                        variant={'text'}
                        onClick={() => setStep(0)}
                        endIcon={
                            <SvgIcon xmlns="http://www.w3.org/2000/svg" width="17.648" height="17.5"
                                     viewBox="0 0 17.648 17.5">
                                <g id="edit" transform="translate(-1.25 -1.129)">
                                    <path id="Path_30097" data-name="Path 30097"
                                          d="M9.157,4H3.59A1.59,1.59,0,0,0,2,5.59V16.723a1.59,1.59,0,0,0,1.59,1.59H14.723a1.59,1.59,0,0,0,1.59-1.59V11.157"
                                          transform="translate(0 -0.434)" fill="none" stroke="#f16522"
                                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                    <path id="Path_30098" data-name="Path 30098"
                                          d="M16.349,2.373a1.687,1.687,0,0,1,2.386,2.386l-7.554,7.554L8,13.108l.8-3.181Z"
                                          transform="translate(-1.229)" fill="none" stroke="#f16522"
                                          strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                                </g>
                            </SvgIcon>

                        }
                    >
                        ویرایش شماره
                    </Button>
                </div>

            </div>
        </>
    )

}

SecondStep.propTypes = {
    expiryTimestamp: PropType.number.isRequired,
    values: PropType.object.isRequired,
    setValues: PropType.func.isRequired,
    errors: PropType.object.isRequired,
    setStep: PropType.func.isRequired,
}

export default SecondStep