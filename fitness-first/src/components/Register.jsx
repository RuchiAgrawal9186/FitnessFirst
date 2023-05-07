import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { dataContext } from '../context/DatacontextProvider';
// import { useContext } from 'react';
import "react-toastify/dist/ReactToastify.css";
// import { Navigate } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import { userRegister } from "../Redux/AuthReducer/action";
import axios from "axios";

// const dataContext = React.createContext()

export const Register = () => {
  const authEmail = useSelector((state) => state.authReducer.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [data, setUserData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    avatar: "",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    category: "basic",
    charge: 25,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...data,
      [name]: value,
      charge: name == "category" ? handleCharge(value) : data.charge,
    });
  };
  const handleCharge = (val) => {
    switch (val) {
      case "basic":
        return 25;
      case "premium":
        return 30;
      case "pro":
        return 45;
      default:
        return 25;
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if(data.email==='admin@gmail.com'){
    toast.warning("You can't use this username")
    return
  }


    axios.get(`http://localhost:8080/users/${data.email}`).then((res)=>{
      if(res){
        toast.info("this email id has been previously used");
        return;
      }
    })
    dispatch(userRegister({...data, id:data.email})).then(()=>{navigate('/login')});
  };

  return (
    <div className="mt-[12%]">
      <ToastContainer/>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6 mt-[5%]">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              name="first_name"
              value={data.first_name}
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="first_name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="last_name"
              name="last_name"
              value={data.last_name}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              name="password"
              value={data.password}
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Email"
              name="email"
              value={data.email}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-state"
            >
              Membership
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="category"
                onChange={handleChange}
                value={data.category}
              >
                <option value={"basic"}>Basic</option>
                <option value={"premium"}>Premium</option>
                <option value={"pro"}>Pro</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-zip"
            >
              Charge
            </label>
            <input
              onChange={() => {
                handleCharge();
              }}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="Charge"
              value={data.charge}
              name="charge"
            />
          </div>
        </div>
        <button
          className="bg-orange-600 pb-2 pt-1 px-20 mt-4 hover:text-white hover:bg-slate-600"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p>Already register <Link to='/login'>Login</Link> </p>
    </div>
  );
};
