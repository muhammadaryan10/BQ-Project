import './App.css';

import React from "react";
import Home from './Componenets/Home';
import Contact from './Componenets/Contact'
import About from './Componenets/About'; 
import { Route, Routes, Outlet } from "react-router-dom";
import CartPage from './Componenets/CartPage';
import ProductContainer from './Componenets/ProductContainer';
import ProductDetail from './Componenets/ProductDetail';
import Usermanage from "./Componenets/Dashboard/Usermanage"
import Productmanage from "./Componenets/Dashboard/Productmanage"
import Signup from './Componenets/Signup';
import LoginPage from './Componenets/Login';
import AddProduct from './Componenets/AddProduct';
import ResponsiveDrawer from './Componenets/Dashboard/Dashboard';

function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductContainer/>}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
        <Route path='/Usermanage' element={<Usermanage/>}/>
        <Route path='/Productmanage' element={<Productmanage/>}/>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<ResponsiveDrawer/>} />
        <Route path="/AddProduct" element={<AddProduct />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
