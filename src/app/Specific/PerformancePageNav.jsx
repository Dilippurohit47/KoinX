"use client";
import React, { useState } from "react";
const NavLinks = [
  "Overview",
  "Fundamentals",
  "New Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const PerformancePageNav = () => {
  const [isActive, setisActive] = useState("Overview");
  return (
    <div className="border-b-[2px] px-1 py-3 border-[#00000050] vsm:w-[99vw] flex justify-between vsm:overflow-x-auto   no-scrollbar vsm:gap-4   ">
      {NavLinks.map((links, index) => (
        <div className="relative whitespace-nowrap ">
          <a
            className={` font-[500]   cursor-pointer ${
              isActive == links ? "text-[#0141CF]" : ""
            }`}
            onClick={()=>setisActive(links)}
          >
            {links}
          </a>

          {isActive === links && (
            <p className="absolute top-[34px]  bg-[#0141CF]  w-[100%] h-[4px] vsm:top-[33px] vsm:h-[5px] "></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PerformancePageNav;
