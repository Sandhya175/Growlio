import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaUser } from "react-icons/fa";

const Stocksaleinformation = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleDownloadPDF = () => {
    alert("Downloading PDF...");
  };

  const tradingData = [
    {
      industry: "Technology",
      company: "TCS",
      stock: "TCSH",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
    {
      industry: "Food",
      company: "Aditya Birla",
      stock: "ADBS",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
    {
      industry: "Technology",
      company: "Accenture",
      stock: "AHSD",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
    {
      industry: "Technology",
      company: "Infosys",
      stock: "AHSD",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
    {
      industry: "Automobile",
      company: "Tech Mahindra",
      stock: "AHSD",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
    {
      industry: "Technology",
      company: "Infosys",
      stock: "AHSD",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
    {
      industry: "Education",
      company: "Aditya Birla",
      stock: "AHSD",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
    {
      industry: "Food",
      company: "Accenture",
      stock: "AHSD",
      date: "09/09/2024",
      shares: 22,
      totalValue: "Adani Group",
      cost: "₹80,000",
      charges: "₹80,000",
      brokerage: "₹80,000",
      totalSale: "₹80,000",
    },
  ];

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden">
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
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
            <h1 className="text-3xl font-bold">Stock Sale Information</h1>
          </div>

          <div className="mb-6">
            <select className="w-96 bg-[#1B2735] text-white p-3 rounded">
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
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Filter by Trader Name</label>
              <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
                <option>Mr. Bankim Doshi</option>
              </select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm text-gray-300">Filter by Stock Name</label>
              <select className="bg-[#1E293B] text-white border border-gray-400 px-4 py-2 rounded-md w-full">
                <option>All Stocks</option>
                <option>Adani Group</option>
                <option>TCS</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-200">
            Intraday Trading Details
          </h2>

          <div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="bg-[#16202C] text-gray-400">
                <tr>
                  <th className="p-4">Industry Name</th>
                  <th className="p-4">Company Name</th>
                  <th className="p-4">Stock Name</th>
                  <th className="p-4">Date of Sale</th>
                  <th className="p-4">Number of shares sold</th>
                  <th className="p-4">Total Value</th>
                  <th className="p-4">Cost of Purchase</th>
                  <th className="p-4">Charges</th>
                  <th className="p-4">Brokerage</th>
                  <th className="p-4">Total Sale Value</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tradingData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
                    <td className="p-4">{row.industry}</td>
                    <td className="p-4">{row.company}</td>
                    <td className="p-4">{row.stock}</td>
                    <td className="p-4">{row.date}</td>
                    <td className="p-4">{row.shares}</td>
                    <td className="p-4">{row.totalValue}</td>
                    <td className="p-4">{row.cost}</td>
                    <td className="p-4">{row.charges}</td>
                    <td className="p-4">{row.brokerage}</td>
                    <td className="p-4">{row.totalSale}</td>
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

export default Stocksaleinformation;
