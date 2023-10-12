import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ListUser } from "../ListUser"

export default function Detail() {
    const { id } = useParams()


    const profile = ListUser.find((item) => item.id === parseInt(id))
    return (
        <div>
            <Link to={'/'}>Voltar</Link>
            <h1>{profile.name}</h1>
            <h3>{profile.proffesion}</h3>
            <h3>{profile.year}</h3>
        </div>
    )
}