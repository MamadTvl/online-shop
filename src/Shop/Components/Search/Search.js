import React, {useEffect, useState} from "react";
import ShopLayout from "../../Layouts/ShopLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ItemLink from "../../../Routes/Link/ItemLink";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import productImage from "../../../img/img.png";
import ProductCard from "../Home/ProuductCard";
import {StyledSwitch, useStyles} from "./Styles/SearchStyle";
import TablePaginationActions from "../../../utills/TablePaginationActions";
import FilterPrice from "./FilterPrice";
import FilterCategory from "./FilterCategory";

function createData(name, price, img, hasDiscount, discount, newPrice) {
    return {name, price, img, hasDiscount, discount, newPrice}
}

const initialProducts = [
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
]

function Search({location}) {
    const classes = useStyles()
    const [page, setPage] = useState(0)
    const [hasDiscount, setHasDiscount] = useState(false)
    const handleChangePages = (pageNumber) => {
        setPage(pageNumber)
    }
    const handleChangeSwitch = () => {
        setHasDiscount(!hasDiscount)
    }
    const [searchItem, setSearchItem] = useState('')
    const [products, setProducts] = useState(initialProducts)
    const numPages = parseInt((products.length / 10).toString()) + 1


    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const s = params.get('s')
        setSearchItem(s)
    }, [location.search])

    return (
        <ShopLayout>
            <div className={classes.searchContainer}>
                <Breadcrumbs className={classes.breadcrumbContainer} separator={<NavigateBeforeIcon fontSize="small"/>}>
                    <ItemLink to={'/'}>
                        <Typography className={classes.breadcrumb}>خانه</Typography>
                    </ItemLink>
                    <Typography className={classes.breadcrumb}>جستجو میان محصولات</Typography>
                </Breadcrumbs>
                <div className={classes.titleContainer}>
                    <div className={classes.titleRectangle}/>
                    <Typography component={"h1"} className={classes.title}>{`لیست محصولات "${searchItem}"`}</Typography>
                </div>

                <Grid xs={12} className={classes.gridContainer} container direction={"row"}>
                    <Grid container sm={3} className={classes.filterContainer} direction={"row"}>

                        <Grid className={classes.filterItem} xs={12} item>
                            <div>
                                <FilterPrice/>
                            </div>
                        </Grid>

                        <Grid className={classes.categoryMdItem} xs={12} item>
                            <div>
                                <FilterCategory/>
                            </div>
                        </Grid>

                        <Grid className={classes.filterItem} xs={12} item>
                            <div>
                                <Card>
                                    <CardContent style={{padding: '8px 16px'}} className={classes.discount}>
                                        <Typography className={classes.discountTitle}>تخفیف‌دار ها</Typography>
                                        <StyledSwitch
                                            checked={hasDiscount}
                                            onChange={handleChangeSwitch}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.productsContainer} sm={9} xs={12} direction={"row"}>
                        {
                            products.slice(page * 15, page * 15 + 15)
                                .map((product) => (
                                    <Grid className={classes.productItem} md={4} sm={6} item>
                                        <ProductCard product={product} className={classes.card}/>
                                    </Grid>
                                ))
                        }
                        <Grid item  xs={12}>
                            <TablePaginationActions buttonGroupClass={classes.buttonGroup} numPages={numPages} page={page} onChange={handleChangePages}/>
                        </Grid>

                    </Grid>

                    <Grid item className={classes.categoryXsItem} xs={12}>
                        <div style={{width: '100%'}}>
                            <FilterCategory/>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </ShopLayout>
    )
}

export default Search