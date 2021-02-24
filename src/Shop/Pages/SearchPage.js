import React, {useEffect, useReducer, useRef, useState} from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ItemLink from "../../Routes/Link/ItemLink";
import {Backdrop, Card, CardContent, CircularProgress, Grid, Typography} from "@material-ui/core";
import ProductCard from "../Components/Public/ProuductCard";
import {StyledSwitch, useStyles} from "../Components/Search/Styles/SearchStyle";
import FilterPrice from "../Components/Search/FilterPrice";
import FilterCategory from "../Components/Search/FilterCategory";
import {initialStates, reducer} from "../Components/Search/Reducer";
import {useHistory} from 'react-router-dom'
import useCategoriesData from "../FetchData/useCategoriesData";
import Title from "../Components/Public/Title";
import useSearchData from "../FetchData/useSearchData";
import TablePaginationActions from "../Components/Public/TablePaginationActions";
import useWindowSize from "../../utills/Hooks/useWindowSize";
import {SmoothVerticalScrolling} from "../../utills/smoothScroll";
import useMaxPriceData from "../FetchData/useMaxPriceData";

function SearchPage({location}) {
    const history = useHistory()
    const search = useRef(location.search)
    const size = useWindowSize()
    const [catsLoading, catsResult] = useCategoriesData(true)
    const classes = useStyles()
    const [searchStates, dispatch] = useReducer(reducer, initialStates)
    const [page, setPage] = useState(0)
    const [mobilePage, setMobilePage] = useState(0)
    const [mobileMaxPage, setMobileMaxPage] = useState(1)
    const [maxPages, setMaxPages] = useState(1)
    const [change, setChange] = useState(0)
    const [fetch, setFetch] = useState(false)
    const [filterValues, setFilterValues] = useState({
        from: 0,
        to: 1500000,
    })
    const [maxPriceLoading, maxPriceResult] = useMaxPriceData(
        fetch,
        location.search,
        searchStates.categories.length,
        location.state ? location.state.showCampaign : false
    )
    const [searchLoading, searchResults] = useSearchData(
        fetch,
        location.search,
        page,
        searchStates.categories.length,
        filterValues.from,
        filterValues.to,
        searchStates.hasDiscount,
        location.state ? location.state.showCampaign : false
    )
    const handleChangePages = (pageNumber) => {
        setPage(pageNumber)
        SmoothVerticalScrolling(document.body, 500, "top")
    }
    const handleMobileChangePages = (pageNumber) => {
        setMobilePage(pageNumber)
        setPage(Math.floor(pageNumber / 3))
        SmoothVerticalScrolling(document.body, 500, "top")
    }

    const [searchItems, setSearchItems] = useState({
        search_text: '',
    })
    const filterPrice = () => {
        setFilterValues({
            from: searchStates.filterValues.from,
            to: searchStates.filterValues.to
        })
        setPage(0)
        location.state = {showCampaign: false}
    }

    useEffect(() => {
        if (!catsLoading && search.current !== undefined) {
            dispatch({
                type: 'setCategories',
                categories: catsResult,
            })
            const params = new URLSearchParams(search.current)
            if (!params.has('campaign_id')) {
                for (let i = 0; i < catsResult.length; i++) {
                    const categoryId = params.get(`category_list[${i}]`)
                    if (categoryId) {
                        location.state = {showCampaign: false}
                        dispatch({
                            type: 'selectCategory',
                            categoryId: parseInt(categoryId),
                            value: true,
                        })
                        setChange(prevState => prevState + 1)
                    }
                }
            } else {
                history.push({
                    pathname: '/search',
                    search: `campaign_id=${params.get('campaign_id')}`,
                    state: {showCampaign: true}
                })
            }
            search.current = undefined
        }
        setFetch(true)
    }, [catsLoading, catsResult])

    useEffect(() => {
        if (!maxPriceLoading) {
            setFilterValues({
                from: 0,
                to: maxPriceResult,
            })
            dispatch({
                type: 'priceFilter',
                filterValues: {
                    from: 0,
                    to: maxPriceResult,
                    max: maxPriceResult,
                },
            })
        }
    }, [maxPriceLoading, maxPriceResult])
    useEffect(() => {
        if (!searchLoading) {
            setMaxPages(searchResults.max_pages + 1)
            let max
            max = Math.floor(searchResults.merchandise_objs_number / 5)
            if (searchResults.merchandise_objs_number % 5 !== 0) {
                max++
            }
            setMobileMaxPage(max)
            dispatch({
                type: 'setProducts',
                products: searchResults.products,
            })
        }

    }, [searchLoading, searchResults])

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const search_text = params.get('search_text') ? `"${params.get('search_text')}"` : ''

        for (let i = 0; i < searchStates.categories.length; i++) {
            if (params.get(`category_list[${i}]`)) {
                dispatch({
                    type: 'selectCategory',
                    categoryId: parseInt(params.get(`category_list[${i}]`)),
                    value: true,
                })
            }
        }
        setPage(0)
        setSearchItems({search_text: search_text})
    }, [location, searchStates.categories.length])

    useEffect(() => {
        setPage(0)
        const params = new URLSearchParams(location.search)
        let newLocation = ''
        if (params.get('search_text')) {
            newLocation = `search_text=${params.get('search_text')}`
        }
        for (let i = 0; i < searchStates.categories.length; i++) {
            if (searchStates.categories[i].checked) {
                newLocation += `&category_list[${i}]=${searchStates.categories[i].id}`

            }
        }
        history.push(`/search?${newLocation}`)
    }, [change])

    document.title = `لیست محصولات ${searchItems.search_text}`
    return (
        <>
            <Backdrop className={classes.backdrop} open={maxPriceLoading || searchLoading || catsLoading}>
                <CircularProgress size={70} color="inherit"/>
            </Backdrop>
            <div className={classes.searchContainer}>
                <Breadcrumbs className={classes.breadcrumbContainer} separator={<NavigateBeforeIcon fontSize="small"/>}>
                    <ItemLink to={'/'}>
                        <Typography className={classes.breadcrumb}>خانه</Typography>
                    </ItemLink>
                    <Typography className={classes.breadcrumb}>جستجو میان محصولات</Typography>
                </Breadcrumbs>
                <Title title={`لیست محصولات ${searchItems.search_text}`}/>

                <Grid xs={12} className={classes.gridContainer} container direction={"row"}>
                    <Grid
                        style={{
                            display:
                                location.state ?
                                    location.state.showCampaign && 'none'
                                    : undefined
                        }}
                        container md={3}
                        className={classes.filterContainer}
                        direction={"row"}
                    >

                        <Grid className={classes.filterItem} xs={12} item>
                            <div>
                                <FilterPrice
                                    filterValues={searchStates.filterValues}
                                    dispatch={dispatch}
                                    filterPrice={filterPrice}
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
                                            onChange={() => {
                                                dispatch({type: 'discount'})
                                                location.state = {showCampaign: false}
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        className={classes.productsContainer}
                        sm={location.state ?
                            location.state.showCampaign ? 12 : 9
                            : 9
                        }
                        xs={12}
                        direction={"row"}
                    >
                        {
                            searchStates.products.length === 0 && (!maxPriceLoading && !searchLoading && !catsLoading) &&
                            <>
                                <Typography
                                    style={{
                                        textAlign: 'center',
                                        margin: 'auto',
                                        fontFamily: 'Shabnam',
                                        fontSize: 20,
                                        fontWeight: 500,
                                        marginBottom: location.state ?
                                            location.state.showCampaign && '150px'
                                            : 'auto'
                                    }}
                                >محصولی ثبت نشده</Typography>
                            </>
                        }
                        {
                            size.width > 900
                                ? <>
                                    {
                                        searchStates.products
                                            .map((product) => (
                                                <Grid className={classes.productItem} md={4} sm={6} xs={12} item>
                                                    <ProductCard product={product}/>
                                                </Grid>
                                            ))
                                    }

                                    <Grid item xs={12}>

                                        {
                                            searchStates.products.length !== 0 &&
                                            <TablePaginationActions
                                                buttonGroupClass={classes.buttonGroup}
                                                numPages={maxPages}
                                                page={page}
                                                onChange={handleChangePages}

                                            />
                                        }

                                    </Grid>
                                </>
                                : <>
                                    {
                                        searchStates.products.slice((mobilePage % 3) * 5, (mobilePage % 3) * 5 + 5)
                                            .map((product) => (
                                                <Grid key={product.id} className={classes.productItem} md={4} sm={6} xs={12}
                                                      item>
                                                    <ProductCard product={product}/>
                                                </Grid>
                                            ))
                                    }

                                    <Grid style={{overflowX: 'hidden'}} item xs={12}>

                                        {
                                            searchStates.products.length !== 0 &&
                                            <TablePaginationActions
                                                buttonGroupClass={classes.buttonGroup}
                                                numPages={mobileMaxPage}
                                                page={mobilePage}
                                                onChange={handleMobileChangePages}
                                            />
                                        }

                                    </Grid>
                                </>
                        }

                    </Grid>

                    <Grid
                        style={{
                            display:
                                location.state ?
                                    location.state.showCampaign && 'none'
                                    : undefined
                        }}
                        item
                        className={classes.categoryXsItem}
                        xs={12}
                    >
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
