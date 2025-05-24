import { Info, BarChart2 } from 'lucide-react';
import { useState } from 'react';

const PortfolioBetaCard = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative bg-[#1B2735] p-4 rounded-lg border-l-4 border-pink-400">
      {/* Info Icon */}
      <Info
        className="absolute top-3 right-3 w-4 h-4 text-gray-400 cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
      />

      {/* Title with Icon */}
      <div className="flex items-center gap-2 mb-2">
        <BarChart2 className="text-pink-400 w-5 h-5" />
        <h2 className="text-gray-200 text-lg font-medium">Portfolio Beta</h2>
      </div>

      {/* Beta Value */}
      <p className="text-2xl font-bold text-red-400">
        1.2% <span className="text-sm font-medium text-red-300 ml-1">decease</span>
      </p>
      <p className="text-sm text-gray-400 mt-1">Higher Volatility than market</p>

      {/* Info Popup */}
      {showInfo && (
        <div className="absolute top-12 right-4 w-64 bg-[#101822] text-white rounded-xl shadow-lg p-4 z-10">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 mt-1"></span>
              <span>Beta &lt; 1: Lower Volatility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400 mt-1"></span>
              <span>Beta = 1: Market Volatility</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 mt-1"></span>
              <span>Beta &gt; 1: Higher Volatility</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default PortfolioBetaCard; 