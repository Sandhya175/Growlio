import React from "react";
import Sidebar from "../components/Sidebar";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaDownload } from 'react-icons/fa';

const MutualFundHoldings = () => {
  const mutualFunds = [
    {
      nameOfInvestor: "Mrs. Nita Doshi",
      dateOfPurchase: "12/04/2022",
      fundHouseName: "SBI Mutual Fund",
      folioNumber: "1234567890",
      schemeName: "SBI Bluechip Fund",
      schemeCategory: "Large Cap",
      startDate: "15/04/2022",
      investmentAmount: 50000,
      investmentMode: "SIP",
      unitsHeld: 200.75,
      loginId: "nita.doshi",
      password: "••••••••••",
      amcContactAgent: "Mr. Rajesh Verma (Mob: 9876543210)",
      status: "ACTIVE",
    },
    {
      nameOfInvestor: "Mr. Rashesh Doshi",
      dateOfPurchase: "05/06/2021",
      fundHouseName: "HDFC Mutual Fund",
      folioNumber: "4567891230",
      schemeName: "HDFC Flexi Cap Fund",
      schemeCategory: "Flexi Cap",
      startDate: "10/06/2021",
      investmentAmount: 30000,
      investmentMode: "Lumpsum",
      unitsHeld: 150.0,
      loginId: "rashesh.doshi",
      password: "••••••••••",
      amcContactAgent: "Ms. Sneha Nair (Mob: 9765432100)",
      status: "INACTIVE",
    },
    {
      nameOfInvestor: "Mrs. Jagruti Doshi",
      dateOfPurchase: "20/08/2023",
      fundHouseName: "ICICI Prudential",
      folioNumber: "7891234560",
      schemeName: "ICICI Value Discovery",
      schemeCategory: "Value Fund",
      startDate: "25/08/2023",
      investmentAmount: 75000,
      investmentMode: "SIP",
      unitsHeld: 320.2,
      loginId: "jagruti.doshi",
      password: "••••••••••",
      amcContactAgent: "Mr. Ajay Shah (Mob: 9654321876)",
      status: "ACTIVE",
    },
    {
      nameOfInvestor: "Mr. Bankim Doshi",
      dateOfPurchase: "14/01/2022",
      fundHouseName: "Axis Mutual Fund",
      folioNumber: "3216549870",
      schemeName: "Axis Midcap Fund",
      schemeCategory: "Mid Cap",
      startDate: "20/01/2022",
      investmentAmount: 40000,
      investmentMode: "SIP",
      unitsHeld: 180.6,
      loginId: "bankim.doshi",
      password: "••••••••••",
      amcContactAgent: "Mrs. Kavita Rao (Mob: 9123456789)",
      status: "INACTIVE",
    },
    {
      nameOfInvestor: "Mr. Rashesh Doshi",
      dateOfPurchase: "03/03/2024",
      fundHouseName: "Kotak Mutual Fund",
      folioNumber: "6549873210",
      schemeName: "Kotak Emerging Equity",
      schemeCategory: "Small Cap",
      startDate: "05/03/2024",
      investmentAmount: 60000,
      investmentMode: "Lumpsum",
      unitsHeld: 250.8,
      loginId: "nita.doshi",
      password: "••••••••••",
      amcContactAgent: "Mr. Rahul Menon (Mob: 9001234567)",
      status: "ACTIVE",
    },
  ];

  const statusColors = {
    ACTIVE: "bg-green-600",
    INACTIVE: "bg-red-600",
    DORMANT: "bg-yellow-600",
  };

  return (
    <div className="min-h-screen flex bg-[#0D1520] text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col ml-60 overflow-x-hidden">
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

        <div className="p-6">
          <div className="mb-4">
            <h1 className="text-xl font-semibold">MUTUAL FUND HOLDINGS</h1>
          </div>

          <div className="mb-6">
            <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
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

          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm text-white">Filter by Year</label>
              <select className="w-96 bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 text-white">
                <option>2022-23</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm text-white">Filter by Scheme Name</label>
              <select className="w-96 bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 text-white">
                <option>All Schemes</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm text-white">Filter by Market Value</label>
              <select className="w-96 bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 text-white">
                <option>₹ 10,000–20,000</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-200">Mutual Fund Details</h2>

          <div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto max-w-full">
            <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
              <thead className="bg-[#16202C] text-gray-400">
                <tr>
                  <th className="py-2 px-3 whitespace-nowrap">Name of Investor</th>
                  <th className="py-2 px-3 whitespace-nowrap">Date of Purchase</th>
                  <th className="py-2 px-3 whitespace-nowrap">Fund House Name</th>
                  <th className="py-2 px-3 whitespace-nowrap">Folio Number(s)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Scheme Name</th>
                  <th className="py-2 px-3 whitespace-nowrap">Scheme Category</th>
                  <th className="py-2 px-3 whitespace-nowrap">Start Date</th>
                  <th className="py-2 px-3 whitespace-nowrap">Investment Amount (₹)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Investment Mode</th>
                  <th className="py-2 px-3 whitespace-nowrap">Units Held</th>
                  <th className="py-2 px-3 whitespace-nowrap">Login ID</th>
                  <th className="py-2 px-3 whitespace-nowrap">Password</th>
                  <th className="py-2 px-3 whitespace-nowrap">AMC Contact/Agent for Claims</th>
                  <th className="py-2 px-3 whitespace-nowrap">Status</th>
                  <th className="py-2 px-3 whitespace-nowrap">Actions</th>

                </tr>
              </thead>
              <tbody>
                {mutualFunds.map((mf, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-700 hover:bg-[#23304a]"
                  >
                    <td className="py-2 px-3 font-semibold whitespace-nowrap">
                      {mf.nameOfInvestor}
                    </td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.dateOfPurchase}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.fundHouseName}</td>
                    <td className="py-2 px-3 font-mono tracking-widest whitespace-nowrap">
                      {mf.folioNumber}
                    </td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.schemeName}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.schemeCategory}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.startDate}</td>
                    <td className="py-2 px-3 whitespace-nowrap">
                      ₹{mf.investmentAmount.toLocaleString()}
                    </td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.investmentMode}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.unitsHeld}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.loginId}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.password}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{mf.amcContactAgent}</td>
                    <td className="py-2 px-3 whitespace-nowrap">
                      <span
                        className={`w-20 text-center inline-block px-3 py-1 rounded-md text-xs font-semibold text-white ${
                          statusColors[mf.status] || "bg-gray-600"
                        }`}
                      >
                        {mf.status}
                      </span>
                    </td>
                    <td className="py-2 px-3 whitespace-nowrap">
  <div className="flex gap-3">
    <MdEdit className="hover:text-blue-400 cursor-pointer" />
    <MdDelete className="hover:text-red-400 cursor-pointer" />
  </div>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

