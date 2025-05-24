import React from "react";
import Sidebar from "../components/Sidebar";
import { FaDownload } from "react-icons/fa";

const insurance = [
  { type: "Gold", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "SBI Bank Locker", quantity: 22 },
  { type: "Gold", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "SBI Bank Locker", quantity: 22 },
  { type: "Gold", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "IOB Bank Locker", quantity: 22 },
  { type: "Silver", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "SBI Bank Locker", quantity: 2 },
  { type: "Silver", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "SBI Bank Locker", quantity: 22 },
  { type: "Gold", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "IOB Bank Locker", quantity: 22 },
  { type: "Silver", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "SBI Bank Locker", quantity: 10 },
  { type: "Gold", source: "XYZ Company", avgPrice: 4528.67, currentPrice: 8999.00, mode: "Physical", storage: "SBI Bank Locker", quantity: 12 },
];

const CommoditySaleDetails = () => {

  const handleDownloadPDF = () => {
    // Placeholder for download logic
    console.log("Downloading PDF...");
  }; 

  return (
    <div className="min-h-screen flex bg-[#0D1520] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-60">
       {/* Sticky Header */}
    <div className="sticky top-0 z-50 px-8 py-6 bg-[#1B2735] shadow-md flex justify-end items-center">
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
        <div className="p-6">
          {/* Heading */}
          <div className="bg-[#1B2735] p-4 border-b border-gray-700 mb-6">
            <h1 className="text-xl font-semibold">COMMODITY SALE DETAILS</h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>2022-23</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>All Type</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600">
              <option>Physical</option>
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
            <table className="min-w-full text-sm text-left border border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-[#1B2735]">
                <tr>
                  <th className="px-4 py-2">Commodity Type</th>
                  <th className="px-4 py-2">Source Name</th>
                  <th className="px-4 py-2">Avg Price</th>
                  <th className="px-4 py-2">Current Price</th>
                  <th className="px-4 py-2">Mode of Holding</th>
                  <th className="px-4 py-2">Storage Type</th>
                  <th className="px-4 py-2">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {insurance.map((item, idx) => (
                  <tr key={idx} className="odd:bg-[#0D1520] even:bg-[#1B2735]">
                    <td className="px-4 py-2">{item.type}</td>
                    <td className="px-4 py-2">{item.source}</td>
                    <td className="px-4 py-2">₹ {item.avgPrice}</td>
                    <td className="px-4 py-2">₹ {item.currentPrice}</td>
                    <td className="px-4 py-2">{item.mode}</td>
                    <td className="px-4 py-2">{item.storage}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Investments
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to Commodity Dashboard 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommoditySaleDetails;
