import React from "react";
import './Header.css'

const Header = ()=>{
    return (
        <div className="Header">
        <img src="data:image/png;base64,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" 
        className="logo-img"
        alt="logo needed" />
        <ul className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>plans</li>
            <li>testimonials</li>
        </ul>
        </div>
    )
}
export default Header;