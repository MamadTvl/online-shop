import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useSearchData(fetch, search, page, catsLength, fromPrice, toPrice, hasDiscount) {
    const changeUrl = (search) => {
        let newSearch = search
        if(search === ''){
            newSearch += '?'
        }
        for (let i = 0; i < catsLength; i++) {
            newSearch = newSearch.replace(`[${i}]`, '')
        }

        newSearch += `&lb_price=${fromPrice}&ub_price=${toPrice}&page=${page}`
        if (hasDiscount){
            newSearch += `&has_discount=${hasDiscount}`
        }
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

    }, [fetch, search, page, fromPrice, toPrice, hasDiscount])

    return [loading, result]
}

export default useSearchData