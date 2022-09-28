import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<h1>Products</h1>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route></Route>
    </Routes>
    </div>
  )
}

export default AllRoutes