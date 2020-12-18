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
import MobileProduct from "../Components/Product/MobileVersion/MobileProduct";
import useProductData from "../FetchData/useProductData";
import useCategoriesData from "../FetchData/useCategoriesData";


function ProductPage() {
    const {product} = useParams()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const [loading, result] = useProductData(true, params.get('id'))
    const [catsLoading, catsResult] = useCategoriesData(true)
    const classes = useProductPageStyle()
    const size = useWindowSize()

    if (loading || catsLoading)
        return null

    const findCategoryIndex = (id) => {
        for (let i = 0; i < catsResult.length; i++) {
            if (id === catsResult[i].id){
                return i
            }
        }
        return -1
    }
    console.log(result)
    return (
        <>
            <div className={classes.container}>
                <Breadcrumbs className={classes.breadcrumbContainer} separator={<NavigateBeforeIcon fontSize="small"/>}>
                    <ItemLink to={'/'}>
                        <Typography className={classes.breadcrumb}>خانه</Typography>
                    </ItemLink>
                    <ItemLink to={`/search?&categoryId[${findCategoryIndex(result.merchandise.category.id)}]=${result.merchandise.category.id}`}>
                        <Typography className={classes.breadcrumb}>{result.merchandise.category.name}</Typography>
                    </ItemLink>
                    <Typography className={classes.breadcrumb}>{product}</Typography>
                </Breadcrumbs>

                {
                    size.width > 600
                        ? <DesktopProduct product={result.merchandise}/>
                        : <MobileProduct product={result.merchandise}/>
                }
                {
                    size.width > 600 && <ProductDetail product={result.merchandise}/>
                }
                <SimilarProducts products={result.related_merchandise}/>

            </div>
        </>
    )


}

export default ProductPage