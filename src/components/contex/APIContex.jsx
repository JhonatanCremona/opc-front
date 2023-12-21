import { useState, createContext, useEffect } from "react";

export const APIContext = createContext();
export const APIContextProvaider = ({ children }) => {

    const API_URL = `http://localhost:5000`;
 
    const options = {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    }
    
    useEffect(() => {
        fetch(API_ETIQUETAS_LISTAR, options)
            .then(response => response.json()) 
            .then(json => setEtiquetas(json))
            .catch(err => console.log(err));
        fetch(apiProducto, options)
            .then(response => response.json()) 
            .then(json => setProducto(json))
            .catch(err => console.log(err));
        fetch(`${API_URL}/etiquetas/${idEtiqueta}`, options)
            .then(response => response.json())
            .then(json => setEtiqueta(json))
            .catch(err => console.log(err));
    },[]);

    console.log("CONTEXT",etiqueta)
    console.log(resultSerchEtiqueta);
    const ordernarId = etiquetas.sort((a, b) => a.id - b.id)
    return (
        <APIContext.Provider value={{ordernarId, producto,idEtiqueta, setIdEtiqueta}}>
            {children}
        </APIContext.Provider>
    )
}