import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from '../components/Gif';
import './ListOfGifs.css'

export default function ListOfGifs({ keyword }) {
    const [loading, setLoading] = useState('false');
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {

                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if (loading) {
        return <i>Está cargando </i>
    }

    return (
        <div className='listOfGifs'>
            {gifs.map(({ id, title, url }) =>
                <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            )
            }
        </div>
    )
}