import React from "react";
import Sidebar from "../components/Sidebar"; // Ensure Sidebar is available
import { FaDownload } from "react-icons/fa";

const redeemedFunds = [
  { scheme: "Adani Power Ltd.", units: 100, nav: 128.67, amount: 189.89, gain: 2899, percent: 17.9, date: "02/09/2024", folio: 99 },
  { scheme: "Adani Green Energy Ltd.", units: 238, nav: 128.67, amount: 189.89, gain: 2899, percent: 17.9, date: "02/09/2024", folio: 99 },
  { scheme: "Adani Wilmar Ltd.", units: 230, nav: 128.67, amount: 189.89, gain: 2899, percent: 17.9, date: "02/09/2024", folio: 34 },
  { scheme: "Bajaj Finance Ltd.", units: 300, nav: 128.67, amount: 189.89, gain: -2899, percent: -17.9, date: "02/09/2024", folio: 45 },
  { scheme: "Bajaj Finserv Ltd.", units: 123, nav: 128.67, amount: 189.89, gain: 2899, percent: 17.9, date: "02/09/2024", folio: 67 },
  { scheme: "Cipla Ltd.", units: 121, nav: 128.67, amount: 189.89, gain: 2899, percent: 17.9, date: "02/09/2024", folio: 56 },
  { scheme: "Dabur India Ltd", units: 700, nav: 128.67, amount: 189.89, gain: 2899, percent: 17.9, date: "02/09/2024", folio: 566 },
  { scheme: "ICICI Bank Ltd.", units: 100, nav: 128.67, amount: 189.89, gain: -2899, percent: -17.9, date: "02/09/2024", folio: 455 },
];

const RedeemedFunds = () => {

  const handleDownloadPDF = () => {
    // Placeholder for download logic
    console.log("Downloading PDF...");
  }; 
  
  return (
    <div className="min-h-screen flex bg-[#0D1520] text-white">
      <Sidebar />

      <div className="flex-1 ml-60 flex flex-col">
        {/* Header */}
        <div className="bg-[#1B2735] px-8 py-6 flex justify-end items-center shadow">
          <p className="mr-4 text-lg">Welcome Bankim Doshi!</p>
          <img
            src="https://i.pravatar.cc/60?img=1"
            className="w-12 h-12 rounded-full border-2 border-white"
            alt="Profile"
          />
        </div>

        {/* Page content */}
        <div className="p-6">
          {/* Heading */}
          <div className="bg-[#1B2735] p-4 border-b border-gray-700 mb-6">
            <h1 className="text-xl font-semibold">REDEEMED MUTUAL FUND DETAILS</h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>2022-23</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>All Schemes</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>₹ 10,000–20,000</option>
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
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 text-sm text-left">
              <thead className="bg-[#1B2735]">
                <tr>
                  <th className="px-4 py-2">Scheme Name</th>
                  <th className="px-4 py-2">Units Redeemed</th>
                  <th className="px-4 py-2">Redemption NAV</th>
                  <th className="px-4 py-2">Total Amt.</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Gain/Loss</th>
                  <th className="px-4 py-2">Folio Number(s)</th>
                </tr>
              </thead>
              <tbody>
                {redeemedFunds.map((f, idx) => (
                  <tr key={idx} className="odd:bg-[#0D1520] even:bg-[#1B2735]">
                    <td className="px-4 py-2">{f.scheme}</td>
                    <td className="px-4 py-2">{f.units}</td>
                    <td className="px-4 py-2">₹ {f.nav}</td>
                    <td className="px-4 py-2">₹ {f.amount}</td>
                    <td className="px-4 py-2">{f.date}</td>
                    <td className={`px-4 py-2 font-medium ${f.gain >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {f.gain >= 0 ? `+ ₹${f.gain} (${f.percent}%)` : `- ₹${Math.abs(f.gain)} (${Math.abs(f.percent)}%)`}
                    </td>
                    <td className="px-4 py-2">{f.folio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Redemptions
            </button>
             <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to MF Dashboard 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemedFunds;