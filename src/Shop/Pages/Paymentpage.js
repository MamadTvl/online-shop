import React from "react";
import {usePaymentPageStyle} from "./Styles/usePaymentpageStyle";
import {SvgIcon, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom'
import {toFaDigit} from "../../utills/ToFaDigit";
import {useLocation} from 'react-router-dom'

function PaymentPage() {
    const classes = usePaymentPageStyle()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const status = params.get('status')
    const msg = params.get('msg')
    const track_id = params.get('track_id')

    const setIcon = () => {
        if (status) {
            return (
                <SvgIcon className={classes.icon} xmlns="http://www.w3.org/2000/svg" width="161.926" height="163.532"
                         viewBox="0 0 161.926 163.532">
                    <g id="Group_2544" data-name="Group 2544" transform="translate(-10731.074 118.532)">
                        <path id="Path_2559" data-name="Path 2559" d="M2256,424a41,41,0,1,0-41-41A41,41,0,0,0,2256,424Z"
                              transform="translate(8592 -383)" fill="none" stroke="#ea4141" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                        <path id="Path_2560" data-name="Path 2560" d="M2243,370l25.46,25.456"
                              transform="translate(8592 -383)" fill="none" stroke="#ea4141" strokeLinecap="round"
                              strokeWidth="8"/>
                        <path id="Path_2561" data-name="Path 2561" d="M2243,395.456,2268.46,370"
                              transform="translate(8592 -383)" fill="none" stroke="#ea4141" strokeLinecap="round"
                              strokeWidth="8"/>
                        <path id="Path_2562" data-name="Path 2562"
                              d="M2191.81,382.875h-24.33a9.842,9.842,0,0,1-9.45-7.763l-14.61-61.5a10.143,10.143,0,0,1,9.45-12.737h124.01a10.138,10.138,0,0,1,9.45,12.737l-2.05,8.583"
                              transform="translate(8592 -383)" fill="none" stroke="#444" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                        <path id="Path_2563" data-name="Path 2563" d="M2163.62,300.875l30.76-30.75"
                              transform="translate(8592 -383)" fill="none" stroke="#444" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                        <path id="Path_2564" data-name="Path 2564" d="M2266.13,300.875l-30.75-30.737"
                              transform="translate(8592 -383)" fill="none" stroke="#444" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                    </g>
                </SvgIcon>
            )
        } else {

            return (
                <SvgIcon className={classes.icon} xmlns="http://www.w3.org/2000/svg" width="161.635" height="163.242"
                         viewBox="0 0 161.635 163.242">
                    <g id="Group_2546" data-name="Group 2546" transform="translate(-9231.075 118.532)">
                        <path id="Path_2551" data-name="Path 2551"
                              d="M755.71,423.71a41,41,0,1,0-41-41A41,41,0,0,0,755.71,423.71Z"
                              transform="translate(8592 -383)" fill="none" stroke="#0ad071" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                        <path id="Path_2552" data-name="Path 2552"
                              d="M691.812,382.875H667.479a9.856,9.856,0,0,1-9.451-7.763l-14.609-61.5a10.139,10.139,0,0,1,9.45-12.737H776.881a10.146,10.146,0,0,1,9.45,12.737l-2.05,8.583"
                              transform="translate(8592 -383)" fill="none" stroke="#444" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                        <path id="Path_2553" data-name="Path 2553"
                              d="M775.023,368.161,765.1,381.4l-9.926,13.236a5.129,5.129,0,0,1-7.728.546l-10.25-10.25"
                              transform="translate(8592 -383)" fill="none" stroke="#0ad071" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                        <path id="Path_2554" data-name="Path 2554" d="M663.625,300.875l30.75-30.75"
                              transform="translate(8592 -383)" fill="none" stroke="#444" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                        <path id="Path_2555" data-name="Path 2555" d="M766.125,300.875l-30.75-30.737"
                              transform="translate(8592 -383)" fill="none" stroke="#444" strokeLinecap="round"
                              strokeLinejoin="round" strokeWidth="8"/>
                    </g>
                </SvgIcon>

            )

        }
    }

    return (
        <div className={classes.container}>
            {
                setIcon()
            }

            <Typography
                component={'h1'}
                className={classes.message}
            >
                {
                    `${status
                        ? msg
                        : 'سفارش شما با موفقیت ثبت شد.'}`
                }
            </Typography>
            <Typography
                component={'h5'}
                className={classes.code}
            >
            {`کد پیگیری ${toFaDigit(track_id)}`}
            </Typography>
            <Typography
                component={'h4'}
                className={classes.describe}
            >
                {
                    `${status ? 
                        'در صورت کسر وجه از حساب شما؛ تا ۷۲ ساعت بعد به حسابتان بازگشت خواهد خورد.'
                        : ''
                    }`   
                }
            </Typography>
            <Link color={'initial'} className={classes.link} to={'/'}>
                <Typography className={classes.backToHome}>بازگشت به خانه</Typography>
            </Link>

        </div>
    )

}

export default PaymentPage
