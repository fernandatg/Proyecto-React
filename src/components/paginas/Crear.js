import React from 'react';

class Crear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="card">
                <div className="card-header">
                    Ingrese los datos del libro
                </div>
                <div className="card-body">
                <form>
                <div className="form-group">
                          <label htmlFor="">Nombre del libro</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Nombre"/>
                        </div>   
                 </form>
                 <form>
                <div className="form-group">
                          <label htmlFor="">Nombre del autor</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Nombre"/>
                        </div>   
                 </form>
                 <form>
                <div className="form-group">
                          <label htmlFor="">Nombre de la Editorial</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Nombre"/>
                        </div>   
                 </form>
                 <form>
                <div className="form-group">
                          <label htmlFor="">Edicion</label>
                          <input type="text" name="" id="" className="form-control" placeholder="Ingrese el Dato"/>
                        </div>   
                 </form>
                 <br></br>
                 <button type="submit" className="btn btn-primary">Agregar libro</button>
                 <button type="button" className="btn btn-secondary">Borrar</button>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
         );
    }
}
 
export default  Crear;