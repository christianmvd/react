import React from 'react'
import "./footer.css"
import { Clock } from '../ejemplos/Clock/Clock'

export const Footer = ()=> {
    return (
        <div className="footer">
            <p className="legend">Informatica moderna - Autor: Christian Sabat <Clock /></p>        
        </div>
    )
}
