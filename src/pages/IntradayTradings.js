import React from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const IntradayTradings = () => {
  const navigate = useNavigate();

const handleDownloadPDF = () => {
    alert("Downloading PDF...");
    };

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      {/* Right Side */}
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="pl-64 p-8">
          {/* Back button and Title */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="text-white text-2xl mr-3 hover:text-gray-400"
            >
              &lt;
            </button>
            <h1 className="text-3xl font-bold">Intraday Tradings</h1>
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
  {/* Filter by Year */}
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-300">Filter by Year</label>
    <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
      <option>2025</option>
      <option>2024</option>
      <option>2023</option>
    </select>
  </div>

  {/* Filter by Trader Name */}
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-300">Filter by Trader Name</label>
    <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
      <option>Mr. Bankim Doshi</option>
    </select>
  </div>

  {/* Filter by Stock Name */}
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-300">Filter by Stock Name</label>
    <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
      <option>All Stocks</option>
      <option>Adani Group</option>
      <option>TCS</option>
    </select>
  </div>
</div>

          {/* Table title */}
{/* Intraday Tradings Table */}
<h2 className="text-xl font-semibold mb-4 text-gray-200">Intraday Tradings Details</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="p-4">Trader Name</th>
        <th className="p-4">Trader Date</th>
        <th className="p-4">Broker Name</th>
        <th className="p-4">Account Number</th>
        <th className="p-4">Trade Type</th>
        <th className="p-4">Stock Name</th>
        <th className="p-4">Quantity</th>
        <th className="p-4">Price Type</th>
        <th className="p-4">Order Type</th>
        <th className="p-4">Execution Time</th>
        <th className="p-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {[
        { name: "Mrs. Nita Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
        { name: "Mr. Rashesh Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
        { name: "Mr. Rashesh Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
        { name: "Mr. Rashesh Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
        { name: "Mr. Rashesh Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
        { name: "Mrs. Nita Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
        { name: "Mrs. Jagruti Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
        { name: "Mrs. Jagruti Doshi", date: "09/07/1998", broker: "Mr. XYZ", account: "73482989822", type: "Buy", stock: "Adani Group", qty: 45, priceType: "Market", orderType: "Regular", time: "0.9.22" },
      ].map((trade, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="p-4">{trade.name}</td>
          <td className="p-4">{trade.date}</td>
          <td className="p-4">{trade.broker}</td>
          <td className="p-4">{trade.account}</td>
          <td className="p-4">{trade.type}</td>
          <td className="p-4">{trade.stock}</td>
          <td className="p-4">{trade.qty}</td>
          <td className="p-4">{trade.priceType}</td>
          <td className="p-4">{trade.orderType}</td>
          <td className="p-4">{trade.time}</td>
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
    onClick={() => navigate("/stock-dashboard")}
    className="border border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-black transition-all"
  >
    Go to Stocks Dashboard
  </button>
</div>
          </div>
        </div>
      </div>
    
  );
};

export default IntradayTradings;