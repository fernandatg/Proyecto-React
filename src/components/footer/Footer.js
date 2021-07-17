import React from 'react';
import { Link } from 'react-router-dom';

const Footer =()=>{

    return(
        <div>
            <footer className='text-white py-4 bg-primary'>
                <div className='container'>
                    <nav className='row'> 
                    <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                         <img src='./img7.png' className='mx-2' height='200'/>
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2 text-center'>BiblioTec</li>
                        <li className='text-justyfy'>En esta aplicacion podras encontrar los libros de tu agrado para poder agregarlos a tu lista de favoritos y poder leerlos cuando gustes.</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled text-center'>
                        <li className='font-weight-bold mb-2 text-center'>Enlaces</li>
                        <li>
                            <Link to='/' className='text-reset'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/crear' className='text-reset'>Nuevo</Link>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-2 text-center'>Redes Sociales</li>
                        <li className='d-flex justify-content-between'>
                             <i className="bi bi-facebook"/>
                             <i className="bi bi-instagram"/>
                             <i className="bi bi-youtube"/>
                        </li>
                    </ul>
                    <div className='container'>
                        <p className='text-center'>CORREO: torresgarcia39@hotmail.com</p>
                    </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer