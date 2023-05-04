import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../Redux/DataReducer/action";
import { Card } from "./Card";
import { useLocation, useSearchParams } from "react-router-dom";





const CardList = () => {
  const products = useSelector( state => state.dataReducer.products);
  const dispatch = useDispatch();

  
  useEffect(()=>{
  //   let params= {
  //     gender:searchParams.getAll("gender"), 
  //     category: searchParams.getAll("Category"),
  //     _sort: searchParams.get('order') && 'price',
  //     _order: searchParams.get('order')
      
  //   }
    dispatch(getCards())
  },[])

  return (


    <div>
    

    </div>
  )
}

export default CardList
