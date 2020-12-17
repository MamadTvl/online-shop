import React from "react";
import {Grid} from "@material-ui/core";
import {useMobileProductStyle} from "./Styles/useMobileProductStyle";
import ProductViewCard from "./ProductViewCard";
import DetailCard from "./DetailCard";


function MobileProduct(props) {
    const classes = useMobileProductStyle()
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

    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <ProductViewCard product={product}/>
            </Grid>
            <Grid item xs={12}>
                <DetailCard product={product}/>
            </Grid>
        </Grid>
    )
}


export default MobileProduct