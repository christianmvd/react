import React, { useEffect, useState } from 'react'
import { AiFillWindows } from 'react-icons/ai';

export const ClickTracker2 = () => {

    const [coord, setCoord] = useState({x: 0, y: 0})

    const handleClick = (e) => {
       console.log(e)
       setCoord({x:e.x,y:e.y})
        
    }
    
    useEffect( () => {
        window.addEventListener('click',handleClick)   //cuando declaro eventos con addeventlistener luego tengo que desmontarlo, y siempre se usa dentro de un effect...
        window.addEventListener('mousemove',handleClick)

        return () => { //cuando se desmonta el componente elimino el evento para que no se acumulen....
            window.removeEventListener('click',handleClick)
            window.removeEventListener('mousemove',handleClick)
        }
       

    },[])

    
    return (
        <div className="container" onClick={(e) => console.log(e.nativeEvent)} >   {/*ESTO ES UN EVENTO SINTETICO, CUANDO SE HACE CON JSX CON ONCLICK, PERTENECE A REACT}
           
            <hr/>
            <h3>X:{coord.x} </h3>
           {/* <button className="btn btn-primary" onClick={handleClick}>prueba</button>*/}
            <h3>Y:{coord.y}</h3>
            
        </div>
    )
}