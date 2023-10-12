
import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

const API = "https://pokeapi.co/api/v2/pokemon/"

export function PokemonDatail() {
    const [data, setData] = useState([])
    const [sprite, setSprite] = useState(true)
    const { name } = useParams()

    // async function fetchAPI(){
    //     try{
    //         const resposta = await fetch(API+name)
    //         const data = await resposta.json();
    //         setData(data)
    //     }catch (erro){
    //         console.error("Erro ao consumir a", erro)
    //     }
    // }

    useEffect(() => {
        fetch(API + name)
            .then((resposta) => resposta.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
            .catch((erro) => {
                console.error("Erro ao formatar", erro)
            })

    }, [])

    const { id, name: pokemonName, base_experience, height, order, weight } = data;

    function toggleSprite() {
        setSprite((value) => !value)
    }

    return (
        <div>
            <Link to={'/pokemon'}>Voltar</Link>
            <h1>POKE {sprite}</h1>
            <h2>Nome {pokemonName}</h2>
            <h2>Altura {height}</h2>
            <h2>Experiencia {base_experience}</h2>
            <img onClick={toggleSprite} src={!sprite ? data?.sprites?.back_default : data?.sprites?.front_default} className={`pokemon-sprite ${sprite ? 'flip' : ''}`} />

        </div>


    )
}