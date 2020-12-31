import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";
import {useLocation} from "react-router-dom"


function useSearchData(fetch, search, page, catsLength, fromPrice, toPrice, hasDiscount, showCampaign) {
    const location = useLocation()
    const changeUrl = (search) => {
        let newSearch = search
        if (!showCampaign){
            const queryParams = new URLSearchParams(location.search)
            if (queryParams.has('campaign_id')){
                const id = queryParams.get('campaign_id')
                newSearch = newSearch.replace(`campaign_id=${id}`, '')
            }
            if(search === ''){
                newSearch += '?'
            }
            for (let i = 0; i < catsLength; i++) {
                newSearch = newSearch.replace(`[${i}]`, '')
            }

            newSearch += `&lb_price=${fromPrice}&ub_price=${toPrice}`
            if (hasDiscount){
                newSearch += `&has_discount=${hasDiscount}`
            }
        }
        newSearch += `&page=${page}`
        return newSearch
    }
    const [result, setResult] = useState({
        products: [],
        max_pages: 0,
        merchandise_objs_number: 0,
    })
    const [loading, setLoading] = useState(true)
    const [, getProducts] = useAxios({
        url: `/merchandise/get_all${changeUrl(search)}`,
    })

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const response = await getProducts()
                setResult({
                    products: response.data.data.merchandise,
                    max_pages: response.data.data.max_pages,
                    merchandise_objs_number: response.data.data.merchandise_objs_number,
                })
                setLoading(false)
            } catch (err) {

            }
        }

        if (fetch)
            getResult().then()

    }, [fetch, search, page, fromPrice, toPrice, hasDiscount, showCampaign, getProducts])

    return [loading, result]
}

export default useSearchData