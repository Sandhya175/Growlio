import React from "react";
import Sidebar from "../components/Sidebar";
import { FaDownload } from "react-icons/fa";

const InsuranceInvestmentDetails = () => {
  const handleDownloadPDF = () => {
    alert("Download PDF clicked!");
  };

  return (
    <div className="flex w-screen max-w-full bg-gray-900 text-white h-screen overflow-hidden">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-full w-60 bg-gray-800 z-50">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 ml-60 h-full overflow-y-auto">
        {/* Sticky Topbar */}
        <div className="sticky top-0 z-40 bg-gray-800 shadow-md px-8 py-6 flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Page Content */}
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6">INSURANCE INVESTMENT DETAILS</h1>

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
              <label className="text-sm text-gray-400 mb-1">Filter by Insurance Type</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>Life</option>
                <option>Health</option>
                <option>Vehicle</option>
                <option>Property</option>
                <option>Travel</option>
                <option>Business</option>
                <option>Home</option>
                <option>Accident</option>
                <option>Other</option>
              </select>
            </div>

            {/* Filter by Nominee Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Nominee Name</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>All Nominees</option>
              </select>
            </div>
          </div>

          {/* Download PDF Button */}
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

          {/* Table Section */}
          <div className="bg-[#1B2735] p-6 rounded-lg">
            <div className="grid grid-cols-7 font-semibold border-b border-gray-600 pb-2 mb-2">
              <div>Insurance Type</div>
              <div>Company Name</div>
              <div>Premium Amt.</div>
              <div>Payment Frequency</div>
              <div>Start Date</div>
              <div>Nominee Name</div>
              <div>Status</div>
            </div>

            {[
              ["Life Insurance", "XYZ Co.", "₹ 4528.67", "Annually", "02/09/2024", "Mrs. Nita Doshi", "ACTIVE"],
              ["Vehicle Insurance", "XYZ Co.", "₹ 4528.67", "Annually", "02/09/2024", "Mrs. Nita Doshi", "INACTIVE"],
              ["Home Insurance", "PQR Co.", "₹ 4528.67", "Annually", "02/09/2024", "Mrs. Nita Doshi", "ACTIVE"],
              ["Business Insurance", "ABC Co.", "₹ 4528.67", "Monthly", "02/09/2024", "Self", "ACTIVE"],
              ["Accident Insurance", "SSN Co.", "₹ 4528.67", "Annually", "02/09/2024", "Mrs. Nita Doshi", "ACTIVE"],
              ["Property Insurance", "DEF Co.", "₹ 4528.67", "Annually", "02/09/2024", "Mrs. Nita Doshi", "ACTIVE"],
              ["Travel Insurance", "XYZ Co.", "₹ 4528.67", "Annually", "02/09/2024", "Self", "INACTIVE"],
              ["Health Insurance", "DEF Co.", "₹ 4528.67", "Annually", "02/09/2024", "Mrs. Nita Doshi", "ACTIVE"]
            ].map(([type, company, amount, frequency, date, nominee, status], i) => (
              <div key={i} className="grid grid-cols-7 py-2 border-t border-gray-700 text-sm items-center">
                <div>{type}</div>
                <div>{company}</div>
                <div>{amount}</div>
                <div>{frequency}</div>
                <div>{date}</div>
                <div>{nominee}</div>
                <div>
                  <span
                    className={`inline-block w-20 text-center px-2 py-1 rounded text-xs font-bold ${
                      status === "ACTIVE" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="bg-[#3B9B8F] hover:bg-[#2f7a6f] px-6 py-3 rounded-md font-semibold text-white">
              Record More Investments
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to Insurance Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceInvestmentDetails;
