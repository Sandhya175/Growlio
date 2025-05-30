import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaUser } from 'react-icons/fa';

const InvestorContext = React.createContext({
  fullName: "Bankim Doshi",
  dob: "1985-05-20",
  mobile: "9876543210",
  email: "bankim@example.com",
  pan: "ABCDE1234F",
  residentialAddress: "123 Akruti Apartments, Mumbai",
  permanentAddress: "123 Akruti Apartments, Mumbai"
});


function PpfForm() {
  const investorData = useContext(InvestorContext);
  const navigate = useNavigate();  

  useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
  const [username, setUsername] = useState('');
  const [formData, setFormData] = useState({
    nameofinvestor: "",
    dob: "",
    mobile: "",
    email: "",
    pan: "",
    residentialAddress: "",
    permanentAddress: "",
    bankName: "",
    branchName: "",
    accountNumber: "",
    ifscCode: "",
    acceptTerms: false,
    confirmKyc: false,
    document: null,
  });

  const [showPopup, setShowPopup] = useState(false); // popup state

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      fullName: investorData.fullName,
      dob: investorData.dob,
      mobile: investorData.mobile,
      email: investorData.email,
      pan: investorData.pan,
      residentialAddress: investorData.residentialAddress,
      permanentAddress: investorData.permanentAddress,
    }));
  }, [investorData]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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

        <div className="flex-1 p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-6">PPF ACCOUNT OPENING FORM</h2>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Personal Information */}
            <section>
              <h3 className="font-semibold text-lg mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Name of Investor Dropdown */}
  <div className="flex flex-col">
    <label className="mb-1 text-sm">Name of Investor</label>
    <select
      name="nameofinvestor"
      value={formData.nameofinvestor}
      onChange={handleChange}
      className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
    >
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

  {/* Remaining Fields */}
  {["dob", "mobile", "email", "pan"].map((field) => (
    <div key={field} className="flex flex-col">
      <label className="mb-1 text-sm">
        {field === "dob" ? "Date of Birth" : field.replace(/([A-Z])/g, " $1")}
      </label>
      <input
        type={field === "dob" ? "date" : field === "email" ? "email" : "text"}
        name={field}
        value={formData[field]}
        readOnly
        className="bg-[#1B2735] text-white p-3 rounded-lg w-full"
      />
    </div>
  ))}
</div>
</section>
            {/* Address Details */}
            <section>
              <h3 className="font-semibold text-lg mb-4">Address Details</h3>
              <div className="flex flex-col mb-4">
                <label className="mb-1 text-sm">Residential Address</label>
                <textarea
                  name="residentialAddress"
                  value={formData.residentialAddress}
                  readOnly
                  className="bg-[#1B2735] text-white p-3 rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 text-sm">Permanent Address</label>
                <textarea
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  readOnly
                  className="bg-[#1B2735] text-white p-3 rounded-lg"
                />
              </div>
            </section>

            {/* Bank Details */}
            <section>
              <h3 className="font-semibold text-xl mb-4">Bank Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["bankName", "branchName", "accountNumber", "ifscCode"].map((field) => (
                  <div key={field} className="flex flex-col">
                    <label className="mb-1 text-sm capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
                    <input
                      name={field}
                      onChange={handleChange}
                      className="bg-[#1B2735] text-white p-3 rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Upload Documents */}
            <section>
              <h3 className="font-semibold text-lg mb-4">Upload Documents</h3>
              <label className="text-gray-300">Click to Upload PPF Account Opening Receipt (PDF)</label>
              <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
                <input type="file" name="document" accept=".pdf" hidden onChange={handleChange} />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
              </label>
            </section>

            {/* Declarations */}
            <section>
              <h3 className="font-semibold text-xl mb-4">Declarations</h3>
              <label className="block mb-2">
                <input type="checkbox" name="acceptTerms" onChange={handleChange} className="mr-2" />
                I hereby accept the terms and conditions of the PPF scheme.
              </label>
              <label className="block">
                <input type="checkbox" name="confirmKyc" onChange={handleChange} className="mr-2" />
                I confirm that I have completed KYC as per regulatory norms.
              </label>
            </section>

            <div className="mt-6 flex justify-center">
  <button type="submit" className="bg-[#3B9B8F] text-white px-6 py-3 rounded-md hover:bg-[#2f7a6f]">
    Record Investment
  </button>
</div>

          </form>

          {/* Popup */}
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
              <div className="bg-[#1B2735] rounded-lg p-8 w-[500px] relative">
                <button
                  className="absolute top-2 right-4 text-white text-2xl"
                  onClick={closePopup}
                >
                  &times;
                </button>
                <h2 className="text-xl font-bold mb-4">PPF A/c. Details Added to Portfolio!</h2>
                <p className="text-sm mb-6">Your new PPF A/c. Opening Details has been recorded successfully!</p>

                <div className="bg-gray-800 rounded-md p-4 text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>Bank name</span>
                    <span className="font-bold">Indian Overseas Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Branch name</span> 
                    <span className="font-bold">Ghatkopar (W)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PAN Card Number</span>
                    <span className="font-bold">{formData.pan}</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    className="bg-[#3B9B8F] px-6 py-2 rounded-md hover:bg-[#2f7a6f]"
                    onClick={() => {
                      closePopup();
                      navigate("/ppf-accounts");
                    }}
                  >
                    View All PPF Accounts
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PpfForm;
