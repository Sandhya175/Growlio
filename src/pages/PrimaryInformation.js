import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEye, FaEyeSlash, FaEdit, FaTrash,FaUserLock,FaUser } from "react-icons/fa";
import { MdEdit, MdDelete, MdVisibility, MdVisibilityOff } from "react-icons/md";

const stockData = [
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "4578655",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  }
];

const mutualfundData = [
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "4578655",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  }
];

const insuranceData = [
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  },
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "4578655",
    dematAccount: "7593838039030",
    tradingAccount: "342422222222",
    nomineeName: "Mrs. XYZ Doshi",
    relationWithAccountHolder: "GrandSon",
    nomineeDob: "09/08/1967",
    percentageShare: "30%",
    nomineeAddress: "ANS Apt, Ghatkopar",
    guardianName: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contactNumber: "+91 7983948211",
    guardianAddress: "ANS Apt, Ghatkopar"
  }
];

const PrimaryInformation = () => {
  const [selectedInvestor, setSelectedInvestor] = useState("Bankim Doshi");
  const [passwordVisibility, setPasswordVisibility] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [username, setUsername] = useState('');

const [visiblePasswords, setVisiblePasswords] = useState({});

const togglePasswordVisibility = (idx) => {
  setVisiblePasswords((prev) => ({
    ...prev,
    [idx]: !prev[idx],
  }));
};

  const investorRoles = {
    "Bankim Doshi": "Primary Member",
    "Nita Doshi": "Wife",
    "Rashesh Doshi": "Family Member",
    "Jagruti Doshi": "Family Member",
    "Bankim Doshi HUF": "HUF",
    "Rashesh Doshi HUF": "HUF",
    "Pritika Doshi": "Family Member",
    "Krishna Doshi": "Family Member",
    "Talent Corner HR Services Pvt Ltd": "Business Entity",
  };

  const togglePassword = (key) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFileUpload = (section, file) => {
    if (!file) return;
    const fileURL = URL.createObjectURL(file);
    setUploadedFiles((prev) => ({
      ...prev,
      [section]: fileURL,
    }));
  };

  const dropdownOptions = Object.keys(investorRoles);
useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-60 h-screen overflow-y-auto">
       
      {/* Topbar */}
         <div className="sticky top-0 z-50 px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome {username}!</p>
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">PRIMARY MEMBER INFORMATION</h1>


          <div className="mb-6">
            {/* Search and dropdown section */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-[#1B2735] text-white px-4 py-2 rounded-md w-full md:w-72"
              />
              <select
                className="bg-[#1B2735] text-white px-4 py-2 rounded-md w-full md:w-72"
                value={selectedInvestor}
                onChange={(e) => setSelectedInvestor(e.target.value)}
              >
                {dropdownOptions.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <div className="flex gap-4">
                <button className="bg-[#2dd4bf] hover:bg-[#2dd4bf] px-4 py-2 rounded-md font-medium">
                  + Add Information
                </button>
                <button className="bg-[#fdba74] hover:bg-[#fdba74] px-4 py-2 rounded-md font-medium">
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
                  <h2 className="font-bold text-lg text-white">Mr. {selectedInvestor}</h2>
                  <p className="text-sm text-gray-400">{investorRoles[selectedInvestor]}</p>
                </div>
              </div>
              <div className="flex gap-3 text-xl">
                <FaEdit className="cursor-pointer text-white" />
                <FaTrash className="cursor-pointer text-red-500" />
              </div>
            </div>
          </div>

          {/* Information Sections */}
         <Section title="Personal Information" icon={<FaUserLock className="text-white-400" size={20} />}>
            <div className="grid md:grid-cols-2 gap-4">
              <TwoCol label="Date of Birth" value="15 March 1970" />
              <TwoCol label="Contact" value="+91 9812014796" />
              <TwoCol label="Aadhar Number" value="XXXX XXXX 6178" />
              <TwoCol label="Email" value="bankimdoshi123@gmail.com" />
              <TwoCol label="PAN No" value="ABCDE1234F" />
              <TwoCol label="Residential Address" value="123 Fort Street, Shivsachivar Estate, Mumbai, Ghatkopar West - 410081" />
            </div>
          </Section>

            <Section title="Bank Information" icon="🏦" viewAll>
            <Table
              headers={["Bank Name", "Branch Name", "Account No.", "IFSC Code", "Net Banking Email ID", "Password"]}
              rows={[
                ["IDFC First Bank", "Ghatkopar West", "7239189830", "8428021", "bd1@gmail.com", <PasswordCell key="bank1" show={passwordVisibility.bank1} toggle={() => togglePassword("bank1")} />],
                ["Federal Bank", "Kandivali East", "7239189830", "8428021", "bd2@gmail.com", <PasswordCell key="bank2" show={passwordVisibility.bank2} toggle={() => togglePassword("bank2")} />],
                ["Kalyan Janata", "Mulund", "7239189830", "8428021", "bd3@gmail.com", <PasswordCell key="bank3" show={passwordVisibility.bank3} toggle={() => togglePassword("bank3")} />]
              ]}
            />
          </Section>
   
<div className="mt-4">
  <h3 className="text-lg font-semibold mb-2">Stock Information</h3>
  <div className="overflow-x-auto bg-[#1B2735] rounded-lg border p-2 max-h-96 overflow-y-auto">
  <div className="min-w-[900px]">
    <table className="w-full text-sm text-left">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Email ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Login ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Password</th>
        <th className="py-2 px-3 whitespace-nowrap">Demat A/c No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Trading A/c No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Nominee Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Relation to A/c Holder</th>
        <th className="py-2 px-3 whitespace-nowrap">DOB (Nominee)</th>
        <th className="py-2 px-3 whitespace-nowrap">Share (%)</th>
        <th className="py-2 px-3 whitespace-nowrap">Nominee Address</th>
        <th className="py-2 px-3 whitespace-nowrap">Guardian Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Relation to Nominee</th>
        <th className="py-2 px-3 whitespace-nowrap">Contact No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Guardian Address</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {stockData.map((item, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 whitespace-nowrap">{item.email}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.loginId}</td>
          <td className="py-2 px-3 whitespace-nowrap flex items-center gap-2">
  {visiblePasswords[idx] ? item.password : '********'}
  {visiblePasswords[idx] ? (
    <MdVisibilityOff
      className="cursor-pointer text-gray-400 hover:text-blue-400"
      onClick={() => togglePasswordVisibility(idx)}
    />
  ) : (
    <MdVisibility
      className="cursor-pointer text-gray-400 hover:text-blue-400"
      onClick={() => togglePasswordVisibility(idx)}
    />
  )}
</td>

          <td className="py-2 px-3 whitespace-nowrap">{item.dematAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.tradingAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeName}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.relationWithAccountHolder}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeDob}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.percentageShare}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeAddress}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.guardianName}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.relationWithNominee}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.contactNumber}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.guardianAddress}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="text-red-500 hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
