import React from "react";
import { FaDownload } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const PPFContributionDetails = () => {
  const contributions = [
    {
      bank: "SBI Bank",
      pan: "AAAA6789AA",
      amount: "₹ 2000.00",
      opening: "09/09/1998",
      contribution: "09/09/2028",
      branch: "Ghatkopar (W)",
    },
    {
      bank: "IOB",
      pan: "AAAA6789AA",
      amount: "₹ 2000.00",
      opening: "09/06/2022",
      contribution: "09/09/2032",
      branch: "Ghatkopar (W)",
    },
    {
      bank: "PN Bank",
      pan: "AAAA6789AA",
      amount: "₹ 2000.00",
      opening: "11/05/2025",
      contribution: "09/09/2032",
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

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">
            PPF A/c. Contribution Details
          </h1>

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
              <p className="mb-1 text-sm">Filter by Branch</p>
              <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-60">
                <option>Ghatkopar</option>
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
                  <th className="px-4 py-2">PAN Card Number</th>
                  <th className="px-4 py-2">Contribution Amt</th>
                  <th className="px-4 py-2">Date of Opening</th>
                  <th className="px-4 py-2">Date of Contribution</th>
                  <th className="px-4 py-2">Branch</th>
                </tr>
              </thead>
              <tbody>
                {contributions.map((acc, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-[#0D1520]" : "bg-[#1B2735]"}
                  >
                    <td className="px-4 py-2">{acc.bank}</td>
                    <td className="px-4 py-2">{acc.pan}</td>
                    <td className="px-4 py-2">{acc.amount}</td>
                    <td className="px-4 py-2">{acc.opening}</td>
                    <td className="px-4 py-2">{acc.contribution}</td>
                    <td className="px-4 py-2">{acc.branch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Contributions
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

export default PPFContributionDetails;
