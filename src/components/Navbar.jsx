import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div style={{height:"80%",width:"100%"}}>
      <NavLink style={{padding:"10%"}} to={'/'}>HOME</NavLink>
      <NavLink   style={{padding:"10%"}} to={'/Product'}>Product</NavLink>
      <NavLink  style={{padding:"10%"}} to={'/Addproduct'}>Addproduct</NavLink>
      <NavLink  style={{padding:"10%"}} to={'/Login'}>Login</NavLink>
    </div>
  )
}

export default Navbar
