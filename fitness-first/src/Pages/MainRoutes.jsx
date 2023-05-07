import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import Login from './Login'
import Sign from './Sign'
import SingleCardPage from './SingleCardPage'
import About from './About'
import Contact from './Contact'
import BmiCalc from '../components/BmiCalc'
import Admin from './Admin'
import Users from '../components/User/Users'
import Trainers from '../components/User/Trainers'
import PrivateRoutes from '../authentication/PrivateRoutes'

const MainRoutes = ( ) => {
  return (
    <div className='' >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<PrivateRoutes><SingleCardPage/></PrivateRoutes> }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Sign/>}/>
        <Route path= '*' element={<h1> 404 Page not found</h1>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/contact' element= {<Contact/>}/>
        <Route path='/bmi' element = {<PrivateRoutes><BmiCalc/></PrivateRoutes> }/>
        <Route path='/admin' element = {<PrivateRoutes><Admin/></PrivateRoutes>}>
        <Route index element={<Users/>} />
          <Route path="trainer" element={<Trainers />} />
          {/* <Route path="account" element={<Amount />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default MainRoutes
