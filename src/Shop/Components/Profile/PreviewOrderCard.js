import React from "react";
import {Card, CardActionArea, Typography} from "@material-ui/core";
import PropType from 'prop-types'
import {separateDigit} from '../../../utills/ToFaDigit'
import {usePreviewOrderStyle} from "./Styles/usePreviewOrderStyle";

function PreviewOrderCard(props) {
    const classes = usePreviewOrderStyle()
    const {order} = props
    const titles = ['کد سفارش', 'تاریخ ثبت‌ سفارش', 'وضعیت']

    const setData = (index) => {
        switch (index) {
            case 0:
                return order.code
            case 1:
                return order.date
            case 2:
                return order.status
            default:
                break
        }
    }
    const setStatusColor = (status) => {
        if (status === 'درحال بررسی') {
            return {
                color: '#FF9E02'
            }
        } else {
            return {
                color: '#0AD071'
            }
        }

    }
    return (
        <Card style={{marginBottom: 12}}>
            <CardActionArea className={classes.card}>
                <div className={classes.right}>
                    {
                        titles.map((title, index) => (
                            <div key={index} className={classes.dataContainer}>
                                <Typography className={classes.title}>{title}</Typography>
                                {
                                    index !== 2
                                        ? <Typography className={classes.data}>{setData(index)}</Typography>
                                        : <Typography className={classes.data}
                                                      style={setStatusColor(setData(index))}>{setData(index)}</Typography>

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
            </CardActionArea>
        </Card>
    )
}

PreviewOrderCard.propTypes = {
    order: PropType.object.isRequired
}

export default PreviewOrderCard