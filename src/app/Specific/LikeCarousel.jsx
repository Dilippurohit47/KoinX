"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const LikeCarousel = () => {
  const [trending, settrending] = useState([]);
  const [current, setcurrent] = useState(0);
  const [windowWidth, setwindowWidth] = useState(0);

  useEffect(() => {
    setwindowWidth(window.innerWidth);
  }, [window.innerWidth]);
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
  const Next = () => {
    setcurrent((prev) => (prev === 80.4  ? (prev = 0) : prev + 26.8));
  };
  const Prev = () => {
    setcurrent((prev) => (prev === 0 ? 0 : prev - 26.8));
  };
console.log(current)
  return (
    <div className="">
      <h1 className="text-[1.5rem]   font-[600]    mb-2"> You May Also Like</h1>
      <div className=" px-4  w-[96%] relative flex   gap-2 overflow-x-hidden overflow-y-hidden vsm:w-[96vw] ">
        <div
          className="flex transition w-[full] ease-in-out duration-300 gap-6   vsm:gap-1 "
          style={{ transform: windowWidth > 375 ? `translateX(-${current}%)`:`translateX(-${current - 40}%)` }}
        >
          {trending?.map((i, index) => (
            <div
              key={index}
              className="border-[2px] h-[20vh] px-4 py-3   w-[16vw] vsm:w-[42vw]  "
            >
              <div className="flex items-center gap-2  ">
                {i.item.symbol}{" "}
                <p
                  className={`text-[1rem] vsm:text-[0.8rem]  ${
                    i?.item?.data?.price_change_percentage_24h?.aed < 0
                      ? "text-[red]"
                      : " text-[green]"
                  } `}
                >
                  {i?.item?.data?.price_change_percentage_24h?.aed < 0 ? (
                    <> </>
                  ) : (
                    <>+</>
                  )}
                  {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(2)} %
                </p>
              </div>

              <p className="font-[500] text-[1.4rem] mt-1 vsm:text-[1rem] ">
                {i.item.data.price}
              </p>

              <img
                src={i.item.data.sparkline}
                alt={i.item.name}
                className=" ml-3 mt-3"
              />
            </div>
          ))}
        </div>
        <button className="absolute top-[10vh] right-[0]" onClick={Next}>
          <IoIosArrowForward />
        </button>
        <button
          className="absolute top-[10vh] rotate-[180deg] left-[0]"
          onClick={Prev}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default LikeCarousel;
