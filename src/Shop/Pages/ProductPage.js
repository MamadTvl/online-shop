import React from "react";
import {useLocation, useParams} from 'react-router-dom'
import DesktopProduct from "../Components/Product/DesktopProduct";
import {useProductPageStyle} from "./Styles/useProductPageStyle";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import ItemLink from "../../Routes/Link/ItemLink";
import {Typography} from "@material-ui/core";
import ProductDetail from "../Components/Product/ProductDetail";
import SimilarProducts from "../Components/Product/SimilarProducts"
import useWindowSize from "../../utills/Hooks/useWindowSize"



function ProductPage() { // todo: make this responsive
    const {code, id, product} = useParams()
    const location = useLocation()
    const classes = useProductPageStyle()
    const size = useWindowSize()


    return (
        <>
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

                {
                    size.width > 600
                     ? <DesktopProduct/>
                     : <></>
                }

                <ProductDetail/>
                <SimilarProducts/>

            </div>
        </>
    )


}

export default ProductPage