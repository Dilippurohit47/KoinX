"use client";
import LikeCarousel from "../Specific/LikeCarousel";
import TrendingCarousel from "../Specific/TrendingCarousel";

const LikeAlso = () => {
  return (
    <div className="mt-10  w-[92vw]   ">
      <LikeCarousel />
      <TrendingCarousel />
    </div>
  );
};

export default LikeAlso;
