import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../src/assets/logo.png';

function Sidebar() {
  const location = useLocation();
  const [isMasterDataOpen, setIsMasterDataOpen] = useState(false);

  const isActive = (path) => location.pathname === path;
  const isMasterDataSection = ['/investor-details', '/instrument-setup'].includes(location.pathname);

  const [isAddOnsOpen, setIsAddOnsOpen] = useState(false);
const isAddOnsSection = location.pathname.startsWith('/comparison-study'); 


  const handleLogout = () => {
    // You can add actual logout logic here
    window.location.href = '/login';
  };

  return (
    <aside className="w-60 h-screen fixed top-0 left-0 bg-gray-800 text-white flex flex-col">
      <div className="flex-1">
        <div className="flex justify-center px-6 py-6 border-b border-gray-700">
          <img src={logo} alt="Logo" className="w-18 h-12 object-contain" />
        </div>

        <nav className="mt-4 space-y-2 text-sm">
          {/* Dashboard */}
          <Link
            to="/dashboard"
            className={`flex items-center px-6 py-2 hover:bg-[#334155] hover:text-[#7effef] transition-colors duration-200 ${
              isActive('/dashboard') ? 'bg-[#334155] text-[#7effef]' : ''
            }`}
          >
            <i className="fa-solid fa-grip-vertical mr-3"></i> Dashboard
          </Link>

          {/* Master Data with Dropdown */}
          <div className="px-6">
            <button
              onClick={() => setIsMasterDataOpen(!isMasterDataOpen)}
              className={`flex items-center w-full py-2 hover:bg-[#334155] hover:text-[#7effef] transition-colors duration-200 ${
                isMasterDataSection ? 'bg-[#334155] text-[#7effef]' : ''
              }`}
            >
              <i className="fa-solid fa-user mr-3"></i>
              Master Data
              <i className={`fa-solid ml-auto ${isMasterDataOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </button>

            {isMasterDataOpen && (
              <div className="ml-6 mt-2 space-y-2 text-sm">
                <Link
                  to="/investor-details"
                  className={`flex items-center hover:underline hover:text-[#7effef] transition-colors duration-200 ${
                    isActive('/investor-details') ? 'text-[#7effef]' : ''
                  }`}
                >
                  <i className="fa-solid fa-user-tie mr-2"></i> Investor Details
                </Link>
                <Link
                  to="/instrument-setup"
                  className={`flex items-center hover:underline hover:text-[#7effef] transition-colors duration-200 ${
                    isActive('/instrument-setup') ? 'text-[#7effef]' : ''
                  }`}
                >
                  <i className="fa-solid fa-gear mr-2"></i> Instrument Setup
                </Link>
              </div>
            )}
          </div>

          {/* Other Menu Items */}
          <Link to="/taxation" className={`flex items-center px-6 py-2 hover:bg-[#334155] hover:text-[#7effef] transition-colors duration-200 ${isActive('/taxation') ? 'bg-[#334155] text-[#7effef]' : ''}`}>
            <i className="fa-solid fa-wrench mr-3"></i> Taxation
          </Link>

          <Link to="/reports" className={`flex items-center px-6 py-2 hover:bg-[#334155] hover:text-[#7effef] transition-colors duration-200 ${isActive('/reports') ? 'bg-[#334155] text-[#7effef]' : ''}`}>
            <i className="fa-solid fa-chart-pie mr-3"></i> Reports
          </Link>

          {/* Add-ons with Dropdown */}
<div className="px-6">
  <button
    onClick={() => setIsAddOnsOpen(!isAddOnsOpen)}
    className={`flex items-center w-full py-2 hover:bg-[#334155] hover:text-[#7effef] transition-colors duration-200 ${
      isAddOnsSection ? 'bg-[#334155] text-[#7effef]' : ''
    }`}
  >
    <i className="fa-solid fa-plus mr-3"></i>
    Add-ons
    <i className={`fa-solid ml-auto ${isAddOnsOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
  </button>

  {isAddOnsOpen && (
    <div className="ml-6 mt-2 space-y-2 text-sm">
      <Link
        to="/comparison-study"
        className={`flex items-center hover:underline hover:text-[#7effef] transition-colors duration-200 ${
          isActive('/comparison-study') ? 'text-[#7effef]' : ''
        }`}
      >
        <i className="fa-solid fa-chart-column mr-2"></i> Comparison Study
      </Link>
    </div>
  )}
</div>


        </nav>
      </div>

      <div className="px-6 py-4">
        <button onClick={handleLogout} className="flex items-center text-red-400 hover:text-red-600">
          <i className="fa-solid fa-sign-out-alt mr-2"></i> Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;