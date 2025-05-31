import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaUser } from 'react-icons/fa';

import {
  FaUniversity,
  FaChartBar,
  FaDice,
  FaUserShield,
  FaCoins,
  FaHome,
  FaStamp,
} from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";

function Reports() {
  const navigate = useNavigate();
const [username, setUsername] = useState('');
useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
  const investmentOptions = [
    { name: "Bank", icon: <FaUniversity />, route: "/axis-bank-dashboard" },
    { name: "Stocks", icon: <FaChartBar />, route: "/stock-dashboard" },
    { name: "Mutual Funds", icon: <FaDice />, route: "/choose-mutual-fund-action" },
    { name: "Insurance", icon: <FaUserShield />, route: "/instrument-setup/insurance" },
    { name: "Commodities", icon: <FaCoins />, route: "/commodity-action" },
    { name: "Properties", icon: <FaHome />, route: "/choose-property-action" },
    { name: "PPF", icon: <FaStamp />, route: "/ppf-action" },
    { name: "Borrowing", icon: <FaHandHoldingUsd />, route: "/add-borrowed-fund" }, 
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

        {/* Main Content */}
        <div className=" p-8 overflow-x-hidden">
          <h1 className="text-3xl font-bold mb-8">Reports</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {investmentOptions.map((option, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#1e293b] hover:bg-[#334155] transition cursor-pointer"
                onClick={() => option.route && navigate(option.route)} 
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <div className="text-lg font-semibold">{option.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reports;