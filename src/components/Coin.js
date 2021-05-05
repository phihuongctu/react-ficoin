const Coin = ({
  rank,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <tr>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="flex items-center">
          <div>
            <div class="text-sm leading-5 text-gray-800">{rank}</div>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div class="text-sm leading-5 text-blue-900">
          <div className="coin flex items-center ">
            <img src={image} alt="crypto" className="w-6" />
            <h1 className="mx-2">{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
        </div>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
        ${price}
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
        {priceChange < 0 ? (
          <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
        )}
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-200 text-sm leading-5">
        <span class="relative inline-block px-3 py-1 font-semibold ">
          <span
            aria-hidden
            class="absolute inset-0  opacity-50 rounded-full"
          ></span>
          <span class="relative text-xs">${marketcap.toLocaleString()}</span>
        </span>
      </td>
      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-blue-900 text-sm leading-5">
        ${volume.toLocaleString()}
      </td>
    </tr>
  );
};
export default Coin;
