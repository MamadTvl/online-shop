import React from "react";
import ShopLayout from "../../Layouts/ShopLayout";
import {useLocation, useParams} from 'react-router-dom'
import Product from "../Product/Product";
import {useProductPageStyle} from "./Styles/useProductPageStyle";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ItemLink from "../../../Routes/Link/ItemLink";
import {Typography} from "@material-ui/core";
import ProductDetail from "../Product/ProductDetail";


function ProductPage() {
    const {code, id, product} = useParams()
    const location = useLocation()
    const classes = useProductPageStyle()
    return (
        <ShopLayout>
            <div className={classes.container}>

                <Breadcrumbs className={classes.breadcrumbContainer} separator={<NavigateBeforeIcon fontSize="small"/>}>
                    <ItemLink to={'/'}>
                        <Typography className={classes.breadcrumb}>خانه</Typography>
                    </ItemLink>
                    <ItemLink to={'/search?&categoryId[2]=3'}>
                        <Typography className={classes.breadcrumb}>پوشاک</Typography>
                    </ItemLink>
                    <Typography className={classes.breadcrumb}>{product}</Typography>
                </Breadcrumbs>

                <Product/>

                <ProductDetail/>

            </div>
        </ShopLayout>
    )


}

export default ProductPage