import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";


export default function SearchResults({ params }) {
    const {keyword} = params
    const { loading, gifs } = useGifs({keyword})
    
    return (
        <>
            <h3>Buscador de gifs</h3>
            
            <ListOfGifs gifs={gifs} loading={loading} />
        </>
    )
}