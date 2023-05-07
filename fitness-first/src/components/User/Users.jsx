import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';
import { getUsers } from '../../Redux/DataReducer/action';
import { useStatStyles } from '@chakra-ui/react';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=> state.dataReducer.products);
    const isLoading = useSelector(state=> state.dataReducer.isLoading);
    const [total, setTotal] = useState(0)
   

    useEffect(()=>{
    dispatch(getUsers()).then(()=>{
    })
    },[])

    useEffect(()=>{
      let data= users.reduce((acc, curr)=> acc+curr.charge, 0)
      setTotal(data)
      dispatch({type:"TOTAL", payload:data})
    }, [users])


    return (
        <>
        {
          isLoading? <Spinner/>:<div className="">
          {users.length > 0 &&
            users.map((el) =>{ 
          return  <UserCard key={el.id} {...el} />})}
        </div>
        }
    
       </>
      );
    };
    
    export default Users;
    
