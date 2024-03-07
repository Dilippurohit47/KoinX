import React from "react";
import { MdArrowDropUp } from "react-icons/md";
const PerformanceGraph = () => {
  return (
    <div className="vsm:w-[95vw] ">
      <h1 className="text-[1.5rem]  font-[600] mb-6"> Performance</h1>

      <div className="relative  flex justify-between items-center">
        <div>
            <p className="text-[#000000b7] text-[0.9rem] mb-2 vsm:text-[0.8rem]">
        
            Today&apos;s Low
          </p >
          45,464.56
        </div>
        <div className="w-[68%] vsm:w-[45%]  grad-line h-[4px] rounded-full"></div>
        <div>
         
          <p className="text-[#000000b7] text-[0.9rem] mb-2 vsm:text-[0.8rem]">
         
            Today&apos;High
          </p>
          45,464.56
        </div>

        <div className="absolute flex flex-col justify-center items-center  left-[40vw] top-[2.5vh]">
          <p className="">
            <MdArrowDropUp size={30} />
          </p>
          <p className="mt-[-5px] vsm:text-[0.8rem]">$48,657.83</p>
        </div>
      </div>

      <div className="relative mt-12  flex justify-between items-center">
        <div>
        
          <p className="text-[#000000b7] text-[0.9rem] mb-2 vsm:text-[0.8rem]"> 52W Low </p>{" "}
          16,823.5
        </div>
        <div className="w-[68%]  grad-line h-[4px] vsm:w-[45%] rounded-full"></div>
        <div>
         
          <p className="text-[#000000b7] text-[0.9rem] mb-2 vsm:text-[0.8rem]"> 52W High </p>{" "}
          49,464.56
        </div>
      </div>
    </div>
  );
};

export default PerformanceGraph;
