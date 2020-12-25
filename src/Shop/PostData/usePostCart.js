import {useEffect, useState} from "react";
import {useAxios} from "../../utills/Hooks/useAxios";


function usePostCart(fetch) {
    const [result, setResult] = useState()
    const [loading, setLoading] = useState(true)
    const [, create_box] = useAxios({
        url: '/basket/create_box',
        method: 'POST',
    }, {manual: true})
    const [, create_basket] = useAxios({
        url: '/basket/create_basket',
        method: 'POST',
    }, {manual: true})

    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const localStorageCart = JSON.parse(localStorage.getItem('cart'))
                if (localStorageCart) {
                    let response = []
                    for (let i = 0; i < localStorageCart.length; i++) {
                        response.push(await create_box({
                            data: {
                                "count": localStorageCart[i].count,
                                "merchandise": localStorageCart[i].id,
                                "merchandise_price": localStorageCart[i].price,
                                "merchandise_price_with_discount": localStorageCart[i].price_with_discount,
                                "merchandise_percent_of_discount": localStorageCart[i].percent_of_discount,
                                "size": localStorageCart[i].size,
                                "color": localStorageCart[i].color,
                            }
                        }))
                    }
                    const boxes = []
                    for (let i = 0; i < response.length; i++) {
                        boxes.push(response[i].data.data.id)
                    }
                    // const basketResponse = await create_box({
                    //     data: {
                    //         "boxes_list": boxes,
                    //     }
                    // })
                    setResult([
                        response[response.length - 1].data.data.total_box_price
                        // , basketResponse
                    ])
                    setLoading(false)
                }
            } catch (err) {
                setLoading(false)
            }
        }
        if(fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default usePostCart