export default function StockListItem({ stock }) {
    return (
        <li class="pb-3 sm:pb-4" key={stock.index}>
        <div class="flex items-center space-x-4 p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800">
          <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src="https://assets-netstorage.groww.in/stock-assets/logos/NSE.png" alt="Neil image" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{stock.symbol}</p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">QTY: {stock.totalTradedVolume}</p>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">{stock.lastPrice}</p>
            <p class={`text-sm truncate ${stock.change > 0 ? 'text-green-500' : 'text-red-500'} dark:text-gray-400`}>
              ({stock.change}) {stock.pChange}%
            </p>
          </div>
        </div>
      </li>
    );
  }