</div>


<div className="mt-6">
  <h3 className="text-lg font-semibold mb-2">Mutual Fund Information</h3>
  <div className="overflow-x-auto bg-[#1B2735] rounded-lg border p-2 max-h-96 overflow-y-auto">
  <div className="min-w-[900px]">
    <table className="w-full text-sm text-left">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Email ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Login ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Password</th>
        <th className="py-2 px-3 whitespace-nowrap">Demat A/c No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Trading A/c No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Nominee Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Relation to A/c Holder</th>
        <th className="py-2 px-3 whitespace-nowrap">DOB (Nominee)</th>
        <th className="py-2 px-3 whitespace-nowrap">Share (%)</th>
        <th className="py-2 px-3 whitespace-nowrap">Nominee Address</th>
        <th className="py-2 px-3 whitespace-nowrap">Guardian Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Relation to Nominee</th>
        <th className="py-2 px-3 whitespace-nowrap">Contact No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Guardian Address</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {mutualfundData.map((item, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 whitespace-nowrap">{item.email}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.loginId}</td>
          <td className="py-2 px-3 whitespace-nowrap flex items-center gap-2">
  {visiblePasswords[idx] ? item.password : '********'}
  {visiblePasswords[idx] ? (
    <MdVisibilityOff
      className="cursor-pointer text-gray-400 hover:text-blue-400"
      onClick={() => togglePasswordVisibility(idx)}
    />
  ) : (
    <MdVisibility
      className="cursor-pointer text-gray-400 hover:text-blue-400"
      onClick={() => togglePasswordVisibility(idx)}
    />
  )}
</td>

          <td className="py-2 px-3 whitespace-nowrap">{item.dematAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.tradingAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeName}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.relationWithAccountHolder}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeDob}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.percentageShare}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeAddress}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.guardianName}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.relationWithNominee}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.contactNumber}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.guardianAddress}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="text-red-500 hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
</div>

<div className="mt-6">
  <h3 className="text-lg font-semibold mb-2">Insurance Information</h3>
  <div className="overflow-x-auto bg-[#1B2735] rounded-lg border p-2 max-h-96 overflow-y-auto">
  <div className="min-w-[900px]">
    <table className="w-full text-sm text-left">
    <thead className="bg-[#16202C] text-gray-400">
      <tr>
        <th className="py-2 px-3 whitespace-nowrap">Email ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Login ID</th>
        <th className="py-2 px-3 whitespace-nowrap">Password</th>
        <th className="py-2 px-3 whitespace-nowrap">Demat A/c No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Trading A/c No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Nominee Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Relation to A/c Holder</th>
        <th className="py-2 px-3 whitespace-nowrap">DOB (Nominee)</th>
        <th className="py-2 px-3 whitespace-nowrap">Share (%)</th>
        <th className="py-2 px-3 whitespace-nowrap">Nominee Address</th>
        <th className="py-2 px-3 whitespace-nowrap">Guardian Name</th>
        <th className="py-2 px-3 whitespace-nowrap">Relation to Nominee</th>
        <th className="py-2 px-3 whitespace-nowrap">Contact No.</th>
        <th className="py-2 px-3 whitespace-nowrap">Guardian Address</th>
        <th className="py-2 px-3 whitespace-nowrap">Actions</th>
      </tr>
    </thead>
    <tbody>
      {insuranceData.map((item, idx) => (
        <tr key={idx} className="border-b border-gray-700 hover:bg-[#23304a]">
          <td className="py-2 px-3 whitespace-nowrap">{item.email}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.loginId}</td>
          <td className="py-2 px-3 whitespace-nowrap flex items-center gap-2">
  {visiblePasswords[idx] ? item.password : '********'}
  {visiblePasswords[idx] ? (
    <MdVisibilityOff
      className="cursor-pointer text-gray-400 hover:text-blue-400"
      onClick={() => togglePasswordVisibility(idx)}
    />
  ) : (
    <MdVisibility
      className="cursor-pointer text-gray-400 hover:text-blue-400"
      onClick={() => togglePasswordVisibility(idx)}
    />
  )}
</td>

          <td className="py-2 px-3 whitespace-nowrap">{item.dematAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.tradingAccount}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeName}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.relationWithAccountHolder}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeDob}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.percentageShare}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.nomineeAddress}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.guardianName}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.relationWithNominee}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.contactNumber}</td>
          <td className="py-2 px-3 whitespace-nowrap">{item.guardianAddress}</td>
          <td className="py-2 px-3 whitespace-nowrap flex gap-3 justify-center text-gray-400">
            <MdEdit className="hover:text-blue-400 cursor-pointer" />
            <MdDelete className="text-red-500 hover:text-red-400 cursor-pointer" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
</div>

          <div className="mt-6"></div>
        <Section title="National Identity Documents Information" icon="🪪">
  <SubSection title="Passport Details" color="#00E396">
    <div className="bg-[#1B2735] p-6 rounded-lg text-white mt-2">
      <div className="border border-gray-600 rounded-md overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1B2735] text-gray-400">
            <tr className="border-b border-gray-600">
              <th className="p-3">Passport No.</th>
              <th className="p-3">Issuing Country</th>
              <th className="p-3">Date of Issue</th>
              <th className="p-3">Date of Expiry</th>
              <th className="p-3">Upload PDF</th>
            </tr>
          </thead>
          <tbody className="bg-[#1B2735]">
            <tr>
              <td className="p-3">K1234567</td>
              <td className="p-3">India</td>
              <td className="p-3">07-09-2023</td>
              <td className="p-3">07-09-2026</td>
              <td className="p-3">
                <FileUpload
                  key="passport"
                  section="passport"
                  uploadedFiles={uploadedFiles}
                  handleFileUpload={handleFileUpload}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SubSection>
</Section>

           <Section>
  <SubSection title="Driving License Details" color="#00E396">
    <div className="bg-[#1B2735] p-6 rounded-lg text-white mt-2">
      <div className="border border-gray-600 rounded-md overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1B2735] text-gray-400">
            <tr className="border-b border-gray-600">
              <th className="p-3">License No.</th>
              <th className="p-3">Issued from (RTO)</th>
              <th className="p-3">Date of Issue</th>
              <th className="p-3">Date of Expiry</th>
              <th className="p-3">Upload PDF</th>
            </tr>
          </thead>
          <tbody className="bg-[#1B2735]">
            <tr>
              <td className="p-3">K1234567</td>
              <td className="p-3">India</td>
              <td className="p-3">07-09-2023</td>
              <td className="p-3">07-09-2026</td>
              <td className="p-3">
                <FileUpload
                  key="license"
                  section="license"
                  uploadedFiles={uploadedFiles}
                  handleFileUpload={handleFileUpload}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SubSection>
</Section>

<Section>
  <SubSection title="Voter ID Details" color="#00E396">
    <div className="bg-[#1B2735] p-6 rounded-lg text-white mt-2">
      <div className="border border-gray-600 rounded-md overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-[#1B2735] text-gray-400">
            <tr className="border-b border-gray-600">
              <th className="p-3">Voter ID No.</th>
              <th className="p-3">State/UT of Issue</th>
              <th className="p-3">Date of Issue</th>
              <th className="p-3">Upload PDF</th>
            </tr>
          </thead>
          <tbody className="bg-[#1B2735]">
            <tr>
              <td className="p-3">K1234567</td>
              <td className="p-3">India</td>
              <td className="p-3">07-09-2023</td>
              <td className="p-3">
                <FileUpload
                  key="voter"
                  section="voter"
                  uploadedFiles={uploadedFiles}
                  handleFileUpload={handleFileUpload}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </SubSection>
</Section>


          <Section title="Vehicle Information" icon="🚗" viewAll>
            <Table
              headers={["Vehicle Type", "Brand Name", "Registration Number", "Registration Date", "Insurance Policy Number", "Upload PDF"]}
              rows={[
                ["Car", "Maruti Suzuki Baleno", "MH12AB1234", "12 June 2018", "HDFCGEM123456", <FileUpload key="vehicle" section="vehicle" uploadedFiles={uploadedFiles} handleFileUpload={handleFileUpload} />]
              ]}
            />
          </Section>
        </div>
      </div>
    </div>
  );
};

// Reusable Components
const PasswordCell = ({ show, toggle }) => {
  const [value, setValue] = useState("password123");

  return (
    <div className="flex items-center gap-2">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-transparent border border-gray-600 rounded px-2 py-1 text-white"
      />
      <button onClick={toggle} className="text-yellow-400">
        {show ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

const FileUpload = ({ section, uploadedFiles, handleFileUpload }) => (
  <div className="flex flex-col gap-2">
    <label className="bg-[#253142] hover:bg-[#2f3a4a] cursor-pointer px-3 py-2 rounded-md text-sm">
      Upload PDF
      <input
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => handleFileUpload(section, e.target.files?.[0])}
      />
    </label>
    {uploadedFiles[section] && (
      <a
        href={uploadedFiles[section]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-500 text-sm underline"
      >
        View Document
      </a>
    )}
  </div>
);

const Section = ({ title, icon, children, viewAll }) => (
  <div className="bg-[#1B2735] rounded-lg p-6 mb-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      {viewAll && <span className="text-sm text-yellow-500 cursor-pointer">View All</span>}
    </div>
    {children}
  </div>
);

const SubSection = ({ title, children, color }) => (
  <div className="mb-4">
    <h3 className="font-semibold mb-2" style={{ color }}>{title}</h3>
    {children}
  </div>
);

const TwoCol = ({ label, value }) => (
  <div><span className="font-medium">{label}:</span> {value}</div>
);

const Table = ({ headers, rows }) => (
  <div className="overflow-auto">
    <table className="w-full text-left border-collapse text-sm">
      <thead className="bg-[#253142] text-white">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="p-2 font-semibold whitespace-nowrap">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-[#2f3a4a]">
            {row.map((cell, j) => (
              <td key={j} className="p-2 whitespace-nowrap">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);


export default PrimaryInformation;
