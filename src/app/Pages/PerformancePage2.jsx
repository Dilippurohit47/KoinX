import React from "react";
import PerformancePageNav from "../Specific/PerformancePageNav";
import PerformanceGraph from "../Specific/PerformanceGraph";
import Sentiments from "../Specific/Sentiments";
import LikeAlso from "./LikeAlso";

const PerformancePage2 = () => {
  return (
    <div>
      <PerformancePageNav />
      <div className="py-12 px-8 ">
        <PerformanceGraph />
        <Sentiments />
        <LikeAlso/>

      </div>
    </div>
  );
};

export default PerformancePage2;
