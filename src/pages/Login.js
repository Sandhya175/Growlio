import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/login signup image.png';
import '../styles/Login.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the username to localStorage
    localStorage.setItem('username', username);

    // Navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login bg-growlio-bg min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        <div className="flex-shrink-0 max-w-xs md:max-w-md">
          <img src={heroImage} alt="Login illustration" />
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-[#15232e] rounded-xl p-10 w-full max-w-md h-[480px] flex flex-col justify-center border border-[#2e8a72]/50 shadow-lg shadow-[#2e8a72]/10"
          noValidate
        >
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">Login</h2>
          <div className="mb-4">
            <input
              className="w-full bg-transparent border border-[#2a3a4e] rounded-md py-3 px-4 text-white placeholder-[#7a8a9f] focus:outline-none focus:ring-2 focus:ring-[#3ea08a] focus:border-transparent transition"
              placeholder="Username"
              required
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6 relative">
            <input
              className="w-full bg-transparent border border-[#2a3a4e] rounded-md py-3 px-4 pr-12 text-white placeholder-[#7a8a9f] focus:outline-none focus:ring-2 focus:ring-[#3ea08a] focus:border-transparent transition"
              placeholder="Password"
              required
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              aria-label="Toggle password visibility"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7a8a9f] hover:text-[#3ea08a] focus:outline-none"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
          <button
            className="w-full bg-[#2e8a72] text-white py-3 rounded-md font-medium hover:bg-[#276f5d] transition"
            type="submit"
          >
            Login
          </button>
          <p className="text-white text-center mt-6 text-sm">Forgot password?</p>
          <p className="text-white text-center mt-4 text-sm">
            Don't have an account?{' '}
            <a className="underline hover:text-[#3ea08a]" href="/register">
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
