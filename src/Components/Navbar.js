import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div id="navBar">
            <div className="navLeft">
                <h2>Faris Ilham Noormandiri</h2>
            </div>
            <div className="navRight">
                <p>
                    <NavLink to="/">Home</NavLink>
                </p>
                <p>
                    <NavLink to="/about">About</NavLink>
                </p>
                <p>
                    <NavLink to="/contact">Contact</NavLink>
                </p>
            </div>
        </div>
    );
  };
  
export default Navbar;
