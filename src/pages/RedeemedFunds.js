import React from 'react';
import Sidebar from "../components/Sidebar";
import { FaDownload } from 'react-icons/fa';
import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const RedeemedMutualFundDetails = () => {
  const navigate = useNavigate();
  // Your new redeemed mutual fund data
  const redeemedFunds = [
    {
      investorName: "Mrs. Nita Doshi",
      schemeName: "SBI Bluechip Fund",
      schemeCategory: "Large Cap",
      folioNumber: "1234567890",
      investmentMode: "SIP",
      dateOfPurchase: "12/04/2022",
      dateOfRedemption: "15/04/2022",
      unitsRedeemed: 200.75,
      navAtRedemption: "₹40,000",
      totalRedemptionValue: "₹50,000",
      exitLoadPercent: "1.00%",
      exitLoadAmount: "₹40,000",
      netPayout: "₹40,000",
      capitalGain: "₹40,000",
      tds: "₹40,000",
    },
    {
      investorName: "Mr. Rashesh Doshi",
      schemeName: "HDFC Flexi Cap Fund",
      schemeCategory: "Flexi Cap",
      folioNumber: "4567891230",
      investmentMode: "Lumpsum",
      dateOfPurchase: "05/06/2021",
      dateOfRedemption: "01/01/2021",
      unitsRedeemed: 150.00,
      navAtRedemption: "₹30,000",
      totalRedemptionValue: "₹30,000",
      exitLoadPercent: "1.00%",
      exitLoadAmount: "₹30,000",
      netPayout: "₹30,000",
      capitalGain: "₹30,000",
      tds: "₹30,000",
    },
    {
      investorName: "Mrs. Jagruti Doshi",
      schemeName: "ICICI Value Discovery",
      schemeCategory: "Value Fund",
      folioNumber: "7891234560",
      investmentMode: "SIP",
      dateOfPurchase: "20/08/2023",
      dateOfRedemption: "10/06/2020",
      unitsRedeemed: 320.20,
      navAtRedemption: "₹75,000",
      totalRedemptionValue: "₹75,000",
      exitLoadPercent: "1.00%",
      exitLoadAmount: "₹75,000",
      netPayout: "₹75,000",
      capitalGain: "₹75,000",
      tds: "₹75,000",
    },
    {
      investorName: "Mr. Bankim Doshi",
      schemeName: "Axis Midcap Fund",
      schemeCategory: "Mid Cap",
      folioNumber: "3216549870",
      investmentMode: "SIP",
      dateOfPurchase: "14/01/2022",
      dateOfRedemption: "05/09/2019",
      unitsRedeemed: 180.60,
      navAtRedemption: "₹40,000",
      totalRedemptionValue: "₹40,000",
      exitLoadPercent: "1.00%",
      exitLoadAmount: "₹40,000",
      netPayout: "₹40,000",
      capitalGain: "₹40,000",
      tds: "₹40,000",
    },
    {
      investorName: "Mr. Rashesh Doshi",
      schemeName: "Kotak Emerging Equity",
      schemeCategory: "Small Cap",
      folioNumber: "6549873210",
      investmentMode: "Lumpsum",
      dateOfPurchase: "03/03/2024",
      dateOfRedemption: "20/11/2021",
      unitsRedeemed: 250.80,
      navAtRedemption: "₹60,000",
      totalRedemptionValue: "₹60,000",
      exitLoadPercent: "1.00%",
      exitLoadAmount: "₹60,000",
      netPayout: "₹60,000",
      capitalGain: "₹60,000",
      tds: "₹60,000",
    },
  ];

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
          {/* Heading */}
          <div className="mb-4">
            <h1 className="text-xl font-semibold">REDEEMED MUTUAL FUND DETAILS</h1>
          </div>

          {/* Account Holder Name Dropdown */}
          <div className="mb-6">
            <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
              <option>Mrs. Nita Doshi</option>
              <option>Mr. Rashesh Doshi</option>
              <option>Mrs. Jagruti Doshi</option>
              <option>Mr. Bankim Doshi</option>
              <option>Bankim Doshi HUF</option>
              <option>Rashesh Doshi HUF</option>
              <option>Mrs. Pritika Doshi</option>
              <option>Mr. Krishna Doshi</option>
              <option>Talent Corner HR Services Pvt Ltd.</option>
            </select>
          </div>

          {/* Filters */}
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


          {/* Redeemed Mutual Fund Table */}
          <h2 className="text-xl font-semibold mb-4 text-gray-200">Redeemed Mutual Fund Details</h2>
          <div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto max-w-full">
            <table className="w-full text-xs text-left min-w-[1600px] text-gray-300">
              <thead className="bg-[#16202C] text-gray-400">
                <tr>
                  <th className="py-2 px-3 whitespace-nowrap">Name of Investor</th>
                  <th className="py-2 px-3 whitespace-nowrap">Scheme Name</th>
                  <th className="py-2 px-3 whitespace-nowrap">Scheme Category</th>
                  <th className="py-2 px-3 whitespace-nowrap">Folio Number(s)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Investment Mode</th>
                  <th className="py-2 px-3 whitespace-nowrap">Date of Purchase</th>
                  <th className="py-2 px-3 whitespace-nowrap">Date of Redemption</th>
                  <th className="py-2 px-3 whitespace-nowrap">Units Redeemed</th>
                  <th className="py-2 px-3 whitespace-nowrap">NAV at Redemption (₹)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Total Redemption Value (₹)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Exit Load (%)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Exit Load Amount (₹)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Net Payout (₹)</th>
                  <th className="py-2 px-3 whitespace-nowrap">Capital Gain (₹)</th>
                  <th className="py-2 px-3 whitespace-nowrap">TDS (₹)</th>
                </tr>
              </thead>
              <tbody>
                {redeemedFunds.map((fund, idx) => (
                  <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
                    <td className="py-2 px-3 font-semibold whitespace-nowrap">{fund.investorName}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.schemeName}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.schemeCategory}</td>
                    <td className="py-2 px-3 font-mono tracking-widest whitespace-nowrap">{fund.folioNumber}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.investmentMode}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.dateOfPurchase}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.dateOfRedemption}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.unitsRedeemed}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.navAtRedemption}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.totalRedemptionValue}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.exitLoadPercent}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.exitLoadAmount}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.netPayout}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.capitalGain}</td>
                    <td className="py-2 px-3 whitespace-nowrap">{fund.tds}</td>
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
                RMF_Statement.pdf
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Download PDF
            </button>
            <button
  onClick={() => navigate('/mf-dashboard')}
  className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold"
>
  Go to MF Dashboard
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RedeemedMutualFundDetails;
