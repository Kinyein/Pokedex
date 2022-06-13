import { types } from "../types/types"

const initState = {
    pokemonList: [],
    pokemonImg: []
}

export const pokemonReducers = (state = initState, action) => {
    switch (action.type) {
        case types.list:
            return {
                pokemonList: action.payload
            }
        case types.search:
            return {
                pokemonList: state.pokemonList.filter(poke => poke.name.includes(action.payload.toLowerCase()))
            }
        case types.getImg:
            return {
                pokemonList: [...state.pokemonList],
                pokemonImg: action.payload
            }
        default:
            return state
    }
}   