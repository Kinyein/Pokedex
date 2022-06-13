import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getData, search } from '../redux/actions/PokemonActions'
import { NavStyled } from '../styles/navStyle'

const Navbar = () => {

    const dispatch = useDispatch()

    const [searchBar, setSearchBar] = useState({
        pokeName: ''
    })

    function handleChange(e) {
        dispatch(search(e.target.value))

        setSearchBar({
            [e.target.name]: e.target.value
        })
    }

    function keyDown(e) {
        if (e.key === "Backspace") {
            dispatch(getData())
        }
    }

    return (
        <div>
            <NavStyled>
                <img src="https://craig1123.github.io/pokedex/img/Pokedex.png" alt="pokedex" />

                <input
                    type="text"
                    placeholder='Search Pokemon'
                    value={searchBar.pokeName}
                    name='pokeName'
                    onChange={handleChange}
                    onKeyDown={keyDown}
                />
            </NavStyled>
        </div>
    )
}

export default Navbar