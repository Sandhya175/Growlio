import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PpfNominationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    pan: "",
    aadhar: "",
    mobile: "",
    email: "",
    address: "",
    relationship: "",
    nomineeDob: "",
    share: ""
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const closePopup = () => {
    setShowPopup(false);
  };

  // Simulate fetching investor data (replace with context or API call)
  useEffect(() => {
    const investorData = {
      name: "Bankim Doshi",
      dob: "1985-06-15",
      gender: "male",
      pan: "ABCDE1234F",
      aadhar: "123456789012",
      mobile: "9876543210",
      email: "bankim@example.com",
      address: "123, Green Avenue, Mumbai",
    };

    setFormData(prev => ({
      ...prev,
      ...investorData
    }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // You can also add API submission code here
  };
 const [guardianPhone, setGuardianPhone] = useState("");
  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-900 overflow-x-hidden ml-60">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center">
          <div className="flex items-center gap-4">
            <p className="text-white text-lg">Welcome Bankim Doshi!</p>
            <img
              src="https://i.pravatar.cc/60?img=1"
              className="w-12 h-12 rounded-full border-2 border-white"
              alt="Profile"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <h2 className="text-2xl font-bold mb-10">PPF NOMINATION FORM</h2>

          <form className="space-y-10" onSubmit={handleSubmit}>
            {/* Account Holder Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Account Holder Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Account holder inputs */}
               
                  <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Account Holders Name</label>
            <select className=" p-3 bg-[#1B2735] text-white rounded">
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
               
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Date of Birth</label>
                  <input type="date" value={formData.dob} readOnly className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Gender</label>
                  <input value={formData.gender} readOnly className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">PAN Number</label>
                  <input value={formData.pan} readOnly className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Aadhar Number</label>
                  <input value={formData.aadhar} readOnly className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Mobile Number</label>
                  <input value={formData.mobile} readOnly className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Email ID</label>
                  <input value={formData.email} readOnly className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
              </div>
              <div className="flex flex-col mt-6">
                <label className="mb-1 text-sm font-medium">Residential Address</label>
                <textarea value={formData.address} readOnly className="bg-[#1B2735] text-white p-3 rounded-lg" rows={4}></textarea>
              </div>
            </div>

            {/* Bank Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Bank Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Bank inputs */}
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Bank Name</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Branch Name</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">Account Number</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
                <div className="flex flex-col">
                  <label className="mb-1 text-sm font-medium">IFSC Code</label>
                  <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Nominee & Guardian Details */}
 <div>
      {/* Header with "Nominee Details" and "Add Nominee" Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Nominee Details</h2>
         <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-300 text-black font-medium px-4 py-2 rounded">
          <span className="text-xl">+</span>
          Add Nominee
        </button>
      </div>
  
      {/* Nominee Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Nominee Name</label>
          <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Relationship with Account Holder</label>
          <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Date of Birth</label>
          <input type="date" className="bg-[#1B2735] text-white p-3 rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Percentage of Share</label>
          <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
        </div>
      </div>

      {/* Address */}
      <div className="mt-4">
        <label className="mb-1 text-sm font-medium">Address</label>
        <textarea className="bg-[#1B2735] text-white p-3 rounded-lg w-full h-24"></textarea>
      </div>
</div>

<div className="mt-10">
   <h2 className="text-xl font-semibold mb-4">Guardian Details (if nominee is a minor)</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Name of Guardian</label>
            <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Relationship with Nominee</label>
            <input type="text" className="bg-[#1B2735] text-white p-3 rounded-lg" />
          </div>
    <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium">Contact Number of Guardian</label>
          <PhoneInput
  country="in"
  value={guardianPhone}
  onChange={setGuardianPhone}
  inputProps={{
    name: 'guardianPhone',
    required: true,
    className: 'bg-[#1B2735] text-white rounded-lg w-full',
  }}
  containerClass="w-full mb-4"
  buttonClass="!bg-[#1B2735] !border-none !rounded-l-lg"
  dropdownClass="custom-dropdown"
  inputStyle={{
    borderRadius: 0,
    border: 'none',
    width: '100%',
    backgroundColor: '#1B2735',
    padding: '0.75rem',
    color: 'white'
  }}
  enableSearch={true}
/>

<style>
{`
  .flag-dropdown {
    background-color: #1B2735 !important;
    border: none !important;
  }

  .flag-dropdown .selected-flag {
    background-color: #1B2735 !important;
  }

  .flag-dropdown .selected-flag .flag {
    background-color: transparent !important;
  }

  /* White background for the dropdown list */
  .custom-dropdown {
    background-color: white !important;
    color: black !important;
  }

  .custom-dropdown .country {
    color: black !important;
  }

  .custom-dropdown .country:hover,
  .custom-dropdown .country.highlight {
    background-color: #f0f0f0 !important;
  }

  /* Optional: Style search input inside dropdown */
  .custom-dropdown input {
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #ccc;
    padding: 8px;
    margin: 8px;
    border-radius: 6px;
  }
`}
</style>
    </div>
  </div>

  <div className="mt-4">
    <label className="mb-1 text-sm font-medium">Address</label>
    <textarea className="bg-[#1B2735] text-white p-3 rounded-lg w-full h-24"></textarea>
  </div>
</div>
            {/* Upload Documents */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Upload Documents</h3>
              <label className="mb-2 block text-sm font-medium">
                Upload Nomination Update Acknowledgement
              </label>
              <label className="relative flex flex-col items-center justify-center bg-[#2C3A4B] border-2 border-dashed border-gray-600 h-48 rounded-lg cursor-pointer hover:bg-[#364759] transition">
                <input type="file" accept="application/pdf" hidden />
                <div className="text-4xl text-[#3B9B8F] font-bold mb-2">+</div>
                <div className="text-gray-300">Click to Upload</div>
              </label>
            </div>

            {/* Submit Button */}
            <div>
            <div className="mt-6 flex justify-center">
  <button type="submit" className="bg-[#3B9B8F] text-white px-6 py-3 rounded-md hover:bg-[#2f7a6f]">
    Record Details
  </button>
</div>
            </div>
          </form>
        </div>
      </div>

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
            <h2 className="text-xl font-bold mb-4">PPF Nomination Details Added to Portfolio!</h2>
            <p className="text-sm mb-6">
              Your PPF nomination details have been recorded successfully!
            </p>

            <div className="bg-gray-800 rounded-md p-4 text-sm space-y-2">
              <div className="flex justify-between">
                <span>Nominee name </span>
                <span className="font-bold">Mrs. Nita Doshi</span>
              </div>
              <div className="flex justify-between">
                <span>Relationship</span>
                <span className="font-bold">Wife</span>
              </div>
              <div className="flex justify-between">
                <span>Bank Name</span>
                <span className="font-bold">SBI Bank</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
            <button
  className="bg-[#3B9B8F] px-6 py-2 rounded-md hover:bg-[#2f7a6f]"
  onClick={() => {
    closePopup();
    navigate("/ppf-nomination-details"); // <--- Link to your page
  }}
>
  View All PPF Nominations.
</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PpfNominationForm;
