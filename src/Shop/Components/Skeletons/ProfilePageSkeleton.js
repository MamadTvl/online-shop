import React from 'react'
import Title from "../Public/Title";
import {Card, Typography} from "@material-ui/core";
import {useProfilePageStyle} from "../../Pages/Styles/useProfilePageStyle";
import {Skeleton} from "@material-ui/lab";


function ProfilePageSkeleton() {
    const classes = useProfilePageStyle()
    return (
        <>
            <div className={classes.container}>
                <Title title={'پروفایل کاربری'}/>
                <Card className={classes.profileCard}>
                    <div className={classes.profileContent}>
                        <Skeleton className={classes.image} variant={'circle'}/>
                        <div className={classes.profileDetail}>
                            <Skeleton width={100} component={'h3'} variant={'text'}/>
                            <Skeleton width={100} component={'h3'} variant={'text'}/>
                        </div>
                    </div>
                </Card>
                <Typography className={classes.title}>سفارشات شما</Typography>
                <div className={classes.cardsContainer}>
                    <Skeleton width={'100%'} height={'80px'} variant={'rect'}/>
                    <Skeleton width={'100%'} height={'80px'} variant={'rect'}/>
                </div>
                <div style={{marginTop: 22, marginBottom: 16, display: 'flex', justifyContent: 'space-between'}}>
                    <Typography style={{margin: 'auto 0'}} className={classes.title}>آدرس‌های شما</Typography>
                    <Skeleton width={100} component={'h3'} variant={'text'}/>
                </div>
                <div className={classes.cardsContainer}>
                    <Skeleton width={'100%'} height={40} variant={'rect'}/>
                    <Skeleton width={'100%'} height={40} variant={'rect'}/>
                </div>
            </div>
        </>
    )

}

export default ProfilePageSkeleton