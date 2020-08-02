import React from 'react'
import logo from './logo.jpg'

export const MediaCard = () => {
    return (
        <div>
            <h2>Title</h2>
            <p>This is <strong>body</strong> of the page.</p>
            <img src={logo} alt="img"></img>
        </div>
    )
}
