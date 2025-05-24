import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import InvesterdetailImage from "../assets/investerdetail.png";

const InvestorDetailsPage = () => {
  const navigate = useNavigate();
const [username, setUsername] = useState('');

 useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex w-screen max-w-full overflow-x-hidden bg-[#0c1320] text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-1 bg-[#0c1320] overflow-x-hidden">
        {/* Topbar */}
        <div className="px-8 py-6 bg-gray-800 flex justify-end items-center shadow-md">
      <div className="flex items-center gap-4">
        <p className="text-white text-lg">Welcome {username}!</p>
        <img src="https://i.pravatar.cc/60?img=1" className="w-12 h-12 rounded-full border-2 border-white" alt="Profile" />
      </div>
    </div>

        {/* Main Content */}
        <div className="flex flex-1 items-center justify-center px-8 py-10 ml-[260px]">
          <div className="flex flex-wrap justify-between items-center max-w-7xl w-full gap-12">

            {/* Text Section */}
            <div className="flex flex-col space-y-8 max-w-xl">
              <h1 className="text-4xl font-bold">
                Hi Bankim Doshi! Start your journey to{" "}
                <span className="text-orange-400">smarter investing today.</span>
              </h1>

              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  📊 Smart Portfolio Building
                </h2>
                <p className="text-gray-400">
                  Personalized investment strategies tailored to your goals.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  🛡️ Risk Management
                </h2>
                <p className="text-gray-400">
                  Advanced tools to protect and grow your investments.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  💡 Real-time Updates
                </h2>
                <p className="text-gray-400">
                  Stay informed with live market insights.
                </p>
              </div>

             <button
  className="mt-24 bg-[#3B9B8F] text-gray-800 px-8 py-4 rounded font-bold text-lg hover:bg-[#00bfa0] transition-all duration-300 w-max self-start"
  onClick={() => navigate("/investor-type")}
>
  Start Building your Portfolio
</button>

            </div>

            {/* Image Part */}
            <div className="mt-10 md:mt-0 -ml-24">
              <img
                src={InvesterdetailImage}
                alt="Investment Details"
                className="w-[550px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorDetailsPage;
