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
import {useHistory} from 'react-router-dom'
import {usePrevious} from "../../../utills/Hooks/usePrevious";

function Search({location}) {
    const classes = useStyles()
    const history = useHistory()
    const [searchStates, dispatch] = useReducer(reducer, initialStates)
    const prevArray = usePrevious(searchStates.categories)
    const [page, setPage] = useState(0)
    const handleChangePages = (pageNumber) => {
        setPage(pageNumber)
    }
    const numPages = parseInt((searchStates.products.length / 10).toString()) + 1

    const [searchItems, setSearchItems] = useState({
        s: '',
    })
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const s = params.get('s') ? `"${params.get('s')}"` : ''

        for (let i = 0; i < searchStates.categories.length; i++) {
            if (params.get(`categoryId[${i}]`)) {
                dispatch({
                    type: 'selectCategory',
                    categoryId: parseInt(params.get(`categoryId[${i}]`)),
                    value: true,
                })
            }
        }
        setSearchItems({s: s})
    }, [location])

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        let newLocation = ''
        if (params.get('s')) {
            newLocation = `s=${params.get('s')}`
        }
        for (let i = 0; i < searchStates.categories.length; i++) {
            if (searchStates.categories[i].checked) {
                newLocation += `&categoryId[${i}]=${searchStates.categories[i].id}`
            }
        }
        history.push(`/search?${newLocation}`)
    }, [JSON.stringify(searchStates.categories)])

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
                    <Typography component={"h1"}
                                className={classes.title}>{`لیست محصولات ${searchItems.s}`}</Typography>
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