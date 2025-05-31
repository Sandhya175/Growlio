import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaUser ,FaDownload} from "react-icons/fa";
import { MdEdit, MdDelete } from 'react-icons/md';

const RentalPropertyDetails = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
const rentals = [
  {
    owner: "Mr. Bankim Doshi",
    startDate: "12/04/2024",
    duration: "12",
    type: "Flat",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    rent: "25,00,000",
    deposit: "25,00,000",
    paymentMode: "Bank Transfer",
    frequency: "Monthly",
    status: "ACTIVE"
  },
  {
    owner: "Mrs. Nita Doshi",
    startDate: "12/04/2024",
    duration: "24",
    type: "Plot",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    rent: "25,00,000",
    deposit: "25,00,000",
    paymentMode: "UPI",
    frequency: "Monthly",
    status: "INACTIVE"
  },
  {
    owner: "Mr. Rashesh Doshi",
    startDate: "12/04/2024",
    duration: "6",
    type: "Villa",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    rent: "25,00,000",
    deposit: "25,00,000",
    paymentMode: "Cash",
    frequency: "Monthly",
    status: "ACTIVE"
  },
  {
    owner: "Mr. Bankim Doshi",
    startDate: "12/04/2024",
    duration: "36",
    type: "Flat",
    address: "Mr. A-102, Green Valley Apartments, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    rent: "25,00,000",
    deposit: "25,00,000",
    paymentMode: "Cheque",
    frequency: "Monthly",
    status: "ACTIVE"
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
          <h1 className="text-2xl font-semibold mb-6">RENTAL PROPERTY DETAILS</h1>

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

<h2 className="text-xl font-semibold mb-4 text-gray-200">Rental Property Details</h2>

<div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
  <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Name of Land Owner</th>
        <th className="py-2 px-3 whitespace-nowrap">Rental Start Date</th>
        <th className="py-2 px-3 whitespace-nowrap">Agreement Duration (Months)</th>
        <th className="py-2 px-3 whitespace-nowrap">Property Type</th>
        <th className="py-2 px-3 whitespace-nowrap">Property Address</th>
        <th className="py-2 px-3 whitespace-nowrap">City</th>
        <th className="py-2 px-3 whitespace-nowrap">State</th>
        <th className="py-2 px-3 whitespace-nowrap">Country</th>
        <th className="py-2 px-3 whitespace-nowrap">Monthly Rent (₹)</th>
        <th className="py-2 px-3 whitespace-nowrap">Security Deposit (₹)</th>
        <th className="py-2 px-3 whitespace-nowrap">Mode of Payment</th>
        <th className="py-2 px-3 whitespace-nowrap">Rental Income Frequency</th>
        <th className="py-2 px-3 whitespace-nowrap">Current Rental Status</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {rentals.map((item, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 font-semibold whitespace-nowrap">{item.owner}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.startDate}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.duration}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.type}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.address}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.city}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.state}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.country}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.rent}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.deposit}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.paymentMode}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.frequency}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.status}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  
       {/* Documents */}
                <h2 className="text-xl font-semibold mb-4">Documents</h2>
                <div className="bg-[#1B2735] rounded-lg p-6 mb-8">
                  <div className="mb-4">
                    <button className="flex items-center gap-2 w-96 bg-[#0D1520] border border-gray-700 p-3 rounded mb-3">
                      <FaDownload />
                      Redeemtion_Proof.pdf
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


export default RentalPropertyDetails;