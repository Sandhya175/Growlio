import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaUser ,FaDownload} from "react-icons/fa";
import { MdEdit, MdDelete } from 'react-icons/md';

const PPFNominationDetails = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);

       const [documents, setDocuments] = useState({});

  const handleFileUpload = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setDocuments((prev) => ({
        ...prev,
        [idx]: fileUrl,
      }));
    }
  };

  const handleUploadClick = (idx) => {
    document.getElementById(`fileInput-${idx}`).click();
  };

  const guardianList = [
    {
      name: "Mrs. Nita Doshi",
      relation: "Wife",
      contact: "+91 7889898977",
      address: "Aditi Apt, Ghatkopar (W)"
    },
    {
      name: "Mr. Rashesh Doshi",
      relation: "Son",
      contact: "+91 7889898977",
      address: "Aditi Apt, Ghatkopar (W)"
    },
    {
      name: "Mr. Rashesh Doshi",
      relation: "Son",
      contact: "+91 7889898977",
      address: "Aditi Apt, Ghatkopar (W)"
    }
  ];

  
const customerDetails = [
  {
    fullName: "Mr. Bankim Doshi",
    dob: "12/05/1992",
    gender: "Male",
    pan: "AQWPL1234E",
    aadhar: "123456789012",
    mobile: "9876543210",
    email: "doshi@gmail.com",
    resAddress: "101, Green Park, Delhi",
    bank: "HDFC",
    branch: "Ghatkopar (W)",
    account: "123456789012",
    ifsc: "HDFC0001234"
  },
  {
    fullName: "Mrs. Nita Doshi",
    dob: "01/01/1990",
    gender: "Female",
    pan: "BNGPV9876K",
    aadhar: "234567890123",
    mobile: "9988776655",
    email: "doshi@gmail.com",
    resAddress: "23B, Sector 21, Chandigarh",
    bank: "SBI",
    branch: "Ghatkopar (W)",
    account: "445566778899",
    ifsc: "SBIN0005678"
  },
  {
    fullName: "Mr. Rashesh Doshi",
    dob: "30/09/1998",
    gender: "Male",
    pan: "CVTPM2233Z",
    aadhar: "345678901234",
    mobile: "9001122334",
    email: "doshi@gmail.com",
    resAddress: "88, Koregaon Park, Pune",
    bank: "ICICI",
    branch: "Camp Road",
    account: "665544332211",
    ifsc: "ICIC0009876"
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
          <h1 className="text-2xl font-semibold mb-6">PPF A/c. NOMINATION DETAILS</h1>

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
             <label className="mb-2 text-sm text-white">Filter by Year</label>
              <select className="w-96 bg-[#1B2735] px-4 py-2 rounded-md border border-gray-600 text-white">
                <option>2022-23</option>
              </select>
            </div>

            {/* Filter by Nominee Name */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Nomination  </label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg min-w-[22rem]">
                <option>All Nominees</option>
              </select>
            </div>
         

            {/* Filter by Insurance Type */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Filter by Bank Names</label>
              <select className="w-96 p-3 bg-[#1B2735] text-white rounded">
              <option>All Banks</option>
            </select>
            </div>
            </div>

      <div className="bg-[#1B2735] rounded-lg mb-8 overflow-x-auto">
        <table className="w-full text-xs text-left min-w-[1400px] text-gray-300">
          <thead className="bg-[#16202C] text-gray-400">
            <tr>
              <th className="py-2 px-3 whitespace-nowrap">Account Holder Name</th>
              <th className="py-2 px-3 whitespace-nowrap">Date of Birth</th>
              <th className="py-2 px-3 whitespace-nowrap">Gender</th>
              <th className="py-2 px-3 whitespace-nowrap">PAN Number</th>
              <th className="py-2 px-3 whitespace-nowrap">Aadhar Number</th>
              <th className="py-2 px-3 whitespace-nowrap">Mobile No</th>
              <th className="py-2 px-3 whitespace-nowrap">Email ID</th>
              <th className="py-2 px-3 whitespace-nowrap">Residential Address</th>
              <th className="py-2 px-3 whitespace-nowrap">Bank Name</th>
              <th className="py-2 px-3 whitespace-nowrap">Branch Name</th>
              <th className="py-2 px-3 whitespace-nowrap">Account Number</th>
              <th className="py-2 px-3 whitespace-nowrap">IFSC Code</th>
              <th className="py-2 px-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerDetails.map((item, idx) => (
              <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
                <td className="py-2 px-3 whitespace-nowrap font-semibold">{item.fullName}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.dob}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.gender}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.pan}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.aadhar}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.mobile}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.email}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.resAddress}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.bank}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.branch}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.account}</td>
                <td className="py-2 px-3 whitespace-nowrap">{item.ifsc}</td>
                <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
                  <MdEdit className="hover:text-blue-400 cursor-pointer" />
                  <MdDelete className="text-red-400 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

