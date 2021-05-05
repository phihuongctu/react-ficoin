import axios from "axios";
import React, { useState, useEffect } from "react";
import Coin from "../components/Coin";
const Api = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div class="search-coin sm:w-full lg:w-max">
        <div class="bg-white flex items-center justify-between rounded-full shadow-xl">
          <from>
            <input
              class="coin-input rounded-l-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Search"
              onChange={handleChange}
            />
          </from>

          <div class="">
            <button class="text-white rounded-full p-3 hover:bg-blue-400 focus:outline-none flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                color="black"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="coin-container mt-4">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
          <div class="align-middle inline-block min-w-full  overflow-hidden bg-white  pt-3 rounded-bl-lg rounded-br-lg">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b-1 border-gray-200 text-left leading-4 text-blue-500 tracking-wider">
                    #
                  </th>
                  <th class="px-6 py-3 border-b-1 border-gray-200 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Name
                  </th>
                  <th class="px-6 py-3 border-b-1 border-gray-100 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Price
                  </th>
                  <th class="px-6 py-3 border-b-1 border-gray-100 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    24h %
                  </th>
                  <th class="px-6 py-3 border-b-1 border-gray-100 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Market Cap
                  </th>
                  <th class="px-6 py-3 border-b-1 border-gray-100 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Volume(24h)
                  </th>
                  {/* <th class="px-6 py-3 border-b-2 border-gray-300"></th> */}
                </tr>
              </thead>
              <tbody class="bg-white">
                {filteredCoins.map((coin) => {
                  return (
                    <Coin
                      rank={coin.market_cap_rank}
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      marketcap={coin.market_cap}
                      price={coin.current_price}
                      priceChange={coin.price_change_percentage_24h}
                      volume={coin.total_volume}
                    />
                  );
                })}
              </tbody>
            </table>
            <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
              {/* <div>
              <p class="text-sm leading-5 text-blue-700">
                Showing
                <span class="font-medium">1</span>
                to
                <span class="font-medium">200</span>
                of
                <span class="font-medium">2000</span>
                results
              </p>
            </div> */}
              {/* <div>
              <nav class="relative z-0 inline-flex shadow-sm">
                <div>
                  <a
                    href="#"
                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                    aria-label="Previous"
                  >
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-600 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-tertiary active:text-gray-700 transition ease-in-out duration-150 hover:bg-tertiary"
                  >
                    3
                  </a>
                </div>
                <div v-if="pagination.current_page < pagination.last_page">
                  <a
                    href="#"
                    class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                    aria-label="Next"
                  >
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </nav>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Api;
