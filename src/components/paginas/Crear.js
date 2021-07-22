import React, { useState } from "react";
import ConexionApi from "../services/ConexionAxios";

function Crear () {

    const variablesInicio={
        nombre:"",
        autor:"",
        editorial:"",
        edicion:"",
        enlace:""
    };

    const [values, setValues]=useState(variablesInicio)

    const onChange=(e)=>{
        const{name, value}=e.target;
        setValues({...values,[name]:value});
    }

    const guardarLibros=async()=>{
        await ConexionApi.post("/libro/crearLibro",{
            nombre: values.nombre,
            autor: values.autor,
            editorial: values.editorial,
            edicion: values.edicion,
            enlace: values.enlace
        }).then((res)=>{
            console.log(res);
            //console.log(data);
        });
    };

    const onClick= (e) =>{
        e.preventDefault();
        /*alert(
            "Los datos son:" +
              values.matricula +
              " " +
              values.nombre +
              " " +
              values.correo +
              " " +
              values.telefono
          );*/
        guardarLibros();
        setValues(variablesInicio);

    }

         return ( 
            <div className="card">
                <div className="card-header">
                    Ingrese los datos del libro
                </div>
                <div className="card-body">
                <form onSubmit={onClick}>
                <div className="form-group">
                          <label htmlFor="">Nombre del libro</label>
                          <input type="text" 
                          name="nombre"
                          onChange={onChange} 
                          value={values.nombre}
                          className="form-control" 
                          placeholder="Ingrese el Nombre"/>
                        </div>   
                 </form>
                 <form onSubmit={onClick}>
                <div className="form-group">
                          <label htmlFor="">Nombre del autor</label>
                          <input type="text" 
                           name="autor" 
                           onChange={onChange}
                           value={values.autor} 
                           className="form-control" 
                           placeholder="Ingrese el Nombre"/>
                        </div>   
                 </form>
                 <form onSubmit={onClick}>
                <div className="form-group">
                          <label htmlFor="">Nombre de la Editorial</label>
                          <input type="text" 
                          name="editorial" 
                          onChange={onChange}
                          value={values.editorial} 
                          className="form-control" 
                          placeholder="Ingrese el Nombre"/>
                        </div>   
                 </form>
                 <form onSubmit={onClick}>
                <div className="form-group">
                          <label htmlFor="">Edicion</label>
                          <input type="text" 
                          name="edicion"
                          onChange={onChange} 
                          value={values.edicion} 
                          className="form-control" 
                          placeholder="Ingrese el Dato"/>
                        </div>   
                 </form>
                 <form onSubmit={onClick}>
                <div className="form-group">
                          <label htmlFor="">Enlace</label>
                          <input type="text" 
                          name="enlace"
                          onChange={onChange} 
                          value={values.enlace} 
                          className="form-control" 
                          placeholder="Ingrese el Dato"/>
                        </div>   
                 </form>
                 <br></br>
                 <button type="submit" className="btn btn-primary" onClick={onClick}>Agregar libro</button>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
         );
    }
 
export default  Crear;