<div className="bg-[#1f2937] text-white p-6 shadow-lg rounded-xl mt-6">
  <h2 className="text-xl font-semibold mb-4">Nominee Details</h2>

  <div className="overflow-x-auto">
    <table className="min-w-full border-separate border-spacing-y-2">
      <thead>
        <tr className="text-left text-sm text-gray-300">
          <th className="px-4 py-2">Nominee Name</th>
          <th className="px-4 py-2">Relationship with Acc Holder</th>
          <th className="px-4 py-2">DOB</th>
          <th className="px-4 py-2">Address</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {[
          {
            name: "Mrs. Nita Doshi",
            relation: "Wife",
            dob: "09/07/1998",
            address: "Aditi Apt, Ghatkopar (W)"
          },
          {
            name: "Mr. Rashesh Doshi",
            relation: "Son",
            dob: "09/07/1998",
            address: "Aditi Apt, Ghatkopar (W)"
          },
          {
            name: "Mr. Rashesh Doshi",
            relation: "Son",
            dob: "09/07/1998",
            address: "Aditi Apt, Ghatkopar (W)"
          },
          {
            name: "Mrs. Nita Doshi",
            relation: "Wife",
            dob: "09/07/1998",
            address: "Aditi Apt, Ghatkopar (W)"
          },
          {
            name: "Mrs. Jagruti Doshi",
            relation: "Daughter",
            dob: "09/07/1998",
            address: "Aditi Apt, Ghatkopar (W)"
          }
        ].map((row, idx) => (
          <tr key={idx} className="text-sm text-white border-b border-gray-700">
            <td className="px-4 py-2">{row.name}</td>
            <td className="px-4 py-2">{row.relation}</td>
            <td className="px-4 py-2">{row.dob}</td>
            <td className="px-4 py-2">{row.address}</td>
            <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
              <MdEdit className="hover:text-blue-400 cursor-pointer" />
              <MdDelete className="text-red-400 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

     <div className="bg-[#1f2937] text-white p-6 shadow-lg rounded-xl mt-6">
      <h2 className="text-xl font-semibold mb-4">Guardian Details</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm text-gray-300">
              <th className="px-4 py-2">Name of Guardian</th>
              <th className="px-4 py-2">Relationship with Nominee</th>
              <th className="px-4 py-2">Contact No. of Guardian</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Nominee ID Proof</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guardianList.map((row, idx) => (
              <tr key={idx} className="text-sm text-white border-b border-gray-700">
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.relation}</td>
                <td className="px-4 py-2">{row.contact}</td>
                <td className="px-4 py-2">{row.address}</td>
                <td className="px-4 py-2">
                  {documents[idx] ? (
                    <a
                      href={documents[idx]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline"
                    >
                      View Document
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() => handleUploadClick(idx)}
                        className="text-blue-400 underline"
                      >
                        Upload file here
                      </button>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.png"
                        id={`fileInput-${idx}`}
                        style={{ display: "none" }}
                        onChange={(e) => handleFileUpload(e, idx)}
                      />
                    </>
                  )}
                </td>
                <td className="py-2 px-3 whitespace-nowrap flex gap-2 justify-center text-gray-400">
                  <MdEdit className="hover:text-blue-400 cursor-pointer" />
                  <MdDelete className="text-red-400 cursor-pointer" />
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
                      nomination_update_acknowledgement.pdf
                    </button>
                    
                  </div>
                </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <button className="bg-[#00CDB4] hover:bg-[#00b39d] text-black px-6 py-2 rounded-md font-semibold">
              Download PDF
            </button>
           <button
  onClick={() => navigate("/ppf-dashboard")}
  className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition-colors"
>
  Go to PPF Dashboard
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPFNominationDetails;