import React from "react";
import Sidebar from "../components/Sidebar";
import { FaDownload } from "react-icons/fa";
const PropertyPurchaseDetails = () => {
  const purchaseData = [
    {
      seller: "Mr. Bankim Doshi",
      buyer: "Mr. Rahul",
      type: "Flat",
      saleAmount: 45280.67,
      purchaseValue: "₹ 89,990,000",
      date: "April 5, 2025",
    },
    {
      seller: "Mr. Bankim Doshi",
      buyer: "Mr. Joshi",
      type: "Flat",
      saleAmount: 45280.67,
      purchaseValue: "₹ 89,990,000",
      date: "April 5, 2025",
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
          <h1 className="text-2xl font-semibold mb-6">PROPERTY PURCHASE DETAILS</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-48">
              <option>2022-23</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-48">
              <option>Flat</option>
            </select>
            <select className="bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 w-64">
              <option>30,00,000 and above</option>
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
                  <th className="px-4 py-2">Name of Seller</th>
                  <th className="px-4 py-2">Name of Buyer</th>
                  <th className="px-4 py-2">Property Type</th>
                  <th className="px-4 py-2">Sale Amount</th>
                  <th className="px-4 py-2">Purchase Value</th>
                  <th className="px-4 py-2">Date of Purchase</th>
                </tr>
              </thead>
              <tbody>
                {purchaseData.map((item, index) => (
                  <tr key={index} className="odd:bg-[#0D1520] even:bg-[#1B2735]">
                    <td className="px-4 py-2">{item.seller}</td>
                    <td className="px-4 py-2">{item.buyer}</td>
                    <td className="px-4 py-2">{item.type}</td>
                    <td className="px-4 py-2">₹ {item.saleAmount}</td>
                    <td className="px-4 py-2">{item.purchaseValue}</td>
                    <td className="px-4 py-2">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Purchases
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold">
              Go to Propert Dashboard 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPurchaseDetails;