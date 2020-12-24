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
import * as PropTypes from "prop-types";
import ProductPageSkeleton from "../Components/Skeletons/ProductPageSkeleton";

function ProductPage(props) {
    const {setBasketChange} = props
    const {product} = useParams()
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const [loading, result] = useProductData(true, params.get('id'))
    const [catsLoading, catsResult] = useCategoriesData(true)
    const classes = useProductPageStyle()
    const size = useWindowSize()


    const findCategoryIndex = (id) => {
        for (let i = 0; i < catsResult.length; i++) {
            if (id === catsResult[i].id) {
                return i
            }
        }
        return -1
    }

    const isDuplicate = (order) => {
        const localStorageCart = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < localStorageCart.length; i++) {
            if (localStorageCart[i].id === order.id
                && localStorageCart[i].color === order.color
                && localStorageCart[i].size === order.size
                && localStorageCart[i].count === order.count) {
                return true
            }
        }
        return false
    }

    const isCountChanged = (order) => { // true -> index, false -> -1
        const localStorageCart = JSON.parse(localStorage.getItem('cart'))
        for (let i = 0; i < localStorageCart.length; i++) {
            if (localStorageCart[i].id === order.id
                && localStorageCart[i].size === order.size
                && localStorageCart[i].color === order.color) {
                return i
            }
        }
        return -1
    }

    const addToCart = (order) => { // order : id, color, size, count
        let cart = []
        let index = -1
        const localStorageCart = JSON.parse(localStorage.getItem('cart'))
        if (localStorage.getItem('cart')) {
            if (isDuplicate(order))
                return
            index = isCountChanged(order)
            if (index !== -1) {
                localStorageCart[index].count = order.count
            }
            for (let i = 0; i < localStorageCart.length; i++) {
                cart.push(localStorageCart[i])
            }
        }
        if (index === -1) {
            cart.push(order)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        setBasketChange(prvState => prvState + 1)
    }
    return (
        <>
            <div className={classes.container}>

                {
                    loading || catsLoading ? <ProductPageSkeleton/>
                        : <>
                            <Breadcrumbs className={classes.breadcrumbContainer}
                                         separator={<NavigateBeforeIcon fontSize="small"/>}>
                                <ItemLink to={'/'}>
                                    <Typography className={classes.breadcrumb}>خانه</Typography>
                                </ItemLink>
                                <ItemLink
                                    to={
                                        `/search?&category_list[${findCategoryIndex(result.merchandise.category.id)}]=${result.merchandise.category.id}`
                                    }
                                >
                                    <Typography
                                        className={classes.breadcrumb}>{result.merchandise.category.name}</Typography>
                                </ItemLink>
                                <Typography className={classes.breadcrumb}>{product}</Typography>
                            </Breadcrumbs>

                            {
                                size.width > 600
                                    ? <DesktopProduct addToCart={addToCart} product={result.merchandise}/>
                                    : <MobileProduct addToCart={addToCart} product={result.merchandise}/>
                            }
                            {
                                size.width > 600 && <ProductDetail product={result.merchandise}/>
                            }
                            <SimilarProducts products={result.related_merchandise}/>
                        </>
                }
            </div>
        </>
    )


}

ProductPage.propTypes = {
    setBasketChange: PropTypes.func.isRequired
}

export default ProductPage