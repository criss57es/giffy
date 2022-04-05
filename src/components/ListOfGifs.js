import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from '../components/Gif';

export default function ListOfGifs({ keyword }) {

    const [gifs, setGifs] = useState([]);
    useEffect(() => {
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, [keyword])
    return gifs.map(({ id, title, url }) =>
        <Gif
            id={id}
            key={id}
            title={title}
            url={url}
        />
    )
}