import React from 'react'
import './Gif.css'

export default function Gif({ id, title, url }) {
    return (
        <a 
        href={`gif/${id}`}
        className='gif'>
            <h6>{title}</h6>
            <img alt={title} src={url} />

        </a>
    )
}