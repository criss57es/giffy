import React from "react";
import ListOfGifs from "../../components/ListOfGifs";


export default function SearchResults({ params }) {
    return (
        <>
            <h3>Buscador de gifs</h3>
            <ListOfGifs keyword={params.keyword} />
        </>
    )
}