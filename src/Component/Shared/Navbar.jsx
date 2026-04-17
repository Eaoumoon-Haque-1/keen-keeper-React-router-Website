import React from "react";
import { NavLink } from "react-router";
import MyNavLink from "./MyNavLink";
import { GrHomeRounded } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";
import { RiTimeLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="navbar bg-base-100 w-7/8 mx-auto">
        <div className="flex-1">
          <a className=" text-2xl font-semibold"><span className="font-extrabold">Keen</span><span className="text-[#244d3fFF]">Keeper</span></a>
        </div>
        <div >
          <ul className="md:flex md:items-center md:space-x-2 grid grid-cols-1">
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
