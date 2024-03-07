"use client";
import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md"
import { MdArrowDropUp } from "react-icons/md";
const TrendingCoins = () => {
  const [trending, settrending] = useState([]);
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        settrending(data?.coins);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);


  return (
    <div className="bg-white h-[30%] w-[100%] mt-6 px-6 py-6">
      <h3 className="  text-[1.5rem] font-[600]">Trending Coins (24h)</h3>

      <div className="mt-5 ">
        {trending?.slice(0, 3).map((i, index) => (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-[1rem] font-[600]">{i?.item?.name} ({i?.item.symbol}) </p>

              {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(2) >
              0 ? (
                <>
                  <p className="bg-[#EBF9F4] text-[0.9rem] font-[500] rounded-[5px] w-[6vw] px-1  text-[#14B079] flex items-center justify-center ">
                    {" "}
                    {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(
                      2
                    ) < 0 ? (
                      <>
                        <MdArrowDropDown size={30} />
                      </>
                    ) : (
                      <>
                        <MdArrowDropUp size={30} />
                      </>
                    )}
                    {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(2)}
                    %
                  </p>
                </>
              ) : (
                <>
                  <p className="bg-[#EBF9F4] text-[0.9rem] font-[500] rounded-[5px] w-[6vw] px-1  text-[#f64646] flex items-center justify-center ">
                    {" "}
                    {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(
                      2
                    ) < 0 ? (
                      <>
                        <MdArrowDropDown size={30} />
                      </>
                    ) : (
                      <>
                        <MdArrowDropUp size={30} />
                      </>
                    )}
                    {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(2)}
                    %
                  </p>
                </>
              )}
            </div>

       
          </>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
