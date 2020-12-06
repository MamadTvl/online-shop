import React, {useEffect, useState} from "react";
import ShopLayout from "../../Layouts/ShopLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ItemLink from "../../../Routes/Link/ItemLink";
import {Grid, Typography} from "@material-ui/core";
import productImage from "../../../img/img.png";
import ProductCard from "../Home/ProuductCard";
import {useStyles} from "./Styles/SearchStyle";
import TablePaginationActions from "../../../utills/TablePaginationActions";

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
    const handleChangePages = (pageNumber) => {
        setPage(pageNumber)
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
                    <Typography className={classes.title}>{`لیست محصولات "${searchItem}"`}</Typography>
                </div>

                <Grid xs={12} className={classes.gridContainer} container spacing={2.5} direction={"row"}>
                    <Grid container md={3} className={classes.filterContainer} direction={"row"}>
                        <Grid xs={12} item>
                            <div style={{width: '100%', backgroundColor: 'red'}}>
                                Hello
                            </div>
                        </Grid>
                        <Grid xs={12} item>
                            <div style={{width: '100%', backgroundColor: 'green'}}>
                                Hello
                            </div>
                        </Grid>
                        <Grid xs={12} item>
                            <div style={{width: '100%', backgroundColor: 'blue'}}>
                                Hello
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.productsContainer} spacing={2.5} md={9} direction={"row"}>
                        {
                            products.slice(page * 15, page * 15 + 15)
                                .map((product) => (
                                    <Grid md={4} item>
                                        <ProductCard product={product} className={classes.card}/>
                                    </Grid>
                                ))
                        }
                        <Grid item xs={9}>
                            <TablePaginationActions numPages={numPages} page={page} onChange={handleChangePages}/>
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </ShopLayout>
    )
}

export default Search