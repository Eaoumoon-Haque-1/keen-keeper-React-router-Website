import React from "react";
import { NavLink } from "react-router";
import MyNavLink from "./MyNavLink";
import { GrHomeRounded } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <a className=" text-2xl font-semibold"><span className="font-extrabold">Keen</span>Keeper</a>
        </div>
        <div >
          <ul className="flex items-center space-x-2">
           <li><MyNavLink to={"/"} ><GrHomeRounded />Home</MyNavLink></li>
           <li><MyNavLink to={"/timeline"}><RiTimeLine />Timeline</MyNavLink></li>
           <li><MyNavLink to={"/stats"}><ImStatsDots />Stats</MyNavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
