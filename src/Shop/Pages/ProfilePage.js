import React from "react";
import ShopLayout from "../Layouts/ShopLayout";
import Title from "../Components/Public/Title";
import {Button, Card, Typography} from "@material-ui/core";
import profileImage from '../../img/profile.png'
import PreviewOrderCard from "../Components/Profile/PreviewOrderCard";
import {useProfilePageStyle} from "./Styles/useProfilePageStyle";
import PreviewAddressCard from "../Components/Profile/PreviewAddressCard";


function ProfilePage() {
    const classes = useProfilePageStyle()

    function createOrderData(code, date, status, cost) {
        return {code, date, status, cost}
    }

    function createAddressData(state, city, code, address) {
        return {state, city, code, address}
    }

    const orders = [
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'درحال بررسی', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'تحویل داده شده', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'تحویل داده شده', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'درحال بررسی', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'درحال بررسی', '560000'),
    ]

    const addresses = [
        createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
        createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
        createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
        createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
        createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
    ]
    return (
        <ShopLayout>
            <div className={classes.container}>
                <Title title={'پروفایل کاربری'}/>
                <Card className={classes.profileCard}>
                    <div className={classes.profileContent}>
                        <img className={classes.image} src={profileImage} alt={'profile'}/>
                        <div className={classes.profileDetail}>
                            <Typography className={classes.name}>آرش دامن‌افشان</Typography>
                            <Typography className={classes.mobileNumber}>۰۹۱۶۶۱۸۳۴۹۳</Typography>
                        </div>
                    </div>
                    <Button
                        className={classes.editButton}
                        variant={'outlined'}
                    >
                        ویرایش اطلاعات کاربری
                    </Button>
                </Card>
                <Typography className={classes.title}>سفارشات شما</Typography>
                <div className={classes.cardsContainer}>
                    {
                        orders.map((order) => (
                            <PreviewOrderCard order={order}/>
                        ))
                    }
                </div>
                <Typography style={{marginTop: 22}} className={classes.title}>آدرس‌های شما</Typography>
                <div className={classes.cardsContainer}>
                    {
                        addresses.map((address) => (
                            <PreviewAddressCard data={address}/>
                        ))
                    }
                </div>
            </div>
        </ShopLayout>
    )
}

export default ProfilePage