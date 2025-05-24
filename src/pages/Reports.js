import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import {
  FaUniversity,
  FaChartBar,
  FaDice,
  FaUserShield,
  FaCoins,
  FaHome,
  FaStamp,
} from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi"; 

function Reports() {
  const navigate = useNavigate();

  const investmentOptions = [
    { name: "Bank", icon: <FaUniversity />, route: "/report-bank" },
    { name: "Stocks", icon: <FaChartBar />, route: "/choose-company" },
    { name: "Mutual Funds", icon: <FaDice />, route: "/choose-mutual-fund-action" },
    { name: "Insurance", icon: <FaUserShield />, route: "/instrument-setup/insurance" },
    { name: "Commodities", icon: <FaCoins />, route: "/commodity-action" },
    { name: "Properties", icon: <FaHome />, route: "/choose-property-action" },
    { name: "PPF", icon: <FaStamp />, route: "/ppf-action" },
    { name: "Borrowing", icon: <GiReceiveMoney />, route: "/add-borrowed-fund" }, 
  ];

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
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
        <div className="pl-64 p-8 overflow-x-hidden">
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