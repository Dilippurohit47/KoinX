import React from "react";
import Graph from "../Components/Graph";
import { FaArrowRightLong } from "react-icons/fa6";

import TrendingCoins from "../Specific/TrendingCoins";
const Page1 = () => {
  return (
    <div className="bg-[white] h-[120vh] py-12 px-12  items-center flex gap-8">
      <div className=" h-[90%] w-[70%] mt-[-9vh]"><Graph/></div>

      <div className=" h-[100%] w-[30%]">
        <div className="bgblue h-[60%] w-[100%]  text-white px-9 py-12 flex flex-col items-center text-center rounded-3xl ">
          <p className=" text-[1.5rem] font-[600]">
            Get Started with KoinX For FREE
          </p>
          <p className="text-[0.9rem] mt-3">
            With our range of features that you can equip for free ,KoinX allows
            you to be more educated and aware of your tax reports
          </p>

          <button className="bg-white px-12 py-3  mt-[5vh] flex items-center justify-center gap-3 text-black rounded-lg font-[500] ">
            Get Started for Free
            <p>
              {" "}
              <FaArrowRightLong />
            </p>
          </button>
        </div>
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Page1;
