import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle, FaEye, FaEyeSlash,FaUser } from "react-icons/fa";
import "../App.css";
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

// InputField Component
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
          autoComplete={isPassword ? "new-password" : "off"} 
          name={label.replace(/\s+/g, '').toLowerCase()}
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

// ✅ SelectField Component
const SelectField = ({ label, options, required }) => (
  <div className="w-full">
    <label className="block mb-1 text-sm font-medium text-white">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      className="w-full p-3 bg-[#1B2735] border border-gray-700 rounded-lg text-white"
      required={required}
    >
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

// UploadBox Component
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

// Section Wrapper Component
const Section = ({ title, children, action }) => (
  <div className="space-y-6 mb-10">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      {action}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>
  </div>
);


// Main Component
const FamilyMemberDetailsForm = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [username, setUsername] = useState('');
  const [guardianPhone, setGuardianPhone] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-60">
        {/* Topbar */}
         <div className="px-8 py-6 bg-gray-800 shadow-md flex justify-end items-center w-full">
                  <div className="flex items-center gap-4">
                    <p className="text-white text-lg">Welcome {username}!</p>
                    <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center bg-white text-black">
                      <FaUser className="text-2xl" />
                    </div>
                  </div>
                </div>

        <div className="p-6 md:p-10 space-y-12">
          <h1 className="text-2xl font-bold text-left">FAMILY MEMBER DETAILS FORM</h1>

          {/* Profile Image Upload */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full bg-gray-700 overflow-hidden flex items-center justify-center">
                {profileImage ? (
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
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

          {/* All Sections */}
          <Section title="Personal Information">
            <InputField label="Full Name" required />
            <InputField label="Date of Birth" type="date" required />
            <SelectField label="Gender" options={['Male', 'Female']} required />
            <InputField label="Contact Number" required />
            <InputField label="Email ID" />
            <InputField label="Aadhaar Number" />
            <InputField label="PAN Number" />
            <div className="col-span-full">
              <label className="mb-1 text-sm text-white font-medium">Residential Address</label>
              <textarea
                className="w-full p-3 bg-[#1B2735] text-white rounded-lg"
                rows="4"
              ></textarea>
            </div>
          </Section>

          <Section title="Bank Information">
            <InputField label="Bank Name" />
            <InputField label="Account Number" />
            <InputField label="IFSC Code" />
            <InputField label="Net Banking Email ID" />
            <InputField label="Branch Name" />
            <InputField label="Password" type="password" />
          </Section>

          <Section title="Stock Market Information">
            <InputField label="Email ID" />
            <InputField label="Login ID" />
            <InputField label="Password" type="password" />
          </Section>

       <Section title="Nominee Details"action={
    <button type="button"
      className="bg-orange-300 hover:bg-orange-400 text-black font-medium px-6 py-2 rounded-md"
    >
      + Add
    </button>
  }
>
  <InputField label="Demat A/c No." />
  <InputField label="Trading A/c. No" />
  <InputField label="Nominee Name" />
  <InputField label="Relationship with Account Holder" />
  <InputField label="Date of Birth" type="date" />
  <InputField label="Percentage Share" />
  <div className="col-span-full">
    <label className="mb-1 text-sm text-white font-medium">Address</label>
    <textarea
      className="w-full p-3 bg-[#1B2735] text-white rounded-lg"
      rows="3"
    ></textarea>
  </div>
</Section>


<Section title="Guardian Details (if nominee is a minor)">
  <InputField label="Name of Guardian" />
  <InputField label="Relationship with Nominee" />

  <div className="flex flex-col">
    <label className="mb-1 text-sm text-white font-medium">Contact Number of Guardian</label>
    <div className="bg-[#1B2735] rounded-lg px-3 py-2">
      <PhoneInput
        country="in"
        value={guardianPhone}
        onChange={setGuardianPhone}
        inputProps={{
          name: 'guardianPhone',
          required: true,
        }}
        containerClass="!w-full"
        inputClass="!bg-[#1B2735] !text-white !w-full !border-none focus:outline-none"
        buttonClass="!bg-[#1B2735] !border-none !rounded-l-lg"
        dropdownClass="!bg-[#1B2735] !text-white"
      />
    </div>
  </div>

  <div className="col-span-full">
    <label className="mb-1 text-sm text-white font-medium">Address</label>
    <textarea
      className="w-full p-3 bg-[#1B2735] text-white rounded-lg"
      rows="3"
    ></textarea>
  </div>
</Section>

          <Section title="Mutual Fund Information">
            <InputField label="Email ID" />
            <InputField label="Login ID" />
            <InputField label="Password" type="password" />
          </Section>

          
       <Section title="Nominee Details"action={
    <button type="button"
      className="bg-orange-300 hover:bg-orange-400 text-black font-medium px-6 py-2 rounded-md"
    >
      + Add
    </button>
  }
>
  <InputField label="Demat A/c No." />
  <InputField label="Broker Name" />
  <InputField label="Broker Code" />
  <InputField label="Nominee Name" />
  <InputField label="Relationship with Account Holder" />
  <InputField label="Date of Birth" type="date" />
  <InputField label="Percentage Share" />
  <div className="col-span-full">
    <label className="mb-1 text-sm text-white font-medium">Address</label>
    <textarea
      className="w-full p-3 bg-[#1B2735] text-white rounded-lg"
      rows="3"
    ></textarea>
  </div>
</Section>

<Section title="Guardian Details (if nominee is a minor)">
  <InputField label="Name of Guardian" />
  <InputField label="Relationship with Nominee" />

  <div className="flex flex-col">
    <label className="mb-1 text-sm text-white font-medium">Contact Number of Guardian</label>
    <div className="bg-[#1B2735] rounded-lg px-3 py-2">
      <PhoneInput
        country="in"
        value={guardianPhone}
        onChange={setGuardianPhone}
        inputProps={{
          name: 'guardianPhone',
          required: true,
        }}
        containerClass="!w-full"
        inputClass="!bg-[#1B2735] !text-white !w-full !border-none focus:outline-none"
        buttonClass="!bg-[#1B2735] !border-none !rounded-l-lg"
        dropdownClass="!bg-[#1B2735] !text-white"
      />
    </div>
  </div>

  <div className="col-span-full">
    <label className="mb-1 text-sm text-white font-medium">Address</label>
    <textarea
      className="w-full p-3 bg-[#1B2735] text-white rounded-lg"
      rows="3"
    ></textarea>
  </div>
</Section>

 <Section title="Insurance Information">
            <InputField label="Email ID" />
            <InputField label="Login ID" />
            <InputField label="Password" type="password" />
            <InputField label="Insurance Portal URL " />
            <InputField label="Customer ID/Policy Login ID" />
            <InputField label="Agent Name" />
          </Section>

 <Section title="Nominee Details"action={
    <button type="button"
      className="bg-orange-300 hover:bg-orange-400 text-black font-medium px-6 py-2 rounded-md"
    >
      + Add
    </button>
  }
>
  <InputField label="Demat A/c No." />
  <InputField label="Broker Name" />
  <InputField label="Broker Code" />
  <InputField label="Nominee Name" />
  <InputField label="Relationship with Account Holder" />
  <InputField label="Date of Birth" type="date" />
  <InputField label="Percentage Share" />
  <div className="col-span-full">
    <label className="mb-1 text-sm text-white font-medium">Address</label>
    <textarea
      className="w-full p-3 bg-[#1B2735] text-white rounded-lg"
      rows="3"
    ></textarea>
  </div>
</Section>

<Section title="Guardian Details (if nominee is a minor)">
  <InputField label="Name of Guardian" />
  <InputField label="Relationship with Nominee" />

  <div className="flex flex-col">
    <label className="mb-1 text-sm text-white font-medium">Contact Number of Guardian</label>
    <div className="bg-[#1B2735] rounded-lg px-3 py-2">
      <PhoneInput
        country="in"
        value={guardianPhone}
        onChange={setGuardianPhone}
        inputProps={{
          name: 'guardianPhone',
          required: true,
        }}
        containerClass="!w-full"
        inputClass="!bg-[#1B2735] !text-white !w-full !border-none focus:outline-none"
        buttonClass="!bg-[#1B2735] !border-none !rounded-l-lg"
        dropdownClass="!bg-[#1B2735] !text-white"
      />
    </div>
  </div>

  <div className="col-span-full">
    <label className="mb-1 text-sm text-white font-medium">Address</label>
    <textarea
      className="w-full p-3 bg-[#1B2735] text-white rounded-lg"
      rows="3"
    ></textarea>
  </div>
</Section>

          <Section title="National Identity Documents">
            <h3 className="text-lg font-semibold col-span-full">Passport Details</h3>
            <InputField label="Passport No" />
            <InputField label="Issuing Country" />
            <InputField label="Date of Issue" type="date" />
            <InputField label="Date of Expiry" type="date" />
            <div className="col-span-full"><UploadBox label="Upload Passport" /></div>

            <h3 className="text-lg font-semibold col-span-full">Driving License Details</h3>
            <InputField label="License No" />
            <InputField label="Issued From (DTO)" />
            <InputField label="Date of Issue" type="date" />
            <InputField label="Date of Expiry" type="date" />
            <div className="col-span-full"><UploadBox label="Upload Driving License" /></div>

            <h3 className="text-lg font-semibold col-span-full">Voter ID Details</h3>
            <InputField label="Voter ID No" />
            <InputField label="State/UT of Issue" />
            <InputField label="Date of Issue" type="date" />
            <div className="col-span-full"><UploadBox label="Upload Voter ID" /></div>
          </Section>

          <Section title="Vehicle Information">
            <InputField label="Vehicle Type" />
            <InputField label="Brand Name" />
            <InputField label="Registration No." />
            <InputField label="Insurance Policy No." />
            <div className="col-span-full"><UploadBox label="Upload Insurance Document" /></div>
          </Section>

          {/* Submit */}
          <div className="flex justify-center pt-6">
            <button
              className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors"
              onClick={() => navigate("/family-information")}
            >
              Record Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyMemberDetailsForm;
