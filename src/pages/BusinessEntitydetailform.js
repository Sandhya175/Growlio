import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ label, type = "text", placeholder, required }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full">
      <label className="block mb-1 text-sm font-medium text-white">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          required={required}
          className={`w-full p-3 bg-[#1B2735] border border-gray-700 rounded-lg text-white ${
            type === "date" ? "cursor-pointer" : ""
          }`}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

const UploadBox = ({ label }) => (
  <div className="w-full">
    <label className="block mb-1 text-sm font-medium text-white">{label}</label>
    <label className="w-full h-48 bg-[#2C3A4B] border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#364759] transition">
      <FaPlusCircle className="text-[#3B9B8F] text-4xl mb-2" />
      <div className="text-gray-300">Click to Upload</div>
      <input type="file" className="hidden" />
    </label>
  </div>
);

const Section = ({ title, children }) => (
  <div className="space-y-6 mb-10">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
  </div>
);

const BusinessEntityDetailsForm = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const [username, setUsername] = useState('');
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
     <div className="flex-1 flex flex-col bg-gray-900 overflow-x-hidden overflow-y-auto h-screen ml-60">

        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center sticky top-0 z-50">
  <div className="flex items-center gap-4">
    <p className="text-white text-lg">Welcome {username}!</p>
    <img
      src="https://i.pravatar.cc/60?img=1"
      className="w-12 h-12 rounded-full border-2 border-white"
      alt="Profile"
    />
  </div>
</div>

{/* Back Button & Page Title */}
        <div className="flex items-center mt-6 mb-6">
          <button
            onClick={handleBack}
            className="mr-4 text-white hover:text-gray-400 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold"> BUSINESS ENTITY DETAILS FORM</h2>
        </div>

        <div className="p-6 md:p-10 space-y-12">

          {/* Profile Image Upload */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-4xl">👤</span>
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-gray-800 p-1 rounded-full cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <img src="https://img.icons8.com/ios-filled/20/ffffff/camera.png" alt="Upload" />
              </label>
            </div>
          </div>

          <Section title="Company & Business Information">
            <InputField label="Company Name" />
            <InputField label="Date of Income" type="date" />
            <InputField label="UID No." />
            <div className="col-span-full"><UploadBox label="Upload Company Documents" /></div>
          </Section>

          <Section title="Licenses & Registrations">
            <InputField label="Registration No." />
            <InputField label="ESI No." />
            <InputField label="GSTIN" />
            <InputField label="TAN" />
            <InputField label="Trade Mark No." />
            <InputField label="MSME No." />
            <div className="col-span-full"><UploadBox label="Upload License" /></div>
          </Section>

          <Section title="Accounting Software">
            <InputField label="Software Name" />
            <InputField label="Version" />
            <InputField label="License Key/Product Key" />
            <div className="col-span-full"><UploadBox label="Upload License" /></div>
          </Section>

          <Section title="Partnership Details">
            <InputField label="Type Of Partnership" />
             <InputField label="Date of Partnership Agreement" type="date" />
            <InputField label="Partner Count" />
            <InputField label="Business Nature" />
            <InputField label="Percentage Share" />
            <div className="col-span-full"><UploadBox label="Upload PAN of Partnership Firm(PDF)" /></div>
            <div className="col-span-full"><UploadBox label="Upload Partnership Deed(PDF)" /></div>
          </Section>

           <Section title="Other Stackholders">
            <InputField label="Full Name" />
            <InputField label="Designation" />
            <InputField label="Email ID" />
            <InputField label="Contact Number" />
            <InputField label="Date of Joining" type="date" />
            <InputField label="Aadhaar Number" />
            <InputField label="PAN Number" />
            <div className="col-span-full"><UploadBox label="Upload ID Proof(PDF/Image)" /></div>
          </Section>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors"
              onClick={() => navigate("/business-entity")}
            >
              Record Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BusinessEntityDetailsForm;