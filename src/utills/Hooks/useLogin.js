import {useEffect, useState} from "react";
import axios from "axios";


function useLogin(fetch) {
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)
    const baseUrl = "https://api.didartshop.ir"
    useEffect(() => {
        async function getResult() {
            try {
                setLoading(true)
                const config = {
                    headers: {
                        "Authorization": localStorage.getItem('Authorization')
                    }
                }
                const response = await axios.get(`${baseUrl}/user/get_profile`, config)
                setIsLogin(response.status === 200)
            } catch (error) {
                setIsLogin(false)
            }
            setLoading(false)
        }

        if(fetch){
            getResult().then()
        }
    }, [fetch])

    return [isLogin, loading]
}

export default useLogin