import React from 'react';
import './App.css';
import { Home } from './screens/Home';
import { Ressource } from './screens/Ressource';
import {Routes,Route,NavLink } from 'react-router-dom';
function App() {
  return (
    
  <div>
    <header>
    <nav>
        <NavLink to='/'>ACCUEIL</NavLink><br></br>
        <NavLink to='/ressource'>Ressource</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/ressoure' element={<Ressource/>}/>
      </Routes>
    </header>
      
    
  </div>
   
  );
}

export default App;
