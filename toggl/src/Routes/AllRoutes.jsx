import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Product from './Product'
import SignUp from './Signup'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Product/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route></Route>
    </Routes>
    </div>
  )
}

export default AllRoutes