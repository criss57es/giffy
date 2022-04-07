import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import './index.css'

const POPULAR_GIFS = ['Matrix', 'Chile', 'Colombia', 'Ecuador']

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        //Navegar a otra ruta
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }


    return (
        <>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword} />
            </form>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}> Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>

            <h1 className="App-title" > Últimos gifs buscados</h1>

            <ListOfGifs gifs={gifs} loading={loading} />

        </>
    )
}