import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { patchUser } from "../../Redux/DataReducer/action";




const Card = ({ id, category, charge, email, first_name, last_name , avatar, handleDelete }) => {
  const dispatch = useDispatch()


  return (
 
      <div class="flex flex-row justify-between items-center bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img className="object-fill h-38 w-34 flex flex-row justify-between items-center"  src={avatar} alt="img-blur-shadow" layout="fill" />
        <div className="flex w-full flex-row justify-between items-center mr-auto">
        <h1 className="mb-2 w-30 mx-3 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
         Name: {first_name} {last_name} 
        </h1>
        <h3 className="mb-2 w-30 mx-3 flex justify-start font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Categoy: {category}{" "}
        </h3>
        <h3 className="mb-2 w-30 block mx-3 font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {" "}
          Email: {email}
        </h3>
        <div className="flex">
        <button onClick={()=> {handleDelete(id)}} className="bg-red-700">Remove</button>
        <div class="flex mx-3 rounded-sm bg-orange-600 px-4 w-30 flex-row justify-between items-center ">
        {" "}
       Charge : {charge}
      </div>
        </div>
        {/* <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="category"
                
                  value={category}
                >
                  <option value={"basic"}>Basic</option>
                  <option value={"premium"}>Premium</option>
                  <option value={"pro"}>Pro</option>
                </select> */}
        
      </div>
    
    
      </div>
    

  );
};

export default Card;
