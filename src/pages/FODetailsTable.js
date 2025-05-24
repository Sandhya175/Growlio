import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaUser } from "react-icons/fa";

const FODetailsTable = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

  const data = new Array(8).fill({
    contractType: "Future & Options",
    strikePrice: "₹7,889.00",
    optionType: "Call",
    expiryDate: "09/07/1998",
    contractSize: "Buy",
    premiumPaid: "Adani Group",
    openInterest: "₹7,889.00",
    entryPrice: "Stop Loss",
    exitPrice: "₹7,889.00",
    targetPrice: "₹7,889.00",
    stopLossPrice: "₹7,889.00",
    marginUsed: "Regular",
    brokerageFees: "₹7,889.00",
    slippage: "₹7,889.00",
    totalCost: "₹7,889.00",
    capitalUsed: "₹7,889.00",
    realizedPL: "₹7,889.00",
    unrealizedPL: "₹7,889.00",
  });

  const handleDownloadPDF = () => {
    alert("Downloading PDF...");
  };

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden">
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        <div className="pl-64 p-8">
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="text-white text-2xl mr-3 hover:text-gray-400"
            >
              &lt;
            </button>
            <h1 className="text-3xl font-bold">F&O Details</h1>
          </div>

<div>
  <select className="w-96 p-2 bg-[#1B2735] text-white p-3 rounded" >
    <option>Mr. Bankim Doshi</option>
    <option>Mrs. Nita Doshi</option>
    <option>Mr. Rashesh Doshi</option>
    <option>Mrs. Jagruti Doshi</option>
    <option>Bankim Doshi HUF</option>
    <option>Rashesh Doshi HUF</option>
    <option>Mrs. Pritika Doshi</option>
    <option>Mr. Krishna Doshi</option>
    <option>Talent Corner HR Services Pvt Ltd.</option>
  </select>
</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Filter by Year</label>
              <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
                <option>2022-23</option>
                <option>2021-22</option>
                <option>2020-21</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Filter by Strike Price</label>
              <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
                <option>₹5000 & above</option>
                <option>₹3000 - ₹5000</option>
                <option>Below ₹3000</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Filter By Total Cost</label>
              <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
                <option>₹5000 & above</option>
                <option>₹3000 - ₹5000</option>
                <option>Below ₹3000</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Futures & Options Trading Details
          </h2>

          <div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="bg-[#16202C] text-gray-400">
                <tr>
                  <th className="p-4">Contract Type</th>
                  <th className="p-4">Strike Price</th>
                  <th className="p-4">Option Type</th>
                  <th className="p-4">Expiry Date</th>
                  <th className="p-4">Contract Size</th>
                  <th className="p-4">Premium Paid</th>
                  <th className="p-4">Open Interest</th>
                  <th className="p-4">Entry Price</th>
                  <th className="p-4">Exit Price</th>
                  <th className="p-4">Target Price</th>
                  <th className="p-4">Stop Loss Price</th>
                  <th className="p-4">Margin Used</th>
                  <th className="p-4">Brokerage Fees</th>
                  <th className="p-4">Slippage</th>
                  <th className="p-4">Total Cost</th>
                  <th className="p-4">Capital Used</th>
                  <th className="p-4">Realized P/L</th>
                  <th className="p-4">Unrealized P/L</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
                    <td className="p-4">{row.contractType}</td>
                    <td className="p-4">{row.strikePrice}</td>
                    <td className="p-4">{row.optionType}</td>
                    <td className="p-4">{row.expiryDate}</td>
                    <td className="p-4">{row.contractSize}</td>
                    <td className="p-4">{row.premiumPaid}</td>
                    <td className="p-4">{row.openInterest}</td>
                    <td className="p-4">{row.entryPrice}</td>
                    <td className="p-4">{row.exitPrice}</td>
                    <td className="p-4">{row.targetPrice}</td>
                    <td className="p-4">{row.stopLossPrice}</td>
                    <td className="p-4">{row.marginUsed}</td>
                    <td className="p-4">{row.brokerageFees}</td>
                    <td className="p-4">{row.slippage}</td>
                    <td className="p-4">{row.totalCost}</td>
                    <td className="p-4">{row.capitalUsed}</td>
                    <td className="p-4">{row.realizedPL}</td>
                    <td className="p-4">{row.unrealizedPL}</td>
                    <td className="p-4 flex gap-3 text-gray-400">
                      <FaEdit className="hover:text-blue-400 cursor-pointer" />
                      <FaTrashAlt className="hover:text-red-400 cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="w-full flex justify-center mt-6 space-x-6">
            <button
              onClick={handleDownloadPDF}
              className="bg-[#3FE0D0] hover:bg-[#33c7ba] text-black font-semibold py-2 px-6 rounded-md transition-all"
            >
              Download PDF
            </button>
            <button
              onClick={() => navigate("/fo-dashboard")}
              className="border border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-black transition-all"
            >
              Go to F&O Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FODetailsTable;
