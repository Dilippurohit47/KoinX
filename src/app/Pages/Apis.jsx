"use client";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [bitcoin, setbitcoin] = useState("");
  const [trending, settrending] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setbitcoin(data.bitcoin.usd);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });

    const lol = fetch("https://api.coingecko.com/api/v3/search/trending")
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

  // console.log("trending",trending[0]?.item.data.sparkline);

  return (
    <div>
      <p>Bitcoin : {bitcoin}</p>

      {trending?.map((i, index) => (
        <>
        <p>{i?.item?.name} {i?.item?.data?.price_change_percentage_24h?.aed.toFixed(2)
        }% </p>
        <img src={i?.item.data?.sparkline} alt="" />
        </>
      ))}
    </div>
  );
};

export default HomePage;
