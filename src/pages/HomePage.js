import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D1520] text-white flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-teal-400">Welcome to Growbit</h1>
        <p className="text-gray-300 text-lg">
          Manage your bank accounts and financial portfolio with ease.
        </p>
        <button
          onClick={() => navigate('/add-bank-account')}
          className="bg-[#3B9B8F] text-white px-8 py-4 text-lg rounded-lg hover:bg-[#2f7a6f] transition-colors"
        >
          + Add New Bank Account
        </button>
      </div>
    </div>
  );
};

export default HomePage;
