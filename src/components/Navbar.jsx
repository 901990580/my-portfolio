import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../data";
import "./navbar.css";

const Navbar = () => {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav__item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active-nav" : "nav__link"
                  }

                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav_toggle animate-toggle" : "nav_toggle"}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
