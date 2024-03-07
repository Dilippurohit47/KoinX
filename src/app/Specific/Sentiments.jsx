"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
const Sentiments = () => {
  const [current, setcurrent] = useState(0);

  const Next = () => {
    setcurrent((prev) => (prev === 75 ? 0 : prev + 25));
  };
  const Prev = () => {
    setcurrent((prev) => (prev === 0 ? 0 : prev - 25));
  };

  console.log(current);
  const sentiments = [1, 2, 3, 4];
  return (
    <div className="mt-14   ">
      <h1 className="text-[1.5rem]  font-[600] mb-2"> Sentiments</h1>
      <p className="text-[#44475B] mb-5 text-[1.2rem] font-[600]">Key Events</p>
      <div className=" h-[32vh] relative w-[auto] gap-5 overflow-hidden no-scrollbar flex ">
        <div
          className=" w-[auto]  transition ease-in-out duration-300 gap-10 flex"
          style={{ transform: `translateX(-${current}%)` }}
        >
          {sentiments?.map((index) => (
            <div className=" bg-[#E8F4FD]  w-[32.5vw] h-[25vh]    px-3 py-3  flex gap-2">
              <p>Logo</p>
              <div className="w-[28vw]">
                <p className="mb-2 text-[black] font-[500] ">
                  This is also carousel click on next and prev button . fugit
                  earum quibusdam?
                </p>
                <p className="text-[#000000ab] text-[0.9rem] whitespace-normal">
                  This is also carousel click on next and prev button . This is
                  also carousel click on next and prev button . This is also
                  carousel click on next and prev button . voluptatibusagnam
                  itaque?{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#00000050]  text-white absolute right-0 top-[9vh]  text-[1.5rem] px-2 py-2 rounded-full"
          onClick={Next}
        >
          {" "}
          <IoIosArrowForward />
        </button>
        {current > 0 && (
          <button
            className="bg-[#00000050]  text-white absolute left-0 top-[9vh] rotate-[180deg]  text-[1.5rem] px-2 py-2 rounded-full"
            onClick={Prev}
          >
            {" "}
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
};

export default Sentiments;
