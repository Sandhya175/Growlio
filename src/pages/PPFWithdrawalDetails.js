import React from "react";
import Sidebar from "../components/Sidebar";
import { FaDownload } from "react-icons/fa";

const PPFWithdrawalDetails = () => {
  const withdrawals = [
    {
      bank: "SBI Bank",
      reason: "Renovation",
      amount: "₹ 2000.00",
      opening: "09/09/1998",
      maturity: "09/09/2028",
      branch: "Ghatkopar (W)",
    },
    {
      bank: "IOB",
      reason: "Home",
      amount: "₹ 2000.00",
      opening: "09/06/2022",
      maturity: "09/09/2032",
      branch: "Ghatkopar (W)",
    },
    {
      bank: "PN Bank",
      reason: "Education",
      amount: "₹ 2000.00",
      opening: "11/05/2025",
      maturity: "09/09/2032",
      branch: "Ghatkopar (W)",
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

        {/* Content */}
        <div className="p-6 w-full">
          <h1 className="text-2xl font-bold mb-6">PPF A/c. Withdrawal Details</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div>
              <p className="mb-1 text-sm">Filter by Year</p>
              <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-48">
                <option>2022-23</option>
              </select>
            </div>
            <div>
              <p className="mb-1 text-sm">Filter by Bank Name</p>
              <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-60">
                <option>All Banks</option>
              </select>
            </div>
            <div>
              <p className="mb-1 text-sm">Filter by Reason of Withdrawal</p>
              <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-60">
                <option>All Reasons</option>
              </select>
            </div>
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
                  <th className="px-4 py-2">Bank Name</th>
                  <th className="px-4 py-2">Reason of Withdrawal</th>
                  <th className="px-4 py-2">Withdrawal Amt</th>
                  <th className="px-4 py-2">Date of Opening</th>
                  <th className="px-4 py-2">Date of Maturity</th>
                  <th className="px-4 py-2">Branch</th>
                </tr>
              </thead>
              <tbody>
                {withdrawals.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-[#0D1520]" : "bg-[#1B2735]"}
                  >
                    <td className="px-4 py-2">{item.bank}</td>
                    <td className="px-4 py-2">{item.reason}</td>
                    <td className="px-4 py-2">{item.amount}</td>
                    <td className="px-4 py-2">{item.opening}</td>
                    <td className="px-4 py-2">{item.maturity}</td>
                    <td className="px-4 py-2">{item.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Withdrawals
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to PPF Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPFWithdrawalDetails;