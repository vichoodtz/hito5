
import './App.css'
import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pizza from './pages/Pizzas';
import { Outlet } from 'react-router-dom';

const App = () => {
   return (
      <div className="d-flex flex-column min-vh-100">
           <Navbar />
           <Outlet />
         <Footer/>
      </div>
   );
};



export default App
