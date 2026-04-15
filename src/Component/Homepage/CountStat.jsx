import React from "react";

const CountStat = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-10">
        <div className="shadow-lg p-8 ">
          <p className="text-3xl font-semibold text-[#244d3fFF]">10</p>
          <p className="text-[#64748bFF] text-[18px]">Total Friends</p>
        </div>
        <div className="shadow-lg p-8">
          <p className="text-3xl font-semibold text-[#244d3fFF]">10</p>
          <p className="text-[#64748bFF] text-[18px]">On Track</p>
        </div>
        <div className="shadow-lg p-8">
          <p className="text-3xl font-semibold text-[#244d3fFF]">10</p>
          <p className="text-[#64748bFF] text-[18px]">Need Attention</p>
        </div>
        <div className="shadow-lg p-8">
          <p className="text-3xl font-semibold text-[#244d3fFF]">10</p>
          <p className="text-[#64748bFF] text-[18px]">
            Interactions This Month
          </p>
        </div>
      </div>
      <div className="divider mb-10"></div>
    </div>
  );
};

export default CountStat;
