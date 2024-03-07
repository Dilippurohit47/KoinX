"use client";
import React, { useEffect, useState } from "react";

const LikeAlso = () => {

  const [trending, settrending] = useState([]);

  const link ="https://www.coingecko.com/coins/33097/sparkline.svg"
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

  console.log(trending);
console.log( "spark",trending[0]?.item?.data?.sparkline)
  return (
    <div className="mt-10  w-[100vw] ">
      <h1 className="text-[1.5rem]   font-[600] mb-2"> You May Also Like</h1>

      <div className=" px-4  w-[88.5%]  flex  gap-2 overflow-x-auto ">
        <div className="flex gap-6">
          {trending?.map((i, index) => (
            <div key={index} className="border-[4px] h-[20vh] px-4 py-2  w-[16vw]  ">
              
              <div className="flex items-center gap-2  ">
              {i.item.symbol} <p className={`text-[0.8rem]  ${i?.item?.data?.price_change_percentage_24h?.aed < 0 ? "text-[red]" : " text-[green]"} `}> {i?.item?.data?.price_change_percentage_24h?.aed < 0 ? (
                      <> </>
                    ) : (
                      <>
                    +
                      </>
                    )}
                    {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(2)} %</p>
              </div>

    <p className="font-[500] text-[1.4rem] mt-2 ">{i.item.data.price}   </p>
            
            {/* <img src={i.item.data.sparkline} alt={i.item.name} /> */}
            <img src={link} alt={i.item.name} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikeAlso;
