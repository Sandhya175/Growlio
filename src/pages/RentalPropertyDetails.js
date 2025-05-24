import React from "react";
import Sidebar from "../components/Sidebar";
import { FaDownload } from "react-icons/fa";

const RentalPropertyDetails = () => {
  const rentalData = [
    {
      owner: "Mr. Bankim Doshi",
      buyer: "Mr. Rahul",
      property: "Flat",
      rent: "₹ 45280.67",
      deposit: "₹ 89990.00",
      duration: "Six months",
      startDate: "April 5, 2025",
    },
    {
      owner: "Mr. Bankim Doshi",
      buyer: "Mr. Joshi",
      property: "Flat",
      rent: "₹ 45280.67",
      deposit: "₹ 89990.00",
      duration: "Three months",
      startDate: "April 5, 2025",
    },
  ];

  const handleDownloadPDF = () => {
    // Placeholder for download logic
    console.log("Downloading PDF...");
  };

  return (
    <div className="min-h-screen flex bg-[#0D1520] text-white">
      <Sidebar />
      <div className="flex-1 ml-60 flex flex-col">
        {/* Header */}
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

        {/* Page Heading */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">RENTAL PROPERTY DETAILS</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-48">
              <option>2022-23</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-48">
              <option>All Type</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-48">
              <option>All Durations</option>
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
          <div className="overflow-x-auto border border-gray-700 rounded-lg">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-[#1B2735]">
                <tr>
                  <th className="px-4 py-2">Name of Land Owner</th>
                  <th className="px-4 py-2">Name of Buyer</th>
                  <th className="px-4 py-2">Property Name</th>
                  <th className="px-4 py-2">Rent Amount (monthly)</th>
                  <th className="px-4 py-2">Security Deposit</th>
                  <th className="px-4 py-2">Agreement duration (monthly)</th>
                  <th className="px-4 py-2">Rental Start date</th>
                </tr>
              </thead>
              <tbody>
                {rentalData.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-[#0D1520]" : "bg-[#1B2735]"}
                  >
                    <td className="px-4 py-2">{item.owner}</td>
                    <td className="px-4 py-2">{item.buyer}</td>
                    <td className="px-4 py-2">{item.property}</td>
                    <td className="px-4 py-2">{item.rent}</td>
                    <td className="px-4 py-2">{item.deposit}</td>
                    <td className="px-4 py-2">{item.duration}</td>
                    <td className="px-4 py-2">{item.startDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Rental Properties
            </button>
           <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to Property Dashboard 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalPropertyDetails;