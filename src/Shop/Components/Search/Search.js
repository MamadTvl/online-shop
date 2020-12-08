import React, {useEffect, useReducer, useState} from "react";
import ShopLayout from "../../Layouts/ShopLayout";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ItemLink from "../../../Routes/Link/ItemLink";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import ProductCard from "../Home/ProuductCard";
import {StyledSwitch, useStyles} from "./Styles/SearchStyle";
import TablePaginationActions from "../../../utills/TablePaginationActions";
import FilterPrice from "./FilterPrice";
import FilterCategory from "./FilterCategory";
import {initialStates, reducer} from "./Reducer";


function Search({location}) {
    const classes = useStyles()
    const [searchStates, dispatch] = useReducer(reducer, initialStates)

    const [page, setPage] = useState(0)
    const handleChangePages = (pageNumber) => {
        setPage(pageNumber)
    }
    const numPages = parseInt((searchStates.products.length / 10).toString()) + 1

    const [searchItem, setSearchItem] = useState('')
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const s = params.get('s')
        const category = params.get('category')
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
                                <FilterPrice
                                    filterValues={searchStates.filterValues}
                                    dispatch={dispatch}
                                />
                            </div>
                        </Grid>

                        <Grid className={classes.categoryMdItem} xs={12} item>
                            <div>
                                <FilterCategory
                                    categories={searchStates.categories}
                                    dispatch={dispatch}
                                />
                            </div>
                        </Grid>

                        <Grid className={classes.filterItem} xs={12} item>
                            <div>
                                <Card>
                                    <CardContent style={{padding: '8px 16px'}} className={classes.discount}>
                                        <Typography className={classes.discountTitle}>تخفیف‌دار ها</Typography>
                                        <StyledSwitch
                                            checked={searchStates.hasDiscount}
                                            onChange={() => dispatch({type: 'discount'})}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.productsContainer} sm={9} xs={12} direction={"row"}>
                        {
                            searchStates.products.slice(page * 15, page * 15 + 15)
                                .map((product) => (
                                    <Grid className={classes.productItem} md={4} sm={6} item>
                                        <ProductCard product={product} className={classes.card}/>
                                    </Grid>
                                ))
                        }
                        <Grid item xs={12}>
                            <TablePaginationActions buttonGroupClass={classes.buttonGroup} numPages={numPages}
                                                    page={page} onChange={handleChangePages}/>
                        </Grid>

                    </Grid>

                    <Grid item className={classes.categoryXsItem} xs={12}>
                        <div style={{width: '100%'}}>
                            <FilterCategory
                                categories={searchStates.categories}
                                dispatch={dispatch}
                            />
                        </div>
                    </Grid>

                </Grid>
            </div>
        </ShopLayout>
    )
}

export default Search