import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {FaUser,FaDownload} from "react-icons/fa";

const CommoditySaleDetails = () => {

  const tableData = [
    { commodity: 'Gold', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'SBI Bank Locker', quantity: 22 },
    { commodity: 'Gold', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'SBI Bank Locker', quantity: 22 },
    { commodity: 'Gold', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'IOB Bank Locker', quantity: 22 },
    { commodity: 'Silver', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'SBI Bank Locker', quantity: 2 },
    { commodity: 'Silver', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'SBI Bank Locker', quantity: 22 },
    { commodity: 'Gold', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'IOB Bank Locker', quantity: 22 },
    { commodity: 'Silver', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'SBI Bank Locker', quantity: 10 },
    { commodity: 'Gold', source: 'XYZ Company', avgPrice: '₹ 4528.67', salePrice: '₹ 8999.00', mode: 'Physical', storage: 'SBI Bank Locker', quantity: 12 },
  ];

const [username, setUsername] = useState('');
useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []); 

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60">

        {/* Topbar */}
         <div className="sticky top-0 z-50 px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6">COMMODITY SALE DETAILS</h1>

 <div className="mb-6">
            <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
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

          {/* Filters */}
          <div className="flex gap-6 mb-6">
            {/* Filter by Year */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Year</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>2024-25</option>
                <option>2023-24</option>
                <option>2022-23</option>
                <option>2021-22</option>
                <option>2020-21</option>
                <option>2019-20</option>
                <option>2018-19</option>
              </select>
            </div>

            {/* Filter by Insurance Type */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Commodity Type</label>
              <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
              <option>All Types</option>
            </select>
            </div>

            {/* Filter by Nominee Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Mode Of Holding </label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>Physical</option>
              </select>
            </div>
          </div>

 <div className="bg-[#1f2937] text-white p-6 shadow-lg rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Account Details</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm text-gray-300">
              <th className="px-4 py-2">Commodity Type</th>
              <th className="px-4 py-2">Source Name</th>
              <th className="px-4 py-2">Avg Price.</th>
              <th className="px-4 py-2">Sale Price</th>
              <th className="px-4 py-2">Mode of Holding</th>
              <th className="px-4 py-2">Storage Type</th>
              <th className="px-4 py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
             <tr key={idx} className="text-sm text-white border-b border-gray-700">
  <td className="px-4 py-2">{row.commodity}</td>
  <td className="px-4 py-2">{row.source}</td>
  <td className="px-4 py-2">{row.avgPrice}</td>
  <td className="px-4 py-2">{row.salePrice}</td>
  <td className="px-4 py-2">{row.mode}</td>
  <td className="px-4 py-2">{row.storage}</td>
  <td className="px-4 py-2">{row.quantity}</td>
</tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>

 {/* Documents */}
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
            <div className="mb-4">
              <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                <FaDownload />
                Sales_invoice.pdf
              </button>
            </div>
          </div>

         
          {/* Footer Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-3 rounded-md font-semibold text-white">
              Download PDF
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to Commodities Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommoditySaleDetails;
