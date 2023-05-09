// import React, { useEffect } from 'react'
// import {  useDispatch, useSelector } from 'react-redux'
// import { getData } from '../Redux/DataReducer/action'
// import "./ProductPage.css"
// import SideBar from '../components/SideBar'
// import { useLocation, useSearchParams } from 'react-router-dom'

// const ProductPage = () => {

//   const gymData = useSelector((store)=> store.dataReducer.products)
//   const dispatch = useDispatch()


//   const [searchparams] = useSearchParams();

//   // const products = useSelector((store) => store.productReducer.products)

//   const location = useLocation()
//   console.log(location.search)

 

// let obj = {
//   params:{
//       gender:searchparams.getAll("gender"),
//       category:searchparams.getAll("category"),
//       _sort:searchparams.get("order") && "price",
//       _order:searchparams.get("order"),
//       _limit:6,
//       page:searchparams.getAll("page"),
//       q:searchparams.getAll("q")
//   }
// }
//   useEffect(()=>{
//      dispatch(getData(obj))
//   },[location.search])





//   // useEffect(()=>{
//   //  dispatch(getData())
//   // },[])

//   return (
//     <div className='productPage_section'>

//            <div className='sidebar_div'>
//             <SideBar/>
//            </div>

//             <div className='product_div'>
//             {/* <h1>ProductPage</h1>  */}
//             {/* <h1>exercise Types</h1> */}
//             {
//               gymData.map((el)=>{
//                 return <div key={el.id}>
//                   <img src={el.image} alt="altimages" />
//                   <p>{el.exercise}</p>
//                 </div>
//               })
//             }
//             </div>
//     </div>
//   )
// }



// export default ProductPage



import React from 'react'
import styled from 'styled-components'

import ProductList from '../components/ProductList'
import Sidebar from "../components/SideBar"

const ProductPage = () => {
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color:"white",fontSize:"30px"}}>Products</h1>
    <DIV>
      
      <div className='sideBar'><Sidebar/></div>
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