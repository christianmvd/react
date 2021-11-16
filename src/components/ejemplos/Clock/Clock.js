import React, { useEffect, useState} from 'react';

export const Clock = () => {

    const [state, setTime] = useState( new Date())
    const [estado, Pepito] = useState(0)

    let time = new Date();

    const updateTime = () => {
       /* setTime( new Date() )*/
       
        console.log(time)
    }
    useEffect ( () => {
       setTimeout(() => {
           setTime ( new Date() )
       },1000);
    }, [state])

    return (
        <div>
            <br/>
            <h5>{state.toLocaleString()}</h5>
        </div>
    )
}