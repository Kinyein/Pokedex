import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/actions/PokemonActions'
import { CardsContainer, MarcaPaginas } from '../styles/listStyle'
import DetailPoke from './DetailPoke'

const ListPokemons = () => {

	const dispatch = useDispatch()

	const [pokemon, setPokemon] = useState({
		img: [],
		page: 0,
		limit: 20,
	})

	const { page, limit } = pokemon

	const { pokemonList } = useSelector(store => store.pokemon)

	useEffect(() => {
		dispatch(getData(page, limit))

	}, [page, limit, dispatch])

	function nextPage() {
		if (page === 0) {
			setPokemon({
				...pokemon,
				page: 20
			})
		} else {
			setPokemon({
				...pokemon,
				page: page + 10
			})
		}
	}

	function returnPage() {
		if (page > 0) {
			setPokemon({
				...pokemon,
				page: page - 10
			})
		} else {
			setPokemon({
				...pokemon,
				page: 0
			})
		}
	}

	return (
		<>
			<CardsContainer>
				{pokemonList?.map((poke, index) => (
					<div className='card' key={index}>
						<span>{poke.name.toUpperCase()}</span>

						<DetailPoke pokemon={poke.name} />

						{/* <img src={img[index]} alt={poke.name} /> */}
					</div>
				))}
			</CardsContainer>


			<MarcaPaginas>
				{page === 0 ? null : <button className='back' onClick={returnPage}>Previus</button>}
				<button className='next' onClick={nextPage}>Next</button>
			</MarcaPaginas>
		</>
	)
}

export default ListPokemons