import React from "react";
import instagramImg from "../../assets/images/instagram.png";
import facebookImg from "../../assets/images/facebook.png";
import twitterImg from "../../assets/images/twitter.png";
const Footer = () => {
  return (
    <div className="bg-[#244d3fFF] px-10 pt-8  md:pt-20 md:px-40 lg:px-60 pb-8">
      <div className="container mx-auto">
          <h1 className="font-extrabold text-3xl md:text-6xl text-white text-center">
            KeenKeeper
          </h1>
          <p className="text-white text-center my-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-white text-center font-medium mb-4">
            Social Links
          </p>
          <div className="flex items-center justify-center space-x-3 mb-10">
            <img src={instagramImg} alt="" />
            <img src={facebookImg} alt="" />
            <img src={twitterImg} alt="" />
          </div>
          <div className="divider mb-8"></div>
        <div className="flex items-center justify-between flex-col-reverse gap-2 md:flex-row text-[#fafafaFF] mb-8">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="md:flex md:items-center md:justify-center grid grid-cols-1 gap-2 text-[#fafafaFF] md:space-x-3">
                <p>Privacy Policy</p>   
                <p>Terms Of Service</p>
                <p>Cookie</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
