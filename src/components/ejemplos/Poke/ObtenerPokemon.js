export const obtenerPokemon = (consulta) => {
    return new Promise( (resolve, reject) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${consulta}`)
            .then ( (res) => res.json() )
            .then ( (datos) => {
                resolve({
                    nombre: datos.name,
                    img: datos.sprites.front_default
                })
            })
    })
}
