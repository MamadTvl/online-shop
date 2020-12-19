import React, {useEffect, useReducer, useRef, useState} from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ItemLink from "../../Routes/Link/ItemLink";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import ProductCard from "../Components/Public/ProuductCard";
import {StyledSwitch, useStyles} from "../Components/Search/Styles/SearchStyle";
import TablePaginationActions from "../Components/Public/TablePaginationActions";
import FilterPrice from "../Components/Search/FilterPrice";
import FilterCategory from "../Components/Search/FilterCategory";
import {initialStates, reducer} from "../Components/Search/Reducer";
import {useHistory} from 'react-router-dom'
import useCategoriesData from "../FetchData/useCategoriesData";

function SearchPage({location}) {
    const search = useRef(location.search)
    const [loading, result] = useCategoriesData(true)
    const classes = useStyles()
    const history = useHistory()
    const [searchStates, dispatch] = useReducer(reducer, initialStates)
    const [page, setPage] = useState(0)
    const [change, setChange] = useState(0)
    const handleChangePages = (pageNumber) => {
        setPage(pageNumber)
    }
    const numPages = parseInt((searchStates.products.length / 10).toString()) + 1
    const [searchItems, setSearchItems] = useState({
        s: '',
    })
    useEffect(() => {
        if (!loading && search.current !== undefined) {
            dispatch({
                type: 'setCategories',
                categories: result,
            })
            const params = new URLSearchParams(search.current)
            for (let i = 0; i < result.length; i++) {
                const categoryId = params.get(`categoryId[${i}]`)
                if (categoryId) {
                    dispatch({
                        type: 'selectCategory',
                        categoryId: parseInt(categoryId),
                        value: true,
                    })
                    setChange(prevState => prevState + 1)
                }
            }
            search.current = undefined
        }
    }, [loading])
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
    }, [change])

    return (
        <>
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
                                    setChange={setChange}
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
                                    <Grid className={classes.productItem} md={4} sm={6} xs={12} item>
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
                                setChange={setChange}
                                categories={searchStates.categories}
                                dispatch={dispatch}
                            />
                        </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}

export default SearchPage