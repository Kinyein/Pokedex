import axios from 'axios'
import { types } from '../types/types'

export const getData = (page, limit = 20) => {
    return dispatch => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${page}/limit=${limit}`)
            .then(resp => {
                const list = resp.data.results
                dispatch(getDataSinc(list))
                // dispatch(getImg(list))
            })
            .catch(error => console.log(error))
    }
}

const getDataSinc = (listPokemon) => {
    return {
        type: types.list,
        payload: listPokemon
    }
}

export const search = (search) => {
    return {
        type: types.search,
        payload: search
    }
}