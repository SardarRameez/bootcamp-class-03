import React from 'react'
import './App.css'

export const User = ({userName}) => {
    return (
        <div>
            Hello <strong>{userName}</strong>
            <ul>
                <li className="green">Id:123</li>
                <li>gmail: khan@gmail.com</li>
            </ul>
        </div>
    )
}
