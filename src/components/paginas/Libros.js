import React, { useState, useEffect } from "react";
import Api from "../services/ConexionAxios";

function Libros () {

   const variablesInicio={
      nombre:"",
      autor:"",
      editorial:"",
      edicion:"",
      enlace:""
  };

   const [values, setValues]=useState(variablesInicio);
   const [libro, setLibros]=useState([]); 

   const guardarLibros=async()=>{
      await Api.post("/libro/crearLibro",{
          nombre: values.nombre,
          autor: values.autor,
          editorial: values.editorial,
          edicion: values.edicion,
          enlace: values.enlace
      }).then((res)=>{
          console.log(res);
          //console.log(data);
      });
      ListarLibros();
  };


      const ListarLibros=async()=>{
      const respuesta=await Api.get('/libro/listarLibros');
      setLibros(respuesta.data);
      console.log(respuesta.data);
  }

  const EliminarLibro=async(id)=>{
   const eliminar=await Api.delete(`/libro/eliminarLibro/${id}`);
   console.log(eliminar.data);
   ListarLibros();
};


       useEffect(() => {
       ListarLibros();
          }, [])

    return (
    <div>
      <div class="container">
         <div class="row">
         {libro.map((libr)=>(
                   
                   <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                   <div class="card">
                   <div class="card-body">
                  
                     <h5 class="card-title">{libr.nombre}</h5>
                     <p class="card-text">{libr.autor}</p>
                     <ul class="list-group list-group-flush">
                      <li class="list-group-item">{libr.editorial}</li>
                      <li class="list-group-item">{libr.edicion}</li>
                      <a href={libr.enlace} class="card-link">Link del libro</a>
                     </ul>
                     <button className = "btn btn-outline-danger" onClick={()=>EliminarLibro(libr._id)}>Eliminar</button>
    
                   </div>
                   </div>
                </div>

                  ))}
           

         </div>
       </div>
    </div>
    )
}

export default Libros





