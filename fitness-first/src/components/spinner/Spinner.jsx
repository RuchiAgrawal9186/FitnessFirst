import React from "react";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-container h-full w-full flex flex-col items-center justify-center">
      <div className="loading-spinner">
      </div>
      <h1 className="font-bold ">Please Wait....</h1>
    </div>
  );
}