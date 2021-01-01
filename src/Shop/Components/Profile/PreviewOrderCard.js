import React from "react";
import {Card, Typography} from "@material-ui/core";
import PropType from 'prop-types'
import {separateDigit, toFaDigit} from '../../../utills/ToFaDigit'
import {usePreviewOrderStyle} from "./Styles/usePreviewOrderStyle";
import moment from "jalali-moment";

function PreviewOrderCard(props) {
    const classes = usePreviewOrderStyle()
    const {order} = props
    const titles = ['کد سفارش', 'تاریخ ثبت‌ سفارش', 'وضعیت']

    const setData = (index) => {
        switch (index) {
            case 0:
                return toFaDigit(order.basket_code)
            case 1:
                return toFaDigit(moment.unix(order.create_date).format("jYYYY/jM/jD"))
            case 2:
                return order.status
            default:
                break
        }
    }
    const setStatusText = (status) => {
        if (status === '1') {
            return 'در حال بررسی'
        } else if ('2') {
            return 'تحویل داده شده'
        } else if ('3') {
            return 'لغو شده'
        }
    }
    const setStatusColor = (status) => {
        if (status === '1') {
            return {color: '#FF9E02'}
        } else if ('2') {
            return {color: '#0AD071'}
        } else if ('3') {
            return {color: '#f12222'}
        }

    }
    return (
        <Card style={{marginBottom: 12}}>
            <div className={classes.card}>
                <div className={classes.right}>
                    {
                        titles.map((title, index) => (
                            <div key={index} className={classes.dataContainer}>
                                <Typography className={classes.title}>{title}</Typography>
                                {
                                    index !== 2
                                        ? <Typography
                                            className={classes.data}
                                        >
                                            {setData(index)}
                                        </Typography>
                                        : <Typography
                                            className={classes.data}
                                            style={setStatusColor(setData(index))}
                                        >
                                            {setStatusText(setData(index))}
                                        </Typography>

                                }
                            </div>
                        ))
                    }
                </div>
                <div className={classes.left}>
                    <div className={classes.dataContainer}>
                        <Typography className={classes.title}>هزینه سفارش</Typography>
                        <Typography className={classes.data}>{`${separateDigit(order.cost)} تومان`}</Typography>
                    </div>
                </div>
            </div>
        </Card>
    )
}

PreviewOrderCard.propTypes = {
    order: PropType.object.isRequired
}

export default PreviewOrderCard