



import React from 'react'
import styled from 'styled-components'

import ProductList from '../components/ProductList'
import Sidebar from "../components/SideBar"

const ProductPage = () => {
  return (
    <div className='ralative mt-[4%] gap-2' style={{textAlign:'center'}}>
        <h1 className='text-4xl text-slate-100 mb-8'>Excercises</h1>
    <DIV>
      
      <div className='sideBar mr-1'><Sidebar/></div>
      <div className='productList'><ProductList/></div>
     
    </DIV>
    </div>
  )
}

const DIV = styled.div`
  display: flex;
   .sideBar{
    width: 20%
  }
  .productList{
    width: 80%;
  }
  
`

export default ProductPage