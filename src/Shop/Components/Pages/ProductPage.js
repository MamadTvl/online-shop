import React from "react";
import ShopLayout from "../../Layouts/ShopLayout";
import {useParams, useLocation} from 'react-router-dom'
import DetailCard from "../Product/DetailCard";



function ProductPage() {
    const {code, id, product} = useParams()
    const location = useLocation()

return(
    <ShopLayout>
        <DetailCard/>

    </ShopLayout>
)


}

export default ProductPage