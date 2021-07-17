import React from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom";
//import CarrouselInicio from '../components/carrousel/CarrouselInicio';
import Menu from './components/menu/Menu';
import Libros from './components/paginas/Libros';
import Crear from './components/paginas/Crear';
import Footer from './components/footer/Footer';




function App() {
    return (
       <Router>
        <Menu/>
        <div className="container">
          <div>
            <br></br>
          <Route exact path="/" component={Libros}></Route>
          <Route exact path="/crear" component={Crear}></Route>
          </div>
        </div>
        <br></br>
        <Footer/>
        </Router>
         
    );
}

export default App;
