import { FaBeer } from "react-icons/fa";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
const TopBar = () => {
  // const [coins, setCoins] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://api.coingecko.com/api/v3/global")
  //     .then((res) => {
  //       setCoins(coins);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <section className="top-bar  py-2">
      <div className="container max-w-screen-xl px-4 ">
        <ul>
          <li className="flex items-center ">
            <span className="flex items-center">
              <span>
                <FaBeer />
              </span>
              <span className="ml-2">Coin:</span>
              <span className="ml-2">7049</span>
            </span>

            {/* {coins.map(function (coin) {
              console.log(coin);
              return (
                <span className="global_data">
                  {coin.active_cryptocurrencies}
                </span>
              );
            })} */}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopBar;
