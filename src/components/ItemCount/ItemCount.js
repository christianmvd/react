import React from "react";

export const ItemCount = ({cantidad, modify, max}) =>
{
    const handleRestar = () =>{
        if (cantidad > 0)
             modify(cantidad - 1)
    }
    const handleSumar = () =>{
        if (cantidad < max)
            modify(cantidad + 1)
    }

    return (
    <div>
        <button className="btn btn-primary mx-3" onClick={handleRestar}>
           - </button>
        <span>{cantidad}</span>
        <button className="btn btn-primary mx-3" onClick={handleSumar}>
           + </button>
    </div>)
}