import React, { useEffect, useState } from 'react'
import { obtenerPokemon } from './ObtenerPokemon'

export const Poke = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/"
    const [pokemon, setPokemon] = useState()
    const [id, setId] = useState(1)
    const [busqueda, setBusqueda] = useState('')

    const InputCambioEstado = (e) => {
            setBusqueda(e.target.value)
    }

    console.log(busqueda)

    const VoySiguiente = () => {
        setId(id+1)
    }
    const VoyAnterior = () => {
        id > 1 && setId(id-1)
    }

    const ManejoSubmit = (e) => {
        e.preventDefault()
        if (busqueda.length > 2)
        {
            setPokemon(null)

            fetch(`${url}${busqueda}`) //puede llevar tambien un parametro obj cuando hacemos un POST
            .then( (res) => res.json())
            .then( (data) => {
                setPokemon({
                    nombre: data.name,
                    img: data.sprites.front_default
                })
                console.log(data);
            })
            .catch( err => {
                setPokemon({nombre: 'Pokemon no encontrado'})
            })
        }
    }
        
    useEffect( () => {
        setPokemon(null)

     /*   fetch(`${url}${id}`) //puede llevar tambien un parametro obj cuando hacemos un POST
        .then( (res) => res.json())
        .then( (data) => {
            setPokemon({
                nombre: data.name,
                img: data.sprites.front_default
            })
            console.log(data);
        })
        .catch("fracaso la llamada")*/
        obtenerPokemon(id)   //hago lo mismo pero usando una promise propia....en un componente obtenerpokemon
            .then( (res) => {
                setPokemon(res)
            })
        
    },[id])
    
    
    

    return(
    <div className="container my-5">
        <h2>Pokemon</h2>
        <hr/>
        {
            !pokemon ? <h3>Cargando...</h3> :
            <>
                <h3>{pokemon.nombre}</h3>
                <img src={pokemon.img} alt={pokemon.nombre} />
            </>
        }
        <button className="btn btn-primary" onClick={VoyAnterior}>Anterior</button>
        <button className="btn btn-primary" onClick={VoySiguiente}>Siguiente</button>
        <hr/>
        <form onSubmit={ManejoSubmit}>
            <input className="form-control" type="text" value={busqueda} onChange={InputCambioEstado}></input>
        </form>
    </div>
    )
    
}

