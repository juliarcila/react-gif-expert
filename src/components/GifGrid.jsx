import React, { useState, useEffect } from 'react'
import { getGifs } from '../functions/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
 
    

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs( category );
    
    return (
        <>
            <h3 className='titulo'>{category}</h3>

            {
                isLoading ? (<h2>Cargando...</h2>) : null
            }

            <div className='card-grid'>
                {   gifs.map(gif => (
                    <GifItem 
                        key={gif.id} 
                        url={gif.url}
                        title={gif.title}    
                    />
                )) 
                }
            </div>

        </>
    )
}
