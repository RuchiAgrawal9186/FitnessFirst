import React, { useEffect } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../spinner/Spinner';
import { getUsers } from '../../Redux/DataReducer/action';

const Trainers = () => {
    const dispatch = useDispatch();
    const users = useSelector(state=> state.dataReducer.products);
    const isLoading = useSelector(state=> state.dataReducer.isLoading)

    useEffect(()=>{
    dispatch(getUsers())
    },[])


    return (
        <>
        {
          isLoading? <Spinner/>:<div className="">
          {users.length > 0 &&
            users.map((el) => <UserCard key={el.id} {...el} />)}
        </div>
        }
    
       </>
      );
    };
    
    export default Trainers;
    