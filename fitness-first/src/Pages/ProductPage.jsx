<<<<<<< HEAD
import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/DataReducer/action'
import "./ProductPage.css"
import SideBar from '../components/SideBar'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'

const ProductPage = () => {

  const gymData = useSelector((store)=> store.DataReducer.gymData)
  const isLoading = useSelector((store)=> store.DataReducer.isLoading)
  const dispatch = useDispatch()


  const [searchparams] = useSearchParams();

  // const products = useSelector((store) => store.productReducer.products)

  const location = useLocation()

  // const dispatch = useDispatch();

let obj = {
  params:{
      gender:searchparams.getAll("gender"),
      category:searchparams.getAll("category"),
      _sort:searchparams.get("order") && "price",
      _order:searchparams.get("order"),
      _limit:6,
      page:searchparams.getAll("page"),
      q:searchparams.getAll("q")
  }
}
  useEffect(()=>{
     dispatch(getData(obj))
  },[location.search])


  return (
    <div className='productPage_section'>

           <div className='sidebar_div'>
            <SideBar/>
           </div>

            <div className='product_div'>
            {/* <h1>ProductPage</h1>  */}
            {/* <h1>exercise Types</h1> */}
            {
              isLoading ? <h1>Loading...</h1> : gymData.map((el)=>{
                return <div key={el.id}>
                  <img src={el.image} alt="altimages" />
                  <p>exercise :{el.exercise}</p>
                  <p>category : {el.category}</p>
                  {/* <p>trainer : {el.gh-name}</p> */}
                  <p>price: ₹{el.price}</p>
                  <NavLink to={`/products/${el.id}`}><p>Read More Details....</p></NavLink>
                </div>
              })
            }
            </div>
=======
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
        <h1>Products</h1>
    <DIV>
      
      <div className='sideBar'><Sidebar/></div>
      <div className='productList'><ProductList/></div>
     
    </DIV>
>>>>>>> 249a478c498d748fb885572bf14f8fe7bc5d04c4
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