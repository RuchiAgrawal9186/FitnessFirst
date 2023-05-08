import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = ({ image, exercise, category, instructions, price, id }) => {
  return (
    <div className="relative flex mt-[5%]  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative mx-4  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={image} alt="img-blur-shadow" layout="fill" />
      </div>
      <div class="p-6">
        {" "}
        <h1 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {exercise}
        </h1>
        <h3 className="mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Categoy: {category}{" "}
        </h3>
        <h3 className="mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {" "}
          Price: {price}
        </h3>
      </div>
      <div class="p-6 m-auto pt-0">
        {" "}
        <Link to={`/productS/${id}`}>
          <button
            class=" flex select-none rounded-lg bg-orange-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Full Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

