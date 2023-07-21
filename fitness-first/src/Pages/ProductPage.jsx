
import React from 'react'
// import styled from 'styled-components'
import "./ProductPage.css"
import ProductList from '../components/ProductList'
import Sidebar from "../components/SideBar"

const ProductPage = () => {
  return (
    <div className='ralative mt-[2%] gap-2 ' style={{textAlign:'center'}}>
        <h1 className='text-4xl text-slate-100 mb-8 mt-25 md:mt-1 font-bold'>Excercises</h1>
    <div className='productPage_section'>
      
      <div className='sideBar mr-3'><Sidebar/></div>
      <div className='productList'><ProductList/></div>
     
    </div>
    </div>
  )
}


export default ProductPage