import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// Company logos
import adaniLogo from "../assets/adani.png";
import bajajLogo from "../assets/bajaj.png";
import airtelLogo from "../assets/airtel.png";
import HDFCLogo from "../assets/HDFC.png";
import infosysLogo from "../assets/infosys.png";

function ChooseCompany() {
  const navigate = useNavigate();

  const companies = [
    { name: "Adani Group", logo: adaniLogo, route: "/stock-action/adani" },
    { name: "Bajaj Group", logo: bajajLogo },
    { name: "Bharti Airtel Ltd.", logo: airtelLogo },
    { name: "HDFC Bank", logo: HDFCLogo },
    { name: "Infosys Ltd.", logo: infosysLogo },
  ];

  const handleClick = (company) => {
    console.log("Selected company:", company.name);
    if (company.route) {
      navigate(company.route);
    } else {
      // Optional: navigate to a generic route or show a message
      alert(`Navigation for ${company.name} is not set yet.`);
    }
  };

  const handleBack = () => {
    navigate("/instrument-setup");
  };

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-gray-900 text-white min-h-screen">
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


        {/* Main Content */}
        <div className="px-12 pt-10">
          {/* Back Button + Heading */}
          <div className="flex items-center mb-8">
          <button
  onClick={handleBack}
  className="w-10 h-10 mr-4 flex items-center justify-center bg-[#1e293b] rounded-lg hover:bg-[#334155] transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>
<h1 className="text-3xl font-bold">Choose a Company</h1>
          </div>

          {/* Search Bar */}
          <div className="mb-8 bg-gray-800 rounded-lg px-4 py-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white outline-none w-full"
            />
          </div>

          {/* Company Cards */}
          <div className="bg-gray-800 p-6 rounded-xl max-w-3xl space-y-4">
            {companies.map((company, index) => (
              <div
                key={index}
                onClick={() => handleClick(company)}
                className="flex items-center bg-gray-700 hover:bg-teal-600 transition text-white rounded-lg px-6 py-4 cursor-pointer"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-10 h-10 bg-white p-1 rounded-md object-contain mr-4"
                />
                <span className="text-lg font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseCompany;
