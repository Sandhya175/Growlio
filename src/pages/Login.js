//updated by sandhya
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/login signup image.png';
import '../styles/Login.scss';

function Login() {
  const [identifier, setIdentifier] = useState(''); // Changed to identifier to match backend
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [username, setUsername] = useState(''); // To display username if already logged in
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    if (token && storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      setUsername(data.username);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername('');
    setIdentifier('');
    setPassword('');
  };

  return (
    <div className="login bg-growlio-bg min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        <div className="flex-shrink-0 max-w-xs md:max-w-md">
          <img src={heroImage} alt="Login illustration" />
        </div>
        <div
          className="bg-[#15232e] rounded-xl p-10 w-full max-w-md h-[480px] flex flex-col justify-center border border-[#2e8a72]/50 shadow-lg shadow-[#2e8a72]/10"
        >
          {username ? (
            <div className="text-center">
              <h2 className="text-white text-2xl font-semibold mb-6">Welcome Back!</h2>
              <p className="text-white mb-6">You are logged in as {username}</p>
              <button
                className="w-full bg-[#2e8a72] text-white py-3 rounded-md font-medium hover:bg-[#276f5d] transition mb-4"
                onClick={() => navigate('/dashboard')}
              >
                Go to Dashboard
              </button>
              <button
                className="w-full bg-gray-600 text-white py-3 rounded-md font-medium hover:bg-gray-700 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="flex flex-col justify-center h-full"
              noValidate
            >
              <h2 className="text-white text-2xl font-semibold mb-6 text-center">Login</h2>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              <div className="mb-4">
                <input
                  className="w-full bg-transparent border border-[#2a3a4e] rounded-md py-3 px-4 text-white placeholder-[#7a8a9f] focus:outline-none focus:ring-2 focus:ring-[#3ea08a] focus:border-transparent transition"
                  placeholder="Username or Email"
                  required
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
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
              <p className="text-white text-center mt-6 text-sm">
                <a className="underline hover:text-[#3ea08a]" href="/forgot-password">
                  Forgot password?
                </a>
              </p>
              <p className="text-white text-center mt-4 text-sm">
                Don't have an account?{' '}
                <a className="underline hover:text-[#3ea08a]" href="/register">
                  Signup
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;