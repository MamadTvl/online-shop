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
import useWindowSize from "../../utills/Hooks/useWindowSize";
import Step from "../Components/Public/Step";
import OrderCard from "../Components/Cart/OrderCard";
import image from '../../img/photoViewer.png'
import AddressCard from "../Components/Cart/AddressCard";
import AddressForm from "../Components/Public/AddressForm";
import FactorCard from "../Components/Cart/FactorCard";
import usePostCart from "../PostData/usePostCart";
import {separateDigit, toFaDigit} from "../../utills/ToFaDigit";

const product = {
    title: 'آستین کوتاه باله دار خاکستری',
    detail: 'تیشرت دخترانه جنس: یکرو ویسکوز، اسلپ\n' +
        'جنس: ویسکوز\n' +
        'سبک: روزمره\n' +
        'نوع: تیشرت\n' +
        'یقه: یقه گرد\n' +
        'نوع آستین: آستین کوتاه\n' +
        'طرح: ساده\n' +
        'رنگ: خاکستر',
    description: '',
    sizes: ['لارج', "ایکس لارج", "دو ایکس لارج", "اسمال"],
    colors: ['زرد', "قرمز", "سبز", "آبی"],
    count: 0,
    hasDiscount: true,
    discount: 0.15,
    price: 2459000,
    priceWithDiscount: 2659000,
    image: image,

}
const products = [product, product]

function createAddressData(state, city, code, address) {
    return {state, city, code, address}
}

function createInformationData(name, mobileNumber, email, state, city, code, address) {
    return {name, mobileNumber, email, state, city, code, address}
}

const addresses = [
    createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
    createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
    createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
    createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
    createAddressData('تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴'),
]

const info = createInformationData('آرش دامن‌افشان', '۰۹۳۴۴۴۳۲۵۳', 'Arash@mail.com', 'تهران', 'تهران', '۳۴۸۵۸۴۸۴۸', 'ایران، تهران، پونک جنوبی، خ قدسی، پلاک ۹۸ واحد ۴')
// address: null
// basket_code: "e91c7fd5"
// boxes_list: [56, 57, 58]
// city: null
// costumer_name: null
// create_date: 1608923979.816435
// details: null
// discount_code: null
// free_transmission: false
// gift: false
// id: 3
// merchandise_number: 14
// phone_number: null
// post_code: null
// state: null
// total_basket_price: 8374500
// total_basket_price_with_discount: 8374500
// user: 2
function CartPage() {
    const [postCardLoading, postCardResult] = usePostCart(true)
    const classes = useCartPageStyle()
    const size = useWindowSize()
    const [step, setStep] = useState(0)
    const [addressStep, setAddressStep] = useState(0)
    const [selects, setSelects] = useState({})
    const [basketDetails, setBasketDetails] = useState({
        boxes: [],
        basket: {},
    })
    const [addressValues, setAddressValues] = useState({
        name: '',
        mobileNumber: '',
        email: '',
        state: '',
        city: '',
        discountCode: '',
        address: ''
    })

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
    const handleDelete = () => {

    }
    const handleClickContinue = (event) => {
        if (step === 0) {
            setStep(1)
        } else if (step === 1) {
            setStep(2)
        }
        window.scrollTo(0, 0)
    }
    useEffect(() => {
        setBasketDetails({
            boxes: postCardResult.boxes,
            basket: postCardResult.basket,
        })
    }, [postCardLoading, postCardResult])
    if (postCardLoading)
        return null
    return (
        <>
            <Backdrop className={classes.backdrop} open={postCardLoading}>
                <CircularProgress size={70} color="inherit"/>
            </Backdrop>
            <div className={classes.container}>
                <Title title={setTitle(step)}/>
                <Grid container spacing={3}>
                    <Grid item md={9} xs={12}>
                        <Step stepClass={classes.orderCardsStep} index={0} step={step}>
                            {
                                products.map((product) => (
                                    <OrderCard
                                        selects={selects}
                                        setSelects={setSelects}
                                        product={product}
                                        deleteHandler={handleDelete}
                                    />
                                ))
                            }
                        </Step>
                        <Step stepClass={classes.orderCardsStep} index={1} step={step}>
                            <Step stepClass={classes.orderCardsStep} index={0} step={addressStep}>
                                {
                                    addresses.map((address) => (
                                        <AddressCard
                                            data={address}
                                            checked={true}
                                            handleChange={() => console.log()}
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
                                افزودن آدرس جدید
                            </Button>
                            <Typography className={classes.title}>توضیحات سفارش</Typography>
                            <Card className={classes.card}>
                                <Typography className={classes.descriptionLabel}>توضیحات</Typography>
                                <TextField
                                    multiline
                                    rows={4}
                                    // value={values.address}
                                    // onChange={handleChange('address')}
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
                                <FactorCard products={products} info={info}/>
                            </Card>

                        </Step>

                    </Grid>

                    <Grid item md={3} xs={12}>
                        <Card className={classes.card}>
                            <Typography className={classes.discountTitle}>کد تخفیف</Typography>
                            <TextField
                                dir={'ltr'}
                                // placeholder={'کد تخفیف'}
                                // value={values[`${index + 1}`]}
                                // onChange={handleChangeValues(`${index + 1}`)}
                                margin={'normal'}
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
                                                // onClick={() => addProduct(index + 1)}
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
                                    className={classes.descriptionLabel}>{basketDetails.basket.details}</Typography>
                            </Card>
                        </Step>
                        <Card className={classes.card}>
                            <div style={{marginBottom: 8,}} className={classes.detailContainer}>
                                <Typography className={classes.detailTitle}>تعداد کالا</Typography>
                                <Typography
                                    className={classes.number}>{toFaDigit(basketDetails.basket.merchandise_number.toString())}</Typography>
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
                                                    className={classes.number}>۱۴۱٫۰۰۰</Typography>
                                        <Typography className={classes.toman}>تومان</Typography>
                                    </div>
                                </div>
                                <div style={{marginBottom: 0}} className={classes.detailContainer}>
                                    <Typography className={classes.detailTitle}>هزینه ارسال</Typography>
                                    <div className={classes.priceContainer}>
                                        <Typography
                                            style={{opacity: 0.6}}
                                            className={classes.number}
                                        >
                                            {basketDetails.basket.free_transmission ? '۰' : 'به عهده مشتری'}
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
                                    // disabled={loading}
                                    fullWidth
                                    onClick={handleClickContinue}
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
            </div>
        </>
    )
}

export default CartPage