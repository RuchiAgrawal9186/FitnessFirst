import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';
import { deleteProduct, getUsers } from '../../Redux/DataReducer/action';


const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=> state.dataReducer.users);
    console.log(users)
    const isLoading = useSelector(state=> state.dataReducer.isLoading);
    const [total, setTotal] = useState(0)

    useEffect(()=>{
    dispatch(getUsers())
    },[])

    useEffect(()=>{
      let data= users && users.reduce((acc, curr)=> acc+curr.charge, 0)
      setTotal(data)
      dispatch({type:"TOTAL", payload:data})
    }, [users])

    const handleDelete = (id)=>{
      dispatch(deleteProduct(id)).then(()=>{dispatch(getUsers())})
    }


    // const handleChange = (e)=>{
      
    //   let value=0
    //   switch(e.target.value){
    //     case "pro": value=45;
    //     break;
    //     case "premium": value=30;
    //     break;
    //     case "basic": value=25;
    //     break;
    //     default: value=charge
    //   }
    //   console.log(value)
    
    //   dispatch(patchUser(id,{category:e.target.value, charge:value})).then(()=>{dispatch(getUsers())})
    // }
    return (
        <>
        {
          isLoading? <Spinner/>:<div className="">
          {users &&
            users.map((el) =>{ 
          return  <UserCard key={el.id} handleDelete={handleDelete} {...el} />})}
        </div>
        }
    
       </>
      );
    };
    
    export default Users;
    
