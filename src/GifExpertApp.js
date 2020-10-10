import React, { useState } from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([])

    // const agregar = () => {
    //     setCategorias([...categorias, 'Dr Stone'])
    //     setCategorias(ct => [...ct, 'Dr Stone'])// Otra forma de hacerlo
    // } 

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategorias={setCategorias} />
            <hr />

            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid
                            key={categoria}
                            categoria={categoria}
                        />
                    ))
                }
            </ol>
        </>
    )
}


