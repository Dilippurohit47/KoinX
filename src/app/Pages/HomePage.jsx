import Graph from "../Components/Graph";
import GetStartedBox from "../Specific/GetStartedBox";
import TrendingCoins from "../Specific/TrendingCoins";
import PerformancePage from "./PerformancePage2";
import { IoIosArrowForward } from "react-icons/io";

const Page1 = () => {
  return (
    <div className="bg-[white] h-[110vh] py-5 px-12    items-center flex gap-8 vsm:block vsm:mt-16 vsm:h-[auto] vsm:px-0 ">
      <div className=" h-[90%] w-[70%] mt-[-9vh]">
        <div className="flex items-center mb-5  ">
          <p className="text-[#000000a3] font-[500] text-[0.9rem] ">Cryptocurrencies</p>{" "}
          <p className="ml-1 text-[#000000a3] text-[0.9rem]  font-[500]">
            {" "}
            <IoIosArrowForward />
          </p>
          <p className=" text-[#000000a3] text-[0.9rem]  font-[500] translate-x-[-9px]">
            <IoIosArrowForward />
          </p>
          <p className="ml-[-9px] font-[600] text-[0.9rem]  ">Bitcoin</p>
        </div>

        <div className="h-[100%] w-[100%]">
          <Graph />
        </div>
        <PerformancePage />
      </div>

      <div className=" h-[100%] w-[30%] mt-20 vsm:px-4 vsm:w-[100%] ">
        <GetStartedBox />
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Page1;
