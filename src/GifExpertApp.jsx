import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
import { GifGrid, AddCategory } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])
    // console.log(categories);

    const addCategories = ( newCategory ) => {
        

        if(categories.includes( newCategory )) {
            return;
        }
        setCategories( [newCategory ,...categories] );
    };


  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

        <AddCategory onAddCategories={ addCategories }/>

         {/* Boton de reinicio */}
         <button onClick={() => setCategories([])} className='boton-reinicio'>Reiniciar busqueda</button>
  
        
        {
          categories.map(category => {
            return (
              <GifGrid key={category} category={category} />
            );
          })
        }
       
        
            {/* Gif Item */}
    </>
  )
}
