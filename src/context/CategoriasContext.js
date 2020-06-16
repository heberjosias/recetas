import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Creación de context
export const CategoriasContext = createContext();

// Provider donde se encuentran las funciones y state

const CategoriasProvider = (props) => {

    //crear el state del context
    const [categorias, guardarCategorias] = useState([]);

    //llamado a la API
    useEffect(() => {
        
        const ObtenerCategorias = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categorias = await axios.get(url);
            //console.log(categorias.data.drinks);
            guardarCategorias(categorias.data.drinks);


        }
        ObtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider
            value={{
                categorias
                
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;
