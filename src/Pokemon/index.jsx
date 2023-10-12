
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"

const API = "https://pokeapi.co/api/v2/pokemon"



export function PokemonPage() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(API)
            .then((resposta) => resposta.json())
            .then((data) => {
                setData(data.results)
            })
            .catch((erro) => {
                console.error("Erro ao formatar", erro)
            })

    }, [])

    console.log(data)


    return (
        <div>
            <h1>Pokemon API</h1>
            {
                data.map((result) => (
                    <div key={result.name}>
                        <Link to={'/pokemon/' + result.name}>
                            <h1>{result.name}</h1>
                        </Link>

                    </div>
                ))
            }
        </div>
    )
}