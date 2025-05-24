import React from "react";
import Sidebar from "../components/Sidebar";
import {
  FaHeartbeat,
  FaHospital,
  FaCar,
  FaBuilding,
  FaPlane,
  FaBriefcase,
  FaHome,
  FaUserInjured,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const insuranceOptions = [
  { name: "Life Insurance", icon: <FaHeartbeat /> },
  { name: "Health Insurance", icon: <FaHospital /> },
  { name: "Vehicle Insurance", icon: <FaCar /> },
  { name: "Property Insurance", icon: <FaBuilding /> },
  { name: "Travel Insurance", icon: <FaPlane /> },
  { name: "Business Insurance", icon: <FaBriefcase /> },
  { name: "Home Insurance", icon: <FaHome /> },
  { name: "Accident Insurance", icon: <FaUserInjured /> },
  { name: "Others", icon: <FaFileAlt /> },
];

const InsurancePage = () => {
  const navigate = useNavigate();

  const handleClick = (optionName) => {
    switch (optionName) {
      case "Life Insurance":
        navigate("/life-insurance-details");
        break;
      case "Health Insurance":
        navigate("/health-insurance");
        break;
      case "Vehicle Insurance":
        navigate("/vehicle-insurance");
        break;
      case "Property Insurance":
        navigate("/add-property-insurance");
        break;
      case "Travel Insurance":
        navigate("/add-travel-insurance");
        break;
      case "Business Insurance":
        navigate("/business-insurance");
        break;
      case "Home Insurance":
        navigate("/add-home-insurance");
        break;
      case "Accident Insurance":
        navigate("/add-accident-insurance");
        break;
      case "Others":
        navigate("/add-other-insurance");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h2 className="text-3xl font-bold mb-10">Type of Insurances</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {insuranceOptions.map((option, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(option.name)}
                className="flex flex-col items-center justify-center p-8 rounded-lg shadow-md transition-all duration-200 cursor-pointer text-center bg-[#1B263B] hover:border hover:border-gray-600"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <div className="text-lg font-medium">{option.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
