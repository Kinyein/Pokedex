import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { PokeCardDetail } from "../styles/listStyle"

function DetailPoke({ pokemon }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [pokemonDetail, setPokemonDetail] = useState({
        name: '',
        abilities: null,
        img: '',
        type: ''

    })

    const { name, abilities, img, type } = pokemonDetail

    useEffect(() => {
        if (isOpen === true) {
            getPoke()
        }
    }, [isOpen])


    const getPoke = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(resp => {
                const data = resp.data

                setPokemonDetail({
                    name: data.name.toUpperCase(),
                    abilities: data.abilities,
                    img: data.sprites.other.dream_world.front_default,
                    type: data.types[0].type.name
                })
            })
            .catch(error => console.log(error))
    }



    return (
        <>
            <Button style={{backgroundColor: '#284D63', color: 'white'}} onClick={onOpen}>See Pokemon</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <PokeCardDetail>
                            <img src={img} alt={name} />

                            <div>
                                <p className="type">Type: {type}</p>

                                <span><strong>Abilities: </strong></span>

                                {abilities !== null ? abilities.map((a, index) => (
                                    <span key={index}>
                                        <p> - {a.ability.name}</p>
                                    </span>
                                )) : <p>Abilities didn't can't load</p>}
                            </div>
                        </PokeCardDetail>



                    </ModalBody>

                    <ModalFooter>
                        <Button style={{backgroundColor: '#FD1956'}} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default DetailPoke