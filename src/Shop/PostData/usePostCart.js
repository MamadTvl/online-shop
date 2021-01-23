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
                const localStorageCart = JSON.parse(localStorage.getItem('cart'))
                if (localStorageCart) {
                    setLoading(true)
                    let response = []
                    for (let i = 0; i < localStorageCart.length; i++) {
                        response.push(await create_box({
                            data: {
                                "count": localStorageCart[i].count,
                                "merchandise": localStorageCart[i].id,
                                "size": localStorageCart[i].size,
                                "color": localStorageCart[i].color,
                            }
                        }))
                    }

                    const boxesId = [], boxes = []
                    for (let i = 0; i < response.length; i++) {
                        boxesId.push(response[i].data.data.id)
                        boxes.push(response[i].data.data)
                    }
                    const basketResponse = await create_basket({
                        data: {
                            "boxes_list": boxesId,
                        }
                    })
                    setResult({
                        boxes: boxes,
                        basket: basketResponse.data.data,
                    })
                    setLoading(false)
                }
                else {
                    setLoading(false)
                }
            } catch (err) {
                localStorage.removeItem('cart')
                setLoading(false)
            }
        }

        if (fetch)
            getResult().then()
    }, [fetch])

    return [loading, result]
}

export default usePostCart