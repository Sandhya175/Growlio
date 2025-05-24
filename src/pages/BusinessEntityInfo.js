import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEdit, FaTrash } from "react-icons/fa";

const BusinessEntityInfo = () => {
  const [selectedInvestor, setSelectedInvestor] = useState("Talent Corner HR Services Pvt Ltd");

  const dropdownOptions = [
    "Bankim Doshi",
    "Nita Doshi",
    "Rashesh Doshi",
    "Jagruti Doshi",
    "Bankim Doshi HUF",
    "Rashesh Doshi HUF",
    "Pritika Doshi",
    "Krishna Doshi",
    "Talent Corner HR Services Pvt Ltd"
  ];

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />

      <div className="flex flex-col flex-1 bg-gray-900 ml-60 relative max-h-screen overflow-y-auto">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        <div className="p-6 lg:px-8 xl:px-16">
          <h1 className="text-2xl font-bold mb-6">BUSINESS ENTITY INFORMATION</h1>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1B2735] text-white px-4 py-2 rounded-md w-full md:w-80"
            />
          </div>

          {/* Dropdown on Left + Buttons on Right */}
          <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
            <select
              className="bg-[#1B2735] text-white px-4 py-2 rounded-md w-80"
              value={selectedInvestor}
              onChange={(e) => setSelectedInvestor(e.target.value)}
            >
              {dropdownOptions.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>

            <div className="flex gap-4">
              <button className="bg-[#00E396] hover:bg-[#00cc7a] px-4 py-2 rounded-md font-medium whitespace-nowrap">
                + Add Information
              </button>
              <button className="bg-[#FFA726] hover:bg-[#fb8c00] px-4 py-2 rounded-md font-medium whitespace-nowrap">
                + Add Investor
              </button>
            </div>
          </div>

          {/* Investor Card */}
          <div className="flex items-center gap-4 justify-between mb-6">
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/50?img=1"
                alt="Investor"
                className="rounded-full w-12 h-12"
              />
              <div>
                <h2 className="font-bold text-lg text-white"> {selectedInvestor}</h2>
                <p className="text-sm text-gray-400">Business Entity</p>
              </div>
            </div>
            <div className="flex gap-3 text-xl">
              <FaEdit className="cursor-pointer text-white" />
              <FaTrash className="cursor-pointer text-red-500" />
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            <InfoSection title="Company Details" color="#00E396" icon="🏢">
              <InfoTable
                headers={["Company Name", "Date of Income", "UID No.", "Upload PDF"]}
                rows={[
                  ["K1234567", "09-08-2002", "7289 7392 8090", <FileUpload />]
                ]}
              />
            </InfoSection>

            <InfoSection title="Licenses & Registrations" color="#00E396" icon="📄">
              <InfoTable
                headers={[
                  "Registration No.",
                  "ESI Registration",
                  "GSTIN No.",
                  "TAN No.",
                  "Trade Mark Registration No.",
                  "MSME Reg No. (Udyam No.)",
                  "Upload PDF"
                ]}
                rows={[
                  [
                    "749282029",
                    "7249849820",
                    "289484091",
                    "200222",
                    "498208",
                    "840180290",
                    <FileUpload />
                  ]
                ]}
              />
            </InfoSection>

            <InfoSection title="Accounting Software" color="#00E396" icon="💻">
              <InfoTable
                headers={["Version", "License Key/Product Key", "Upload PDF"]}
                rows={[
                  [
                    "Tally ERP 9 – Release 6.6.4",
                    "TLY9-6KX2-M5QD-Z81V",
                    <FileUpload small />
                  ]
                ]}
              />
            </InfoSection>

            <InfoSection title="Partnership Details" color="#00E396" icon="🤝">
              <InfoTable
                headers={[
                  "Type Of Partnership",
                  "Date Of Agreement",
                  "Partner Count",
                  "Business Nature",
                  "Percentage Share",
                  "PAN Upload",
                  "Deed Upload"
                ]}
                rows={[
                  [
                    "LLP",
                    "15-07-2019",
                    "2",
                    "HR Services",
                    "20%",
                    <FileUpload />,
                    <FileUpload />
                  ]
                ]}
              />
            </InfoSection>

            <InfoSection title="Stackholders" color="#00E396" icon="👥">
              <InfoTable
                headers={[
                  "Full Name",
                  "Designation",
                  "Email ID",
                  "Contact Number",
                  "Date Of Joining",
                  "PAN No.",
                  "Aadhaar No.",
                  "Id Proof"
                ]}
                rows={[
                  [
                    "Rashesh Dhoshi",
                    "Partner",
                    "doshi@gmail.com",
                    "9876543210",
                    "01-03-2022",
                    "ABXPS1234C",
                    "1234-5678-9012",
                    <FileUpload />
                  ],
                  [
                    "Nita Dhoshi",
                    "Partner",
                    "doshi@gmail.com",
                    "9812345678",
                    "01-03-2022",
                    "ABXPS1237F",
                    "1234-5678-9012",
                    <FileUpload />
                  ]
                ]}
              />
            </InfoSection>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoSection = ({ title, icon, color, children }) => (
  <div className="bg-[#1B2735] rounded-xl p-6 shadow-md border border-[#2F3A4A]">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold flex items-center gap-2" style={{ color }}>
        <span>{icon}</span> {title}
      </h2>
    </div>
    {children}
  </div>
);

const InfoTable = ({ headers, rows }) => (
  <div className="overflow-auto">
    <table className="w-full text-left border-collapse text-sm">
      <thead className="bg-[#253142] text-white">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="p-3 font-semibold whitespace-nowrap border-b border-[#2F3A4A]">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-[#2F3A4A] hover:bg-[#202c3b]">
            {row.map((cell, j) => (
              <td key={j} className="p-3 whitespace-nowrap">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const FileUpload = ({ small }) => {
  const [fileName, setFileName] = useState("UPLOAD FILE HERE");

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "UPLOAD FILE HERE");
  };

  return (
    <div className="relative inline-block">
      <label
        className={`flex items-center justify-between ${
          small ? "px-2 py-1 text-xs" : "px-3 py-1"
        } bg-[#253142] text-white rounded-md cursor-pointer border border-[#2F3A4A] hover:bg-[#2f3a4a]`}
      >
        <span className="truncate max-w-[120px]">{fileName}</span>
        <input
          type="file"
          className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default BusinessEntityInfo;
