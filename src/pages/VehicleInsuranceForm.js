import Sidebar from "../components/Sidebar";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const VehicleInsuranceForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
        <div className="p-10 text-white bg-[#0f172a] min-h-screen">
          <h1 className="text-2xl font-bold mb-8">Add Vehicle Insurance Details</h1>

          <form className="space-y-10" onSubmit={(e) => {
  e.preventDefault();
  setShowModal(true);
}}>

            {/* Policy Overview */}
            <Section title="Policy Overview">
              <Grid>
                <Input label="Name of Investor" />
                <Input label="Type of Insurance" value="Vehicle Insurance" disabled />
                <Select label="Insurance Company Name" options={["Insurance Companies"]} />
                <Input label="Policy Number" />
                <Input label="Policy Term (Years)" />
                <Select label="Vehicle Type" options={["Car", "Bike", "Commercial"]} />
                <Input label="Vehicle Registration Number" />
                <Input label="Vehicle Make & Model" />
                <Select label="Year of Manufacture" options={["Years", "2024", "2023", "2022", "2021", "2020"]} />
              </Grid>
            </Section>

          {/* Coverage & Benefits */}
<Section title="Coverage & Benefits">
  <Grid>
    <Select label="Type of Coverage" options={["Comprehensive", "Third Party", "Own Damage"]} />
    <Input label="Insured Declared Value (IDV)" />

    {/* Updated No Claim Bonus (NCB) */}
    <div className="flex flex-col">
      <label className="mb-2 text-sm font-medium text-white">No Claim Bonus (NCB)</label>
      <div className="flex items-center bg-[#1B2735] rounded-lg p-2">
        <input
          type="number"
          className="flex-1 bg-transparent text-white outline-none"
          placeholder="Enter value"
        />
        <select className="bg-transparent text-white ml-2">
          <option value="%">%</option>
          <option value="₹">₹</option>
        </select>
      </div>
    </div>

    <Select label="Roadside Assistance Available" options={["Yes", "No"]} />
    <Select label="Zero Depreciation Cover" options={["Yes", "No"]} />
  </Grid>
</Section>

            {/* Premium & Payment */}
            <Section title="Premium & Payment">
              <Grid>
                <Input label="Premium Amount" />
                <Select label="Frequency of Payment" options={["Monthly", "Quarterly", "Yearly"]} />
                <Select label="Payment mode" options={["Bank Transfer", "Cash", "Cheque", "UPI"]} />
              </Grid>
            </Section>

            {/* Nominee Details */}
            <Section title="Nominee Details">
              <Grid>
                <Input label="Nominee Name" />
                <Input label="Relationship to Investor"/>
              </Grid>
            </Section>

            {/* Policy Dates */}
            <Section title="Policy Dates">
              <Grid>
                <Input label="Policy Start Date" type="date" />
                <Input label="Policy Expiry Date" type="date" />
              </Grid>
            </Section>

            {/* Access Details */}
            <Section title="Access Details">
              <Grid>
                <Input label="Login ID" />
                <div className="flex flex-col relative w-full">
  <label className="mb-1 text-sm font-medium text-white">Password</label>
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      className="bg-[#1B2735] text-white p-3 pr-14 rounded-lg w-full border border-white"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-white"
    >
      {showPassword ? (
        <FaEyeSlash className="w-6 h-6" />
      ) : (
        <FaEye className="w-6 h-6" />
      )}
    </button>
  </div>
</div>
                <Input label="Registered Email ID" />
                <Input label="Insurance Portal URL" />
                <Input label="Customer ID / Policy Login ID" />
                <Input label="Agent / Advisor Contact" />
              </Grid>
            </Section>

           {/* Upload Documents */}
<Section title="Upload Documents">
  <div className="flex flex-col">
    <label className="mb-2 text-sm font-medium">Upload Insurance Document</label>
    
    <label className="bg-[#1B2735] border-2 border-dashed border-gray-600 rounded-lg p-10 flex flex-col justify-center items-center cursor-pointer hover:border-[#3B9B8F] transition">
      <input
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            alert(`Selected File: ${file.name}`);
          }
        }}
      />
      <span className="text-4xl">+</span>
      <span className="text-sm mt-2 text-gray-400">Click to upload</span>
    </label>
  </div>
</Section>


            {/* Status */}
            <div className="flex flex-col w-60">
              <label className="mb-1 text-sm font-medium">Status</label>
              <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className="bg-[#3B9B8F] text-[#E6E6E6] font-medium px-8 py-3 rounded-md hover:bg-[#2f7a6f] transition-colors"
              >
                Record Investment
              </button>
            </div>
          </form>
          {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
    <div className="bg-[#1e293b] text-white rounded-xl p-8 w-[600px] relative shadow-lg">
      <button
        className="absolute top-4 right-4 text-white text-xl"
        onClick={() => setShowModal(false)}
      >
        ×
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Insurance Investment Added to Portfolio!
      </h2>
      <p className="text-center mb-6">Your Insurance Investment has been recorded successfully!</p>
      <div className="bg-[#334155] p-4 rounded-lg mb-6">
        <div className="flex justify-between py-1">
          <span className="font-medium">Type of Insurance</span>
          <span>Vehicle Insurance</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Frequency of Payment</span>
          <span>Annually</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Premium Amount</span>
          <span>₹ 5,000</span>
        </div>
      </div>
      <div className="flex justify-center">
      <button
          className="bg-teal-400 text-[#0f172a] font-semibold px-6 py-2 rounded hover:bg-teal-300"
          onClick={() => {
            setShowModal(false);
            navigate("/insurance-investment-details");
          }}
          
        >
          View All MF Investments
        </button>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

// Small components for reusability
const Section = ({ title, children }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

const Grid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">{children}</div>
);

const Input = ({ label, type = "text", value = "", disabled = false }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    <input
      type={type}
      defaultValue={value}
      disabled={disabled}
      className={`bg-[#1B2735] text-white p-3 rounded-lg w-full ${
        disabled ? "cursor-not-allowed" : ""
      }`}
    />
  </div>
);

const Select = ({ label, options = [] }) => (
  <div className="flex flex-col">
    <label className="mb-1 text-sm font-medium">{label}</label>
    <select className="bg-[#1B2735] text-white p-3 rounded-lg w-full">
      {options.map((opt, idx) => (
        <option key={idx}>{opt}</option>
      ))}
    </select>
  </div>
);

export default VehicleInsuranceForm;
