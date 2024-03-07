import React from "react";
import Graph from "../Components/Graph";
import GetStartedBox  from "../Specific/GetStartedBox"
import LikeAlso from "../Pages/LikeAlso"
import PerformancePage from "./PerformancePage2"
import TrendingCoins from "../Specific/TrendingCoins";
const Page1 = () => {
  return (
    <div className="bg-[white] h-[110vh] py-12 px-12  items-center flex gap-8">
      <div className=" h-[90%] w-[70%] mt-[-9vh]">
        
        {/* <div><Graph/></div> */}
        <PerformancePage/>
      </div>

      <div className=" h-[100%] w-[30%]">
      <GetStartedBox/>
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Page1;
