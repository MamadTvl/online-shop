import React from "react";
import ShopLayout from "../../Layouts/ShopLayout";
import {useLocation, useParams} from 'react-router-dom'
import DetailCard from "../Product/DetailCard";
import {useProductPageStyle} from "./Styles/useProductPageStyle";


function ProductPage() {
    const {code, id, product} = useParams()
    const location = useLocation()
    const classes = useProductPageStyle()
    return (
        <ShopLayout>
            <div className={classes.container}>
                <DetailCard/>
            </div>
        </ShopLayout>
    )


}

export default ProductPage