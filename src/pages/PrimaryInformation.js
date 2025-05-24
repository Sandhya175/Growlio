import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaEye, FaEyeSlash, FaEdit, FaTrash,FaUserLock } from "react-icons/fa";

const stockInfoData = [
  {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematNo: "7903883890360",
    tradingNo: "342432222222",
    nominee: "Mrs. XYZ Doshi",
    relation: "GrandSon",
    dob: "09/08/1987",
    share: "30%",
    address: "A/85 Apt, Ghatkopar",
    guardian: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contact: "+91 7984342211",
  },
   {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematNo: "7903883890360",
    tradingNo: "342432222222",
    nominee: "Mrs. XYZ Doshi",
    relation: "GrandSon",
    dob: "09/08/1987",
    share: "30%",
    address: "A/85 Apt, Ghatkopar",
    guardian: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contact: "+91 7984342211",
  },
   {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematNo: "7903883890360",
    tradingNo: "342432222222",
    nominee: "Mrs. XYZ Doshi",
    relation: "GrandSon",
    dob: "09/08/1987",
    share: "30%",
    address: "A/85 Apt, Ghatkopar",
    guardian: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contact: "+91 7984342211",
  },
   {
    email: "bd@gmail.com",
    loginId: "bankimdoshi",
    password: "********",
    dematNo: "7903883890360",
    tradingNo: "342432222222",
    nominee: "Mrs. XYZ Doshi",
    relation: "GrandSon",
    dob: "09/08/1987",
    share: "30%",
    address: "A/85 Apt, Ghatkopar",
    guardian: "Mr. Bankim Doshi",
    relationWithNominee: "GrandFather",
    contact: "+91 7984342211",
  }
  
];

const StockMarketIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block"
  >
    <rect x="1" y="3" width="22" height="18" rx="2" ry="2" />
    <polyline points="3 17 8 12 13 16 18 8 21 12" />
  </svg>
);

const PrimaryInformation = () => {
  const [selectedInvestor, setSelectedInvestor] = useState("Bankim Doshi");
  const [passwordVisibility, setPasswordVisibility] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [username, setUsername] = useState('');

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
      <div className="flex-1 flex flex-col ml-60">
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
   
   

          <Section title="Stock Market Information" icon={<StockMarketIcon />}>
            <Table
              headers={["Email ID", "Login ID", "Password", "Demat A/C No.", "Trading A/C No."]}
              rows={[
                ["bd1@gmail.com", "bankim1", <PasswordCell key="stock" show={passwordVisibility.stock} toggle={() => togglePassword("stock")} />, "987654342316898", "TR9876542"]
              ]}
            />
          </Section>

          <Section title="Mutual Funds Information" icon="📊">
            <Table
              headers={["Email ID", "Login ID", "Password", "Demat A/C No.", "Broker Details"]}
              rows={[
                ["bd1@gmail.com", "bankim1", <PasswordCell key="mutual" show={passwordVisibility.mutual} toggle={() => togglePassword("mutual")} />, "98765434237658908", "Groww - BR123458"]
              ]}
            />
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


          <Section title="Vehicle Information" icon="🚗">
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
