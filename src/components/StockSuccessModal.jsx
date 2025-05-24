import React from 'react';

const StockSuccessModal = ({ companyName, stockName, totalValue, onClose, onViewHoldings }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1f2937] text-white p-6 rounded-xl w-[512px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-semibold">Stock Added to Portfolio!</h2>
          <button onClick={onClose} className="text-white text-2xl font-bold">×</button>
        </div>

        {/* Subtext */}
        <p className="text-gray-300 mb-5">Your Stock purchase has been recorded successfully!</p>

        {/* Info Box */}
        <div className="bg-[#374151] p-5 rounded-lg mb-6">
          <div className="flex justify-between py-1 text-sm">
            <span className="text-gray-300 font-medium">Company Name</span>
            <span className="text-white font-semibold">{companyName}</span>
          </div>
          <div className="flex justify-between py-1 text-sm">
            <span className="text-gray-300 font-medium">Stock Name</span>
            <span className="text-white font-semibold">{stockName}</span>
          </div>
          <div className="flex justify-between py-1 text-sm">
            <span className="text-gray-300 font-medium">Total Purchase Value</span>
            <span className="text-white font-semibold">₹ 22,000</span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onViewHoldings}
          className="bg-[#2dd4bf] hover:bg-[#5eead4] text-black font-semibold py-2 rounded-md w-full transition"
        >
          View All Stock Holdings
        </button>
      </div>
    </div>
  );
};

export default StockSuccessModal;
