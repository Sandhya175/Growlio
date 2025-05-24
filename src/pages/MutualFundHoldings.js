import React from "react";
import Sidebar from "../components/Sidebar";
import { FaDownload } from "react-icons/fa";

const holdings = [
  { scheme: "Adani Power Ltd.", units: 100, avgPrice: 128.67, currentPrice: 189.89, gain: 2899, percent: 17.9, allocation: 8.1 },
  { scheme: "Adani Green Energy Ltd.", units: 238, avgPrice: 128.67, currentPrice: 189.89, gain: 2899, percent: 17.9, allocation: 8.1 },
  { scheme: "Adani Wilmar Ltd.", units: 230, avgPrice: 128.67, currentPrice: 189.89, gain: 2899, percent: 17.9, allocation: 8.1 },
  { scheme: "Bajaj Finance Ltd.", units: 300, avgPrice: 128.67, currentPrice: 189.89, gain: -2899, percent: -17.9, allocation: 8.1 },
  { scheme: "Bajaj Finserv Ltd.", units: 123, avgPrice: 128.67, currentPrice: 189.89, gain: 2899, percent: 17.9, allocation: 8.1 },
  { scheme: "Cipla Ltd.", units: 121, avgPrice: 128.67, currentPrice: 189.89, gain: 2899, percent: 17.9, allocation: 8.1 },
  { scheme: "Dabur India Ltd", units: 700, avgPrice: 128.67, currentPrice: 189.89, gain: 2899, percent: 17.9, allocation: 8.1 },
  { scheme: "ICICI Bank Ltd.", units: 100, avgPrice: 128.67, currentPrice: 189.89, gain: -2899, percent: -17.9, allocation: 8.1 },
];

const MutualFundHoldings = () => {

  const handleDownloadPDF = () => {
    // Placeholder for download logic
    console.log("Downloading PDF...");
  }; 

  return (
    <div className="min-h-screen flex bg-[#0D1520] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-60">
      
        <div className="px-8 py-6 bg-[#1B2735] shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Page content */}
        <div className="p-6">
          {/* Heading */}
          <div className="bg-[#1B2735] p-4 border-b border-gray-700 mb-6">
            <h1 className="text-xl font-semibold">MUTUAL FUND HOLDINGS</h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>2022-23</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>All Schemes</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>₹ 10,000–20,000</option>
            </select>
          </div>

{/* Download Button */}
           <div className="flex justify-end mb-2">
             <button
               onClick={handleDownloadPDF}
               className="flex items-center gap-2 bg-[#2f3e54] hover:bg-[#3f5066] text-red-400 font-medium px-4 py-2 rounded-md"
               title="Download PDF"
             >
               <FaDownload size={16} />
               PDF
             </button>
           </div> 
           
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-[#1B2735]">
                <tr>
                  <th className="px-4 py-2">Scheme Name</th>
                  <th className="px-4 py-2">Units Held</th>
                  <th className="px-4 py-2">Avg. Price</th>
                  <th className="px-4 py-2">Current Price</th>
                  <th className="px-4 py-2">Market Value</th>
                  <th className="px-4 py-2">Gain/Loss</th>
                  <th className="px-4 py-2">Allocation</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((h, idx) => (
                  <tr key={idx} className="odd:bg-[#0D1520] even:bg-[#1B2735]">
                    <td className="px-4 py-2">{h.scheme}</td>
                    <td className="px-4 py-2">{h.units}</td>
                    <td className="px-4 py-2">₹ {h.avgPrice}</td>
                    <td className="px-4 py-2">₹ {h.currentPrice}</td>
                    <td className="px-4 py-2">₹ 77,909.00</td>
                    <td className={`px-4 py-2 font-medium ${h.gain >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {h.gain >= 0 ? `+ ₹${h.gain} (${h.percent}%)` : `- ₹${Math.abs(h.gain)} (${Math.abs(h.percent)}%)`}
                    </td>
                    <td className="px-4 py-2">{h.allocation}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Holdings
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to MF Dashboard 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFundHoldings;