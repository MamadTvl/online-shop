import {makeUseAxios} from 'axios-hooks'
import axios from 'axios'



export const useAxios = makeUseAxios({
    axios: axios.create({
        baseURL: 'https://api.didartshop.ir',
        headers: {"Authorization": localStorage.getItem('Authorization')}
    })
})