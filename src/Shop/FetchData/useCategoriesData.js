import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function useCategoriesData(fetch) {
    const [result, setResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [, getCategories] = useAxios({
        url: '/admin/category_mng/get_category',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const pagesResponse = await getCategories({
                    url: '/admin/category_mng/get_category?page=0'
                })
                const pages = pagesResponse.data.data.pages
                let categoriesResponse = []
                for (let i = 0; i <= pages; i++) {
                    categoriesResponse.push(await getCategories({
                        url: `/admin/category_mng/get_category?page=${i}`
                    }))
                }
                let categories = []
                for (let i = 0; i < categoriesResponse.length; i++) {
                    const category = categoriesResponse[i].data.data.categories
                    for (let j = 0; j <category.length; j++) {
                        categories.push({...category[j], checked: false})
                    }
                }
                setResult(categories)
                setLoading(false)
            } catch (err) {
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()

    }, [fetch])

    return [loading, result]
}

export default useCategoriesData