import React from 'react'

const Hero3 = () => {
  return (
    <div>
      <div className="w-full h-[130px] bg-gray-800 flex flex-col justify-start items-center">
        <div className="w-full lg:w-4/5">
         
          <div className="flex justify-center mt-6 space-x-20">
            {/* CoinMarketCap */}
            <button className="hover:opacity-75" disabled>
              <img
                src="/icons/coingecko.png" // Replace with the actual path to your CoinMarketCap icon
                alt="CoinMarketCap"
                className="h-16 w-16"
              />
              <span className="tooltip text-xs">Coming soon!</span>
            </button>

            {/* CoinGecko */}
            <button className="hover:opacity-75" disabled>
              <img
                src="/icons/coingecko.png" // Replace with the actual path to your CoinGecko icon
                alt="CoinGecko"
                className="h-16 w-16"
              />
              <span className="tooltip text-xs">Coming soon!</span>
            </button>

            {/* ZkSync Era Block Explorer (Add the actual link and icon) */}
            <a href="https://zksync.io/explorer/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/coingecko.png" // Replace with the actual path to your ZkSync icon
                alt="ZkSync Era Block Explorer"
                className="h-16 w-16"
              />
            </a>

            {/* SyncSwap (Add the actual link and icon) */}
            <a href="https://syncswap.org/" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/coingecko.png" // Replace with the actual path to your SyncSwap icon
                alt="SyncSwap"
                className="h-16 w-16"
              />
            </a>

            {/* DexTools */}
            <button className="hover:opacity-75" disabled>
              <img
                src="/icons/coingecko.png" // Replace with the actual path to your DexTools icon
                alt="DexTools"
                className="h-16 w-16"
              />
              <span className="tooltip text-xs">Coming soon!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3