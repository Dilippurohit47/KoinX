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
    <div className="border-b-[2px] py-3 border-[#00000050] flex justify-between ">
      {NavLinks.map((links, index) => (
        <div className="relative">
          <a
            href="#"
            className={` font-[500] ${
              isActive === links ? "text-[#0141CF]" : ""
            }`}
            onClick={(e) => setisActive(links)}
          >
            {links}
          </a>

          {isActive === links && (
            <p className="absolute top-[35px] bg-[#0141CF]  w-[100%] h-[3px] "></p>
          )}
        </div>
      ))}
    </div>
  );
};

export default PerformancePageNav;
