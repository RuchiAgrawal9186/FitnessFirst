import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import Header from './Header/Header'
import {  useState} from "react";
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";
import Logo from "../images/logo/Logo.png";
import { HamburgerIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";

import { Center } from "@chakra-ui/react";
import { getData } from '../Redux/DataReducer/action';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav((p) => !p);
  };
  const dispatch = useDispatch()
    const[query, setQuery] = useState('');
  let id = useRef()


  const paramObj ={
    q:query && query
  }

  useEffect(()=>{
    if(id.current){
      clearTimeout(id)
    }
      id.current = setTimeout(()=>{
        dispatch(getData(paramObj))
      },1000)
    
    
  },[query])

  return (
    // <div className='nav-div1'>
    // {/* <h1> Navbar</h1>    */}
    // <div className='left-nav'>
    // <Header/>  
    //  </div>
    // {/* <div className='right-nav'>
    //   <button>Login</button>
    //   <button>Sin--</button>
    //    </div> */}
    // </div>
    <div className="w-screen h-[80px]  z-10 bg-orange-100 fixed opacity-23">
      <div className="px-2 flex justify-between item-center w-full h-full m-auto">
        <div className="flex items-center w-full mr-4">
          <h2 className="">
            <Link to='/'><img
              className="object-fill w-50 md:w-60 md:h-12 h-10 pr-5 rounded-xl"
              src={Logo}
            /></Link>
            
          </h2>
          <div className="flex w-full">
            <input value={query} 
            onChange={(e)=>{setQuery(e.target.value)} }
            className="rounded-md  w-full "></input>
            <box className="bg-slate-100 rounded-md">
              <SearchIcon className="text-3xl" />
            </box>
          </div>
          <ul className="hidden text-1.4xl md:flex">
            <li className=" font-semibold"><Link to="/products">Excercise</Link></li>
            <li className=" font-semibold"> <Link to={'/about'}>About</Link> </li>
            <li className=" font-semibold"> <Link to = '/contact'>Contact</Link> </li>
            <li className=" font-semibold">
              <Link to="/bmi">BMI</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
         <Link to='/register'> <button className="px-5 mr-2 h-10  my-5 text-center">SignIn</button></Link>
         <Link to='/login'><button className="px-5 h-10  my-5">Login</button></Link>
        </div>
        <div className="md:hidden my-auto mr-4" onClick={handleClick}>
          {!nav ? (
            <HamburgerIcon className="text-3xl" />
          ) : (
            <CloseIcon className="text-1.5xl mr-2 mb-1" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-zinc-200 w-full px-7 flex flex-col justify-between"
        }
      >
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
          Home
        </li>
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
          About
        </li>
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
          Support
        </li>
        <li className="border-b-2 bordergray-300 text-center w-full text-2xl">
          Cart
        </li>
        <div className="flex flex-col my-4">
          <button className="mx-7 h-10 text-center my-3">Sign Up</button>
          <button className="mx-7 h-10 text-center">Login</button>
        </div>
        <li>
          <Link to="host/kids">Kids</Link>
        </li>
        <li>
          <Link to="/host/men_shoes">Mens Shooes</Link>
        </li>
        <li>
          <Link to="/host/men_clothes">Men Clothes</Link>
        </li>
        <li>
          <Link to="/host/men_watches">Men Watches</Link>
        </li>
        <li>
          <Link to="/host/sunglasses">Sunglasses</Link>
        </li>
        <li>
          <Link to="/host/women_clothes">Women</Link>
        </li>
        <li>
          <Link to="/host/women_watches">Women Watches</Link>
        </li>
      </ul>
  
      
    </div>
  )
}

export default Navbar
