import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaHeartbeat,
  FaUser,
  FaCar,
  FaHome,
  FaPlane,
  FaBriefcase,
  FaHospital,
  FaRunning,
  FaFileAlt,
} from "react-icons/fa";

const insuranceData = [
  { title: "Life Insurance", icon: <FaHeartbeat />, amountLeft: "₹ 4500" },
  { title: "Health Insurance", icon: <FaHospital />, amountLeft: "₹ 3500" },
  { title: "Vehicle Insurance", icon: <FaCar />, amountLeft: "₹ 6500" },
  { title: "Property Insurance", icon: <FaHome />, amountLeft: "₹ 4500" },
  { title: "Travel Insurance", icon: <FaPlane />, amountLeft: "₹ 3500" },
  { title: "Business Insurance", icon: <FaBriefcase />, amountLeft: "₹ 6500" },
  { title: "Home Insurance", icon: <FaHome />, amountLeft: "₹ 4500" },
  { title: "Accident Insurance", icon: <FaRunning />, amountLeft: "₹ 3500" },
  { title: "Other Insurance", icon: <FaFileAlt />, amountLeft: "₹ 6500" },
];

const InsuranceCard = ({ title, icon, amountLeft }) => {
  const [selected, setSelected] = useState(false);

  return (
<div
  tabIndex={0}
  onClick={() => setSelected(!selected)}
  onKeyDown={(e) => {
    if (e.key === "Enter") setSelected(!selected);
  }}
  className={`
    bg-[#1e293b] p-6 rounded-2xl w-full shadow-lg flex flex-col gap-4
    transition-shadow outline-none cursor-pointer
    border-l-4 border-gray-700
    ${selected ? "border-[#2DD4BF] shadow-xl" : "hover:border-[#2DD4BF] hover:shadow-xl"}
  `}
>

      <div
        className={`text-3xl transition-colors duration-300 ${
          selected ? "text-[#2DD4BF]" : "text-white hover:text-[#2DD4BF]"
        }`}
      >
        {icon}
      </div>
      <div
        className={`text-lg font-semibold transition-colors duration-300 ${
          selected ? "text-[#2DD4BF]" : "text-white hover:text-[#2DD4BF]"
        }`}
      >
        {title}
      </div>

      {/* Progress Bar ABOVE the amount */}
      <div className="w-full h-1 bg-gray-700 rounded-full">
        <div className="h-1 bg-green-500 rounded-full" style={{ width: "80%" }}></div>
      </div>

      <div className="text-sm text-gray-300">
        {amountLeft} <span className="text-white-800">left</span>
      </div>
    </div>
  );
};

const AllInsurancesPage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-60 bg-[#0D1520] min-h-screen">
        {/* Topbar */}
        <div className="sticky top-0 z-50 px-8 py-8 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
            <div className="w-12 h-8 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="pt-10 px-10 pb-10">
          {/* Label and Dropdown */}
          <div className="mb-6">
            <label className="block text-2xl font-semibold text-white mb-6">
              ALL INSURANCES
            </label>
            <select className="bg-[#1e293b] text-white px-4 py-2 rounded border border-gray-600 w-full max-w-sm">
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

          {/* Insurance Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {insuranceData.map((item, index) => (
              <InsuranceCard
                key={index}
                title={item.title}
                icon={item.icon}
                amountLeft={item.amountLeft}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInsurancesPage;
