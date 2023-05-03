import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import SignUpLogin from './SignUpLogin'
import SingleCardPage from './SingleCardPage'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<SingleCardPage/>}/>
        <Route path='/signAndLogin' element={<SignUpLogin/>}/>
        <Route path= '*' element={<h1> 404 Page not found</h1>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
