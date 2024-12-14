import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './src/components/home'
import Product from './src/components/product'
import Addproduct from './src/components/addproduct'
import Login from './src/components/login'


const Allrouter = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        
        <Route path="/addproduct" element={<Addproduct/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
      
    </div>
  )
}

export default Allrouter