{/* Nominee Details Table */}
<h2 className="text-xl font-semibold mb-4 text-gray-200">Nominee Details</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-sm text-left text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="p-4">Nominee Name</th>
        <th className="p-4">Relationship with Acc Holder</th>
        <th className="p-4">DOB</th>
        <th className="p-4">Percentage Share</th>
        <th className="p-4">Address</th>
        <th className="p-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      {[
        { name: "Mrs. Nita Doshi", relation: "Wife", dob: "09/07/1998", share: "50%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mr. Rashesh Doshi", relation: "Son", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mr. Rashesh Doshi", relation: "Son", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mrs. Nita Doshi", relation: "Wife", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
        { name: "Mrs. Jagruti Doshi", relation: "Daughter", dob: "09/07/1998", share: "20%", address: "Aditi Apt, Ghatkopar (W)" },
      ].map((nominee, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="p-4">{nominee.name}</td>
          <td className="p-4">{nominee.relation}</td>
          <td className="p-4">{nominee.dob}</td>
          <td className="p-4">{nominee.share}</td>
          <td className="p-4">{nominee.address}</td>
          <td className="p-4 flex gap-3 text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

{/* Guardian Details Table */}
<h2 className="text-xl font-semibold mb-4">Guardian Details (if Nominee is a minor)</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-sm text-left">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="p-4">Name of Guardian</th>
        <th className="p-4">Relationship with Nominee</th>
        <th className="p-4">Contact No. of Guardian</th>
        <th className="p-4">Address</th>
        <th className="p-4">Nominee ID Proof</th>
        <th className="p-4">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-gray-700">
        <td className="p-4">Mrs. Nita Doshi</td>
        <td className="p-4">Wife</td>
        <td className="p-4">+91 7888989877</td>
        <td className="p-4">Aditi Apt, Ghatkopar (W)</td>
        <td className="p-4 text-[#FFD966] font-medium cursor-pointer">VIEW DOCUMENT</td>
        <td className="p-4 flex gap-3">
          <MdEdit className="hover:text-blue-400 cursor-pointer" />
          <MdDelete className="hover:text-red-400 cursor-pointer" />
        </td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Mr. Rashesh Doshi</td>
        <td className="p-4">Son</td>
        <td className="p-4">+91 7888989877</td>
        <td className="p-4">Aditi Apt, Ghatkopar (W)</td>
        <td className="p-4">
  <label className="text-gray-400 font-medium cursor-pointer hover:underline">
    UPLOAD FILE HERE
    <input
      type="file"
      accept=".pdf,.jpg,.jpeg,.png"
      className="hidden"
      onChange={(e) => {
        if (e.target.files.length > 0) {
          alert(`Selected file: ${e.target.files[0].name}`);
        }
      }}
    />
  </label>
</td>
        <td className="p-4 flex gap-3">
          <MdEdit className="hover:text-blue-400 cursor-pointer" />
          <MdDelete className="hover:text-red-400 cursor-pointer" />
        </td>
      </tr>
      <tr className="border-b border-gray-700">
        <td className="p-4">Mr. Rashesh Doshi</td>
        <td className="p-4">Son</td>
        <td className="p-4">+91 7888989877</td>
        <td className="p-4">Aditi Apt, Ghatkopar (W)</td>
        <td className="p-4 text-[#FFD966] font-medium cursor-pointer">VIEW DOCUMENT</td>
        <td className="p-4 flex gap-3">
          <MdEdit className="hover:text-blue-400 cursor-pointer" />
          <MdDelete className="hover:text-red-400 cursor-pointer" />
        </td>
      </tr>
    </tbody>
  </table>
</div>

 {/* Documents */}
          <h2 className="text-xl font-semibold mb-4">Documents</h2>
          <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
            <div className="mb-4">
              <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                <FaDownload />
                MF_Statement.pdf
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Download PDF
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

export default MutualFundHoldings;
