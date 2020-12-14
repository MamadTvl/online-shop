import React, {useState} from "react";
import {useCartPageStyle} from "./Styles/useCartPageStyle";
import ShopLayout from "../Layouts/ShopLayout";
import {Button, Card, Divider, Grid, InputAdornment, TextField, Typography} from "@material-ui/core";
import Title from "../Components/Public/Title";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import Step from "../Components/Public/Step";


function CartPage() {
    const classes = useCartPageStyle()
    const size = useWindowSize()
    const [step, setStep] = useState(0)

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
    return (
        <ShopLayout>
            <div className={classes.container}>
                <Title title={setTitle(step)}/>
                <Grid container spacing={3}>
                    <Grid item md={9} xs={12}>
                        <Step index={0} step={step}>

                        </Step>
                        <Step index={1} step={step}>

                        </Step>
                        <Step index={2} step={step}>

                        </Step>

                    </Grid>

                    <Grid item md={3} xs={12}>
                        <Card className={classes.card}>
                            <Typography className={classes.discountTitle}>کد تخفیف</Typography>
                            <TextField
                                placeholder={'کد تخفیف'}
                                // value={values[`${index + 1}`]}
                                // onChange={handleChangeValues(`${index + 1}`)}
                                margin={'normal'}
                                fullWidth
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        root: classes.textFieldRoot,
                                    },
                                    endAdornment:
                                        <InputAdornment position={"end"}>
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
                            <Card>
                                <Typography>توضیحات</Typography>
                                <Typography>لطفا تمامی کقش‌ها در سایز ۴۴ باشند.</Typography>
                            </Card>
                        </Step>
                        <Card className={classes.card}>
                            <div style={{marginBottom: 8,}} className={classes.detailContainer}>
                                <Typography className={classes.detailTitle}>تعداد کالا</Typography>
                                <Typography className={classes.number}>۶</Typography>
                            </div>
                            <Divider/>
                            <div className={classes.detail}>
                                <div className={classes.detailContainer}>
                                    <Typography className={classes.detailTitle}>قیمت کالاها</Typography>
                                    <div className={classes.priceContainer}>
                                        <Typography className={classes.number}>۱۴۱٫۰۰۰</Typography>
                                        <Typography className={classes.toman}>تومان</Typography>
                                    </div>
                                </div>
                                <div className={classes.detailContainer}>
                                    <Typography className={classes.detailTitle}>تخفیف</Typography>
                                    <div className={classes.priceContainer}>
                                        <Typography style={{color: '#F16522'}} className={classes.number}>۱۴۱٫۰۰۰</Typography>
                                        <Typography className={classes.toman}>تومان</Typography>
                                    </div>
                                </div>
                                <div style={{marginBottom: 0}} className={classes.detailContainer}>
                                    <Typography className={classes.detailTitle}>هزینه ارسال</Typography>
                                    <div className={classes.priceContainer}>
                                        <Typography className={classes.number}>۱۴۱٫۰۰۰</Typography>
                                        <Typography className={classes.toman}>تومان</Typography>
                                    </div>
                                </div>
                            </div>
                            <Divider/>
                            <div style={{marginTop: 11, marginBottom: 0}} className={classes.detailContainer}>
                                <Typography className={classes.detailTitle}>مبلغ قابل پرداخت</Typography>
                                <div className={classes.priceContainer}>
                                    <Typography className={classes.number}>۱۴۱٫۰۰۰</Typography>
                                    <Typography className={classes.toman}>تومان</Typography>
                                </div>
                            </div>
                            <div style={{width: '100%', float: 'left', marginTop: 24}}>
                                <Button
                                    // disabled={loading}
                                    type={'submit'}
                                    fullWidth
                                    className={classes.shopButton}
                                    variant={'contained'}
                                >
                                    ادامه خرید
                                </Button>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </ShopLayout>
    )
}

export default CartPage