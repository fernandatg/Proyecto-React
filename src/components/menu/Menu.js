import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-info">
       <div className="container-fluid">
          <a className="navbar-brand text-dark" href="/">Bienvenidos a BiblioTec</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link text-dark text-center" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-center text-dark" to="/crear">Agregar nuevo libro</Link>
                </li>
                <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar libro" aria-label="search"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
             </ul>
          </div>
       </div>
    </nav>
 </div>
  );
}

export default Menu;
