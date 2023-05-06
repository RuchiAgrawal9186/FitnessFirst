import React, { useState } from "react";
import "./Header.css";
import logo from '../../images/logo/Logo.png'
import Bars from "../../assets/bars.png";
import { Link } from "react-router-dom";
const Header = () => {
  const mobile = window.innerWidth <= 1000 ? true : false;
  const [menuopended, setmenuopened] = useState(false);
  return (
    <div className="header shadow-xl">
      <div className="opacity">
        <Link to='/'><img
          src={logo}
          className="logo-img object-cover w-50 md:w-40 md:h-15 w-40 pr-5 rounded-xl pb "
          alt="logo needed"
        />
        </Link>
        
      </div>
      {menuopended === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
            onClick={() => setmenuopened(true)}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setmenuopened(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setmenuopened(false)}>
            <Link to="/products">Products</Link>
          </li>
          <li onClick={() => setmenuopened(false)}>
            <Link to="/about">About us</Link>{" "}
          </li>
          <li onClick={() => setmenuopened(false)}>
            <Link to="/bmi">BMI Calculator</Link>{" "}
          </li>
          <li onClick={() => setmenuopened(false)}>
            <Link to="/contact"></Link>
          </li>
          <li onClick={() => setmenuopened(false)}>
            <button className="btn2">Login</button>
          </li>
          <li>
            <button className="btn2">Signup</button>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Header;
