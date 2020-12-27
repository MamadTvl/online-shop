import React, {useState} from "react";
import {useFactorCardStyle} from './Styles/useFactoreCardStyle'
import {Button, Typography} from "@material-ui/core";
import PropType from 'prop-types';
import OrderFactorCard from "./OrderFactorCard";
import AddressFactorCard from "./AddressFactorCard";
import idPayLogo from "../../../img/IdPayLogo.svg"


function FactorCard(props) {
    const {products, info} = props
    const classes = useFactorCardStyle()
    const [backgroundColor, setBackgroundColor] = useState('#067cd0')
    return (
        <>
            <Typography className={classes.title}>سبد خرید</Typography>
            <div className={classes.orderCardContainer}>
                {
                    products.map((product) => (
                        <div className={classes.grid}>
                            <OrderFactorCard product={product}/>
                        </div>
                    ))
                }
            </div>
            <Typography style = {{marginTop: 32}} className={classes.title}>اطلاعات ارسال</Typography>
            <AddressFactorCard info={info}/>
            <Typography style={{marginTop: 32}} className={classes.title}>انتخاب درگاه اینترنتی</Typography>
            <Button
                style={{backgroundColor: backgroundColor}}
                onClick={() => setBackgroundColor('#004677')}
                variant={'contained'}
                className={classes.payButton}
            >
                <img src={idPayLogo} alt="IdPay"/>
            </Button>
        </>
    )
}

FactorCard.propTypes = {
    products: PropType.array.isRequired,
    info: PropType.object.isRequired,
}
export default FactorCard