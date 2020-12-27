import React, {useEffect, useState} from "react";
import {useCartPageStyle} from "./Styles/useCartPageStyle";
import {
    Backdrop,
    Button,
    Card,
    CircularProgress,
    Divider,
    Grid,
    InputAdornment,
    TextField,
    Typography
} from "@material-ui/core";
import Title from "../Components/Public/Title";
import Step from "../Components/Public/Step";
import OrderCard from "../Components/Cart/OrderCard";
import AddressCard from "../Components/Cart/AddressCard";
import AddressForm from "../Components/Public/AddressForm";
import FactorCard from "../Components/Cart/FactorCard";
import usePostCart from "../PostData/usePostCart";
import {separateDigit} from "../../utills/ToFaDigit";
import PropTypes from "prop-types"
import useAddressesData from "../FetchData/useAddressesData";
import useForceUpdate from "../../utills/Hooks/useForceUpdate";
import useApplyDiscountCode from "../PostData/useApplyDiscountCode";
import usePathCart from "../PostData/usePathCart";
import usePostAddress from "../PostData/usePostAddress";


function CartPage(props) {
    const forceUpdate = useForceUpdate()
    const [fetchPost, setFetchPost] = useState(true)
    const [fetchPostAddress, setFetchPostAddress] = useState(false)
    const [fetchApplyCode, setFetchApplyCode] = useState(false)
    const [fetchPathCart, setFetchPathCart] = useState(false)
    const [selectedAddress, setSelectedAddress] = useState({
        city: null,
        state: null,
        email: '',
        address: '',
        post_code: '',
        costumer_name: '',
        phone_number: '',
    })
    const {setBasketChange} = props
    const [postCardLoading, postCardResult] = usePostCart(fetchPost)
    const [addressesDataLoading, addressesDataResult] = useAddressesData(true)

    const [addressCheckboxes, setAddressCheckboxes] = useState([])
    const classes = useCartPageStyle()
    const [step, setStep] = useState(0)

    const [addressStep, setAddressStep] = useState(0)
    const [basketDetails, setBasketDetails] = useState({
        boxes: [],
        basket: {
            address: null,
            basket_code: "",
            boxes_list: [],
            city: null,
            city_obj: {name: "", id: null},
            costumer_name: null,
            create_date: 0,
            details: null,
            discount_code: null,
            free_transmission: false,
            gift: false,
            id: 0,
            merchandise_number: 0,
            phone_number: null,
            post_code: null,
            state: null,
            state_obj: {name: "", id: null},
            total_basket_price: 0,
            total_basket_price_with_discount: 0,
            user: 0,
            email: null,
            approved: false,
        },
    })
    const [addressValues, setAddressValues] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        state: {
            name: '',
            id: null
        },
        city: {
            name: '',
            id: null
        },
        code: '',
        address: ''
    })
    const [postAddressLoading, postAddressResult] = usePostAddress(fetchPostAddress, addressValues)
    const [details, setDetails] = useState('')
    const [discountCode, setDiscountCode] = useState('')
    const [applyCodeLoading, applyCodeResult] = useApplyDiscountCode(fetchApplyCode, basketDetails.basket.id, discountCode)
    const [pathCartLoading, pathCartResult] = usePathCart(fetchPathCart, basketDetails.basket.id, selectedAddress, details)


    const [errors, setErrors] = useState({
        name: false,
        mobileNumber: false,
        email: false,
        discountCode: false,
        address: false
    })

    const setTitle = (step) => {
        switch (step) {
            case 0:
                return 'سبد خرید'
            case 1:
                return 'تکمیل آدرس و مشخصات'
            case 2:
                return 'پیش فاکتور'
            default:
                break
        }

    }

    const findIndexOfCart = (prvBox) => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart'))

        for (let i = 0; i < localStorageCart.length; i++) {
            if (localStorageCart[i].id === prvBox.id
                && localStorageCart[i].color === prvBox.color
                && localStorageCart[i].size === prvBox.size
                && localStorageCart[i].count === prvBox.count) {
                return i
            }
        }
        return -1
    }

    const handleDelete = (prvBox) => {
        let cart = []
        const localStorageCart = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < localStorageCart.length; i++) {
            cart.push(localStorageCart[i])
        }
        console.log(cart)
        cart = cart.filter(item => item !== cart[findIndexOfCart(prvBox)])
        console.log(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        setBasketChange(prvState => prvState + 1)
        setFetchPost(true)
    }

    const isDuplicate = (newBox) => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < localStorageCart.length; i++) {
            if (localStorageCart[i].id === newBox.id
                && localStorageCart[i].color === newBox.color
                && localStorageCart[i].size === newBox.size) {
                return true
            }

        }
        return false
    }

    const onChangeSelects = (prvBox, newBox) => {
        let cart = []
        // if (!isDuplicate(newBox)) { //todo: duplicate bug
        const localStorageCart = JSON.parse(localStorage.getItem('cart'))
        localStorageCart[findIndexOfCart(prvBox)] = newBox
        for (let i = 0; i < localStorageCart.length; i++) {
            cart.push(localStorageCart[i])
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        setBasketChange(prvState => prvState + 1)
        setFetchPost(true)
    }

    const handleClickContinue = (event) => {
        event.preventDefault()
        if (step === 0) {
            setStep(1)
        } else if (step === 1) {
            if (addressStep === 0) {
                for (let i = 0; i < addressCheckboxes.length; i++) {
                    if (addressCheckboxes[i].checked === true) {
                        setSelectedAddress(addressesDataResult[i])
                    }
                }
                setFetchPathCart(true)
            } else {
                setSelectedAddress({
                    city: addressValues.city.id,
                    state: addressValues.state.id,
                    email: addressValues.email,
                    address: addressValues.address,
                    post_code: addressValues.code,
                    costumer_name: addressValues.name,
                    phone_number: addressValues.mobileNumber,
                })
                setFetchPathCart(true)
                setFetchPostAddress(true)
            }

        }
        window.scrollTo(0, 0)
    }


    useEffect(() => {
        if (!postCardLoading) {
            setBasketDetails({
                boxes: postCardResult.boxes,
                basket: postCardResult.basket,
            })
            setFetchPost(false)
            discountCode !== '' && setFetchApplyCode(true)

        }
    }, [postCardLoading, postCardResult])

    useEffect(() => {
        if (!addressesDataLoading) {
            let checkboxes = []
            for (let i = 0; i < addressesDataResult.length; i++) {
                checkboxes.push({id: addressesDataResult[i].id, checked: i === 0})
            }
            setAddressCheckboxes(checkboxes)
            console.log(addressesDataResult)
        }
    }, [addressesDataLoading, addressesDataResult])

    useEffect(() => {
        if (!pathCartLoading && fetchPathCart) {
            setBasketDetails({
                ...basketDetails,
                basket: pathCartResult,
            })
            setStep(2)
            setFetchPathCart(false)
        }

    }, [pathCartLoading, pathCartResult])

    const updateAddress = () => {
        forceUpdate()
    }

    useEffect(() => {
        if (!applyCodeLoading) {
            if (applyCodeResult.status === 'success') {
                setBasketDetails({
                    ...basketDetails,
                    basket: applyCodeResult.data,
                })
            } else {
                setErrors({...errors, discountCode: true})
                setTimeout(
                    () => setErrors({...errors, discountCode: false})
                    , 5000)
            }
            setFetchApplyCode(false)
        }

    }, [applyCodeLoading, applyCodeResult])

    useEffect(() => {
        if (!postAddressLoading && fetchPostAddress){

            setFetchPostAddress(false)
        }
    }, [postAddressLoading, postAddressResult])

    return (
        <>
            <Backdrop
                className={classes.backdrop}
                open={postCardLoading || addressesDataLoading || applyCodeLoading || pathCartLoading || postAddressLoading}
            >
                <CircularProgress size={70} color="inherit"/>
            </Backdrop>
            <form className={classes.container} onSubmit={handleClickContinue}>
                <Title title={setTitle(step)}/>
                <Grid container spacing={3}>
                    <Grid item md={9} xs={12}>
                        <Step stepClass={classes.orderCardsStep} index={0} step={step}>
                            {
                                basketDetails.boxes.map((box) => (
                                    <OrderCard
                                        box={box}
                                        onChangeSelects={onChangeSelects}
                                        product={box.merchandise_obj}
                                        deleteHandler={handleDelete}
                                    />

                                ))

                            }
                        </Step>
                        <Step stepClass={classes.orderCardsStep} index={1} step={step}>
                            <Step stepClass={classes.orderCardsStep} index={0} step={addressStep}>
                                {
                                    addressesDataResult.map((address, index) => (
                                        <AddressCard
                                            data={address}
                                            addressCheckbox={addressCheckboxes[index]}
                                            index={index}
                                            setAddressCheckboxes={setAddressCheckboxes}
                                            forceUpdate={updateAddress}
                                        />
                                    ))
                                }
                            </Step>
                            <Step stepClass={classes.orderCardsStep} index={1} step={addressStep}>
                                <AddressForm
                                    values={addressValues}
                                    setValues={setAddressValues}
                                    errors={errors}
                                    setErrors={setErrors}
                                />
                            </Step>

                            <Button
                                variant={'text'}
                                className={classes.addAddress}
                                onClick={() => setAddressStep(prevState => {
                                    return prevState === 0 ? 1 : 0
                                })}
                            >
                                {`${addressStep === 0 ? 'افزودن آدرس جدید' : 'آدرس‌های شما'}`}
                            </Button>
                            <Typography className={classes.title}>توضیحات سفارش</Typography>
                            <Card className={classes.card}>
                                <Typography className={classes.descriptionLabel}>توضیحات</Typography>
                                <TextField
                                    multiline
                                    rows={4}
                                    value={details}
                                    onChange={(event) => setDetails(event.target.value)}
                                    InputProps={{
                                        classes: {
                                            input: classes.input,
                                        }
                                    }}
                                    fullWidth
                                    variant="outlined"
                                />
                            </Card>
                        </Step>
                        <Step index={2} step={step}>
                            <Card className={classes.card}>
                                <FactorCard products={basketDetails.boxes} info={basketDetails.basket}/>
                            </Card>

                        </Step>

                    </Grid>

                    <Grid item md={3} xs={12}>
                        <Card className={classes.card}>
                            <Typography className={classes.discountTitle}>کد تخفیف</Typography>
                            <TextField
                                dir={'ltr'}
                                value={discountCode}
                                onChange={
                                    (event) => setDiscountCode(event.target.value)
                                }
                                margin={'normal'}
                                error={errors.discountCode}
                                fullWidth
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        root: classes.textFieldRoot,
                                    },
                                    startAdornment:
                                        <InputAdornment position={"start"}>
                                            <Button
                                                size={"small"}
                                                className={classes.save}
                                                variant={"contained"}
                                                onClick={() => {
                                                    if (discountCode === '') {
                                                        setDiscountCode('')
                                                        setErrors({...errors, discountCode: true})
                                                        setTimeout(
                                                            () => setErrors({...errors, discountCode: false})
                                                            , 5000)
                                                    } else {
                                                        setFetchApplyCode(true)
                                                    }

                                                }}
                                            >
                                                ثبت
                                            </Button>
                                        </InputAdornment>
                                }}
                                variant="outlined"
                            />
                        </Card>
                        <Step index={2} step={step}>
                            <Card style={{width: '100%'}} className={classes.card}>
                                <Typography style={{marginBottom: 16}}
                                            className={classes.discountTitle}>توضیحات</Typography>
                                <Typography
                                    className={classes.descriptionLabel}>{basketDetails.basket.details && basketDetails.basket.details}</Typography>
                            </Card>
                        </Step>
                        <Card className={classes.card}>
                            <div style={{marginBottom: 8,}} className={classes.detailContainer}>
                                <Typography className={classes.detailTitle}>تعداد کالا</Typography>
                                <Typography
                                    className={classes.number}>{separateDigit(basketDetails.basket.merchandise_number)}</Typography>
                            </div>
                            <Divider/>
                            <div className={classes.detail}>
                                <div className={classes.detailContainer}>
                                    <Typography className={classes.detailTitle}>قیمت کالاها</Typography>
                                    <div className={classes.priceContainer}>
                                        <Typography
                                            className={classes.number}
                                        >
                                            {separateDigit(basketDetails.basket.total_basket_price)}
                                        </Typography>
                                        <Typography className={classes.toman}>تومان</Typography>
                                    </div>
                                </div>
                                <div className={classes.detailContainer}>
                                    <Typography className={classes.detailTitle}>تخفیف</Typography>
                                    <div className={classes.priceContainer}>
                                        <Typography style={{color: '#F16522'}}
                                                    className={classes.number}>
                                            {separateDigit(basketDetails.basket.total_basket_price - basketDetails.basket.total_basket_price_with_discount)}
                                        </Typography>
                                        <Typography className={classes.toman}>تومان</Typography>
                                    </div>
                                </div>
                                <div style={{marginBottom: 0}} className={classes.detailContainer}>
                                    <Typography className={classes.detailTitle}>هزینه ارسال</Typography>
                                    <div className={classes.priceContainer}>
                                        <Typography
                                            style={{opacity: 0.6, fontWeight: 'normal', fontSize: 16}}
                                            className={classes.number}
                                        >
                                            {basketDetails.basket.free_transmission ? 'رایگان' : 'به عهده مشتری'}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <Divider/>
                            <div style={{marginTop: 11, marginBottom: 0}} className={classes.detailContainer}>
                                <Typography className={classes.detailTitle}>مبلغ قابل پرداخت</Typography>
                                <div className={classes.priceContainer}>
                                    <Typography
                                        className={classes.number}
                                    >
                                        {separateDigit(basketDetails.basket.total_basket_price_with_discount)}
                                    </Typography>
                                    <Typography className={classes.toman}>تومان</Typography>
                                </div>
                            </div>
                            <div style={{width: '100%', float: 'left', marginTop: 24}}>
                                <Button
                                    fullWidth
                                    type={'submit'}
                                    className={classes.shopButton}
                                    variant={'contained'}
                                >
                                    ادامه خرید
                                </Button>
                            </div>
                            {
                                step !== 0 &&
                                <div style={{width: '100%', float: 'left', marginTop: 24}}>
                                    <Button
                                        fullWidth
                                        onClick={() => setStep(step - 1)}
                                        className={classes.backButton}
                                        variant={'outlined'}
                                    >
                                        بازگشت به مرحله قبل
                                    </Button>
                                </div>
                            }
                        </Card>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

Card.propTypes = {
    setBasketChange: PropTypes.func.isRequired,
}

export default CartPage