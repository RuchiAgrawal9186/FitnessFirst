import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Card = ({ id, category, charge, email, first_name, last_name , avatar }) => {
  return (
 
      <div class="flex flex-row justify-between items-center bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img className="object-fill h-38 w-34 flex flex-row justify-between items-center"  src={avatar} alt="img-blur-shadow" layout="fill" />
        <div className="flex w-full flex-row justify-between items-center mr-auto">
        <h1 className="mb-2 w-30 bg-red-700 mx-3 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
         Name: {first_name} {last_name} 
        </h1>
        <h3 className="mb-2 w-30 mx-3 flex justify-start font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Categoy: {category}{" "}
        </h3>
        <h3 className="mb-2 w-30 block mx-3 font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {" "}
          Email: {email}
        </h3>
        <div class="flex mx-3 w-30 flex-row justify-between items-center ">
        {" "}
       Charge : {charge}
      </div>
      </div>
    
    
      </div>
    

  );
};

export default Card;
