import React, {useEffect, useState} from "react";
import Title from "../Components/Public/Title";
import {Button, Card, Typography} from "@material-ui/core";
import profileImage from '../../img/profile.png'
import PreviewOrderCard from "../Components/Profile/PreviewOrderCard";
import {useProfilePageStyle} from "./Styles/useProfilePageStyle";
import PreviewAddressCard from "../Components/Profile/PreviewAddressCard";
import {useHistory} from 'react-router-dom'
import useUserData from "../FetchData/useUserData";
import {toFaDigit} from "../../utills/ToFaDigit";
import ProfilePageSkeleton from "../Components/Skeletons/ProfilePageSkeleton";
import useAddressesData from "../FetchData/useAddressesData";
import useDeleteAddress from "../DeleteData/useDeleteAddress";

function ProfilePage() {
    const [fetchDelete, setFetchDelete] = useState(false)
    const [fetchAddresses, setFetchAddresses] = useState(true)

    const [deleteId, setDeleteId] = useState(0)
    const [loadingUserData, userDataResult] = useUserData(true)
    const [loadingAddressesData, addressesDataResult] = useAddressesData(fetchAddresses)
    const [loadingDeleteAddress, deleteAddressResult] = useDeleteAddress(fetchDelete, deleteId)
    const classes = useProfilePageStyle()
    const history = useHistory()

    function createOrderData(code, date, status, cost) {
        return {code, date, status, cost}
    }


    const orders = [
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'درحال بررسی', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'تحویل داده شده', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'تحویل داده شده', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'درحال بررسی', '560000'),
        createOrderData('۳۴۰۹۵۸۴۷۲۳۰۴۹۲۹۸', '۹۸/۱۱/۱۵', 'درحال بررسی', '560000'),
    ]

    const handleDeleteAddress = (id) => {
        setDeleteId(id)
        setFetchDelete(true)
    }

    useEffect(() => {
        if(!loadingAddressesData){
            setFetchAddresses(false)
        }
    }, [loadingAddressesData, addressesDataResult])

    useEffect(() => {
        if(!loadingDeleteAddress){
            if (deleteAddressResult){
                setFetchAddresses(true)
            }
        }
    }, [loadingDeleteAddress, deleteAddressResult])

    if (loadingUserData || loadingAddressesData || loadingDeleteAddress)
        return <ProfilePageSkeleton/>
    return (
        <>
            <div className={classes.container}>
                <Title title={'پروفایل کاربری'}/>
                <Card className={classes.profileCard}>
                    <div className={classes.profileContent}>
                        <img className={classes.image} src={profileImage} alt={'profile'}/>
                        <div className={classes.profileDetail}>
                            <Typography className={classes.name}>{userDataResult.name_and_last_name}</Typography>
                            <Typography
                                className={classes.mobileNumber}>{toFaDigit((userDataResult.mobile_number).toString())}</Typography>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Button
                            onClick={() => {
                                window.scrollTo(0, 0)
                                history.push('/profile/personal-info')
                            }}
                            className={classes.editButton}
                            variant={'outlined'}
                        >
                            ویرایش اطلاعات کاربری
                        </Button>
                        <Button
                            style={{marginTop: 8}}
                            onClick={() => {
                                localStorage.removeItem('Authorization')
                                history.go(0)
                            }}
                            className={classes.editButton}
                            variant={'outlined'}
                        >
                            خروج
                        </Button>
                    </div>
                </Card>
                <Typography className={classes.title}>سفارشات شما</Typography>
                <div className={classes.cardsContainer}>
                    {
                        orders.map((order) => (
                            <PreviewOrderCard order={order}/>
                        ))
                    }
                </div>
                <div style={{marginTop: 22, marginBottom: 16, display: 'flex', justifyContent: 'space-between'}}>
                    <Typography style={{margin: 'auto 0'}} className={classes.title}>آدرس‌های شما</Typography>
                    <Button
                        onClick={() => {
                            window.scrollTo(0, 0)
                            history.push('/profile/addresses')
                        }}
                    >
                        <Typography
                            className={classes.addAddress}
                        >
                            افزودن آدرس
                        </Typography>
                    </Button>
                </div>
                <div className={classes.cardsContainer}>
                    {
                        addressesDataResult.map((address) => (
                            <PreviewAddressCard data={address} handleDelete={handleDeleteAddress}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProfilePage