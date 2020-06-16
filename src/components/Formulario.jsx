import React, {useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import {RecetasContext} from '../context/RecetasContext';

const Formulario = () => {

    //seleccion del usurio
    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });
    //Obtener desde state
    const {categorias} = useContext(CategoriasContext);
    const {buscarRecetas, guardarConsultar} = useContext(RecetasContext);
    //console.log(categorias);

    //funcion para leer contenidos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-md-12"
            onSubmit={ e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        id="nombre"
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>  
                <div className="col-md-4">
                    <select 
                        id="categoria"
                        name="categoria"                         
                        className="form-control"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">Selecciona una Categoría...</option>   
                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}                        
                        >{categoria.strCategory}</option>                        
                        ))}

                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;