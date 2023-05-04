import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import Login from './Login'
import Sign from './Sign'
import SingleCardPage from './SingleCardPage'
import About from './About'
import Contact from './Contact'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<SingleCardPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Sign/>}/>
        <Route path= '*' element={<h1> 404 Page not found</h1>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/contact' element= {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes
