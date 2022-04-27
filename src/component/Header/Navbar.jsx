import React from "react";
import NavItem from "./NavbarItem/NavItem";
import { NavLink } from "react-router-dom";
import navbar from "../../Data/navbar";

const navlist = JSON.parse(JSON.stringify(navbar));
export default function Navbar() {
  return (
    <div className="nav ml-auto mr-auto mt-3">
      {navlist.map((each, index) => {
        console.log(each);
        return (
          <NavLink
            key={index}
            to={each.href}
            className={({ isActive }) => (isActive ? "activeNav" : "")}
          >
            <NavItem
              item={({ isActive }) =>
                isActive ? console.log(each.icon[1]) : console.log(each.icon[2])
              }
            ></NavItem>
          </NavLink>
        );
      })}
    </div>
  );
}
