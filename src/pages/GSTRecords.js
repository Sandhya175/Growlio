import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from 'react-icons/md';
import Sidebar from '../components/Sidebar'; 
import { useNavigate } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';

const gstPdf = "/sample.pdf"; // fallback public file


const GSTRecords = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const data = [
    {
      provider: "Zerodha",
      invoice: "ZRD/INV/2025/001",
      date: "2025-04-10",
      amount: "₹1,000",
      rate: "18%",
      gst: "₹180",
    },
    {
      provider: "Groww",
      invoice: "GRW/INV/4482",
      date: "2025-03-28",
      amount: "₹5,000",
      rate: "18%",
      gst: "₹900",
    },
    {
      provider: "HDFC",
      invoice: "HDFC/AMC/56789",
      date: "2025-04-01",
      amount: "₹2,500",
      rate: "18%",
      gst: "₹450",
    },
    {
      provider: "Angel One",
      invoice: "ANG/2025/INV7821",
      date: "2025-05-02",
      amount: "₹1,200",
      rate: "18%",
      gst: "₹216",
    },
  ];

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
        <div className="p-8 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">GST DETAILS</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-6 border-b border-gray-600 pb-2 mb-4 text-sm">
            <button><span className="hover:border-b-2 hover:border-transparent px-1">STCG</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">LTCG</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">Income Tax</span></button>
            <button><span className="border-b-2 border-white inline-block px-1">GST</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">TDS</span></button>
            <button><span className="hover:border-b-2 hover:border-transparent px-1">Dividends</span></button>
          </div>

          {/* Year Dropdown */}
          <div className="flex gap-4">
            <select
              className="text-sm border px-4 py-2 rounded bg-[#1E293B] text-white"
              defaultValue="FY 2022-23"
            >
              {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, i) => {
                const startYear = 2000 + i;
                const endYear = startYear + 1;
                return (
                  <option key={startYear} value={`FY ${startYear}-${endYear}`}>
                    FY {startYear}-{endYear}
                  </option>
                );
              })}
            </select>
            <span className="text-gray-400 text-sm">(Select the year to see the regime)</span>
          </div>

          {/* Download PDF */}
          <div className="flex justify-end mb-2 mt-4">
            <a
              href={gstPdf}
              download
              className="flex items-center text-sm text-yellow-300 hover:text-yellow-400"
            >
              <FiDownload className="mr-1" />
              PDF
            </a>
          </div>

          {/* Data Table */}
          <div className="bg-[#1E293B] rounded-lg p-4 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="py-2">Service Provider Name</th>
                  <th>Invoice Number</th>
                  <th>Transaction Date</th>
                  <th>Invoice Amount</th>
                  <th>GST Rate (%)</th>
                  <th>GST Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-[#2D3748] text-white">
                    <td className="py-2">{item.provider}</td>
                    <td>{item.invoice}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>{item.rate}</td>
                    <td>{item.gst}</td>
                    <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
                      <MdEdit className="hover:text-blue-400 cursor-pointer" title="Edit" />
                      <MdDelete className="hover:text-red-400 cursor-pointer" title="Delete" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add New Record */}
          <div className="flex justify-center mt-6">
            <button
              className="bg-teal-400 text-black py-3 px-8 rounded-lg font-semibold hover:bg-teal-300 transition"
              onClick={() => navigate('/record-gst')}
            >
              Add New Record
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GSTRecords;
