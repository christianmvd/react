import React, { useEffect, useState } from 'react'

export const ClickTracker = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        setCounter( counter + 1)
    }

    useEffect( () => {
        setTimeout(() => {
            setTimeout( new Date())
        }, 1000);
    })

    return (
        <div className="container">
            <button onClick={handleCounter} className="btn btn-primary">
                Clickeame!
            </button>
            <hr/>
            <h3>Cantidad de clicks:</h3>
            <h3>FyH: {counter > 0 ? new Date().toLocaleString() + "Clicks:" + counter : "No hay clicks aun"}</h3>
            <h3>prueba: {useEffect}</h3>
        </div>
    )
}