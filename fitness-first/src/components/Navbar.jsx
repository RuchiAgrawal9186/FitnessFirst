import React, { useEffect, useRef } from "react";
import Header from "./Header/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../images/logo/Logo.png";
import { HamburgerIcon, SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useLocation, useSearchParams } from "react-router-dom";

import { getData, getUsers } from "../Redux/DataReducer/action";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const name = useSelector((state) => state.authReducer.first_name);
  console.log(name);
  const lastName = useSelector((state) => state.authReducer.last_name);
  const category = useSelector((state) => state.authReducer.category);
  const [searchParams] = useSearchParams();
  // const dispatch = useDispatch();
  const handleClick = () => {
    setNav((p) => !p);
  };
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  let id = useRef();

  useEffect(() => {
    const paramObj = {
      q: query && query,
      category: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      _page: searchParams.get("page"),
      _limit: searchParams.get("limit"),
    };
    if (id.current) {
      clearTimeout(id);
    }
    id.current = setTimeout(() => {
      dispatch(getData(paramObj));
      dispatch(getUsers(paramObj));
    }, 1000);
  }, [query]);

  return (
    <div className="w-screen h-[80px]  z-10 bg-orange-300 fixed shadow-2xl border-gray-600 border-4 opacity-23">
      <div className="px-2 flex justify-between item-center w-full h-full m-auto">
        <div className="flex items-center w-full mr-4">
          <h2 className="">
            <Link to="/">
              <img
                className="object-fill w-50 md:w-60 md:h-12 h-10 pr-5 rounded-xl"
                src={Logo}
              />
            </Link>
          </h2>
          <div className="flex w-full">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              className="rounded-md  w-full "
            ></input>
            <box className="bg-slate-100 rounded-md">
              <SearchIcon className="text-3xl" />
            </box>
          </div>
          <ul className="hidden text-1.4xl md:flex">
            <li className=" font-semibold">
              <Link to="/products">Excercise</Link>
            </li>
            <li className=" font-semibold">
              {" "}
              <Link to={"/about"}>About</Link>{" "}
            </li>
            <li className=" font-semibold">
              {" "}
              <Link to="/contact">Contact</Link>{" "}
            </li>
            <li className=" font-semibold">
              <Link to="/bmi">BMI</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex pr-4">
          <Link to="/admin">
            {" "}
            <button className="px-5 mr-2 h-10  my-5 text-center">Admin</button>
          </Link>
          <Link to="/login">
            <button
              onClick={() => dispatch({ type: "TOGGLE" })}
              className="px-5 h-10  my-5"
            >
              {isAuth ? "Logout" : "Login"}
            </button>
          </Link>
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
        <Link to="/products">Excercise</Link>
        </li>
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
        <Link to={"/about"}>About</Link>{" "}
        </li>
        <li className="border-b-2 border-gray-300 text-center w-full text-2xl">
        <Link to="/contact">Contact</Link>{" "}
        </li>
        <li className="border-b-2 bordergray-300 text-center w-full text-2xl">
        <Link to="/bmi">BMI</Link>
        </li>
        <div className="flex flex-col my-4">
        <Link to="/admin">
            {" "}
            <button className="mx-7 h-10 text-center my-3">Admin</button>
          </Link>
          <Link to="/login">
            <button
              onClick={() => dispatch({ type: "TOGGLE" })}
              className="px-5 h-10  my-5"
            >
              {isAuth ? "Logout" : "Login"}
            </button>
          </Link>
        </div>
      </ul> 

      {name && (
        <h3 className="bg-zink-400  text-orange-600 font-orange-500">
          Welcome {name} {lastName}. You are our {category} Member.
        </h3>
      )}
    </div>
  );
};

export default Navbar;
