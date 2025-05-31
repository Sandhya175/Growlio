import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaUser ,FaDownload} from "react-icons/fa";
import { MdEdit, MdDelete } from 'react-icons/md';

const PropertySaleDetails = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
const properties = [
  {
    owner: "Mr. Bankim Doshi",
    type: "Flat",
    secondaryOwners: "Mrs. Nita Doshi, Mr. Rashesh Doshi",
    share: "20%, 20%",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    purchaseDate: "12/04/2024",
    value: "1,25,00,000",
    builder: "Prestige Builders"
  },
  {
    owner: "Mrs. Nita Doshi",
    type: "Plot",
    secondaryOwners: "Mrs. Nita Doshi, Mr. Rashesh Doshi",
    share: "20%, 20%",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    purchaseDate: "12/04/2024",
    value: "75,00,000",
    builder: "Casagrand"
  },
  {
    owner: "Mr. Rashesh Doshi",
    type: "Villa",
    secondaryOwners: "Mrs. Nita Doshi, Mr. Rashesh Doshi",
    share: "20%, 20%",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    purchaseDate: "12/04/2024",
    value: "95,00,000",
    builder: "Skyline Builders"
  },
  {
    owner: "Mr. Bankim Doshi",
    type: "Flat",
    secondaryOwners: "Mrs. Nita Doshi, Mr. Rashesh Doshi",
    share: "20%, 20%",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    purchaseDate: "12/04/2024",
    value: "1,25,00,000",
    builder: "Prestige Builders"
  }
];


  return (
   <div className="min-h-screen bg-[#0D1520] text-white flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60">

        {/* Topbar */}
         <div className="sticky top-0 z-50 px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">PROPERTY PURCHASE DETAILS</h1>

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

            {/* Filter by Nominee Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Property Type </label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>Flat</option>
              </select>
            </div>
         

            {/* Filter by Insurance Type */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Sale Price</label>
              <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
              <option>80,00,000 and above</option>
            </select>
            </div>
            </div>

<h2 className="text-xl font-semibold mb-4 text-gray-200">Property Ownership & Legal Details</h2>
<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Primary Owner</th>
        <th className="py-2 px-3 whitespace-nowrap">Property Type</th>
        <th className="py-2 px-3 whitespace-nowrap">Secondary Owners</th>
        <th className="py-2 px-3 whitespace-nowrap">Percentage Share</th>
        <th className="py-2 px-3 whitespace-nowrap">Property Address</th>
        <th className="py-2 px-3 whitespace-nowrap">City</th>
        <th className="py-2 px-3 whitespace-nowrap">State</th>
        <th className="py-2 px-3 whitespace-nowrap">Country</th>
        <th className="py-2 px-3 whitespace-nowrap">Date of Purchase</th>
        <th className="py-2 px-3 whitespace-nowrap">Purchase Value (₹)</th>
        <th className="py-2 px-3 whitespace-nowrap">Name of Builder</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {properties.map((prop, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 font-semibold whitespace-nowrap">{prop.owner}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.type}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.secondaryOwners}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.share}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.address}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.city}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.state}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.country}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.purchaseDate}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.value}</td>
          <td className="py-2 px-3 whitespace-nowrap">{prop.builder}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          <div className="bg-[#1f2937] text-white p-6 shadow-lg rounded-xl mt-6">
  <h2 className="text-xl font-semibold mb-4">Legal & Documentation Details</h2>

  <div className="overflow-x-auto">
    <table className="min-w-full border-separate border-spacing-y-2">
      <thead>
        <tr className="text-left text-sm text-gray-300">
          <th className="px-4 py-2">Mode of Ownership</th>
          <th className="px-4 py-2">Property Registration Number</th>
          <th className="px-4 py-2">Registration Date</th>
          <th className="px-4 py-2">Property ID/Survey Number</th>
          <th className="px-4 py-2">Loan Availed?</th>
          <th className="px-4 py-2">Loan Amount (₹)</th>
          <th className="px-4 py-2">Bank Name</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            owner: "Mr. Bankim Doshi",
            mode: "Single",
            regNo: "REG/45321/2021",
            regDate: "01/09/2021",
            surveyNo: "SUR/908/21",
            loan: "Yes",
            amount: "50,00,000",
            bank: "HDFC Bank"
          },
          {
            owner: "Mr. Bankim Doshi",
            mode: "Single",
            regNo: "REG/45321/2020",
            regDate: "01/09/20210",
            surveyNo: "SUR/908/20",
            loan: "No",
            amount: "-",
            bank: "-"
          },
          {
            owner: "Joint",
            mode: "Joint",
            regNo: "REG/45321/2021",
            regDate: "01/09/2021",
            surveyNo: "SUR/908/21",
            loan: "No",
            amount: "-",
            bank: "-"
          },
          {
            owner: "Single",
            mode: "Single",
            regNo: "REG/45321/2020",
            regDate: "01/09/2020",
            surveyNo: "SUR/908/20",
            loan: "Yes",
            amount: "35,00,000",
            bank: "SBI"
          }
        ].map((row, idx) => (
          <tr key={idx} className="text-sm text-white border-b border-gray-700">
            <td className="px-4 py-2">{row.mode}</td>
            <td className="px-4 py-2">{row.regNo}</td>
            <td className="px-4 py-2">{row.regDate}</td>
            <td className="px-4 py-2">{row.surveyNo}</td>
            <td className="px-4 py-2">{row.loan}</td>
            <td className="px-4 py-2">{row.amount}</td>
            <td className="px-4 py-2">{row.bank}</td>
             <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
              <MdEdit className="hover:text-blue-400 cursor-pointer" />
              <MdDelete className="hover:text-red-400 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>  
      
{/* Documents */}
                <h2 className="text-xl font-semibold mb-4">Documents</h2>
                <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
                  <div className="mb-4">
                    <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                      <FaDownload />
                      Registration_doc.pdf
                    </button>
                    <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                      <FaDownload />
                      Property_Images.pdf
                    </button>
                  </div>
                </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Record More Sales
            </button>
            <button
  onClick={() => window.location.href = '/properties-dashboard'}
  className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-[#1e293b] transition-colors duration-200"
>
  Go to Property Dashboard
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySaleDetails;