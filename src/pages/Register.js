import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/login signup image.png';
import '../styles/Register.scss';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Client-side validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://growliobackend.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, confirmPassword })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      navigate('/dashboard', { state: { welcomeMessage: `Welcome, ${data.username}! Your account has been created successfully.` } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register bg-growlio-bg min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        <div className="flex-shrink-0 max-w-xs md:max-w-md">
          <img src={heroImage} alt="Register illustration" />
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-[#111B29]/20 border border-[#4B5563]/30 rounded-2xl p-8 w-full max-w-md backdrop-blur-sm"
        >
          <h1 className="text-[#E6E6E6] text-3xl font-semibold mb-6">Register</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <input
            className="w-full mb-4 px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            placeholder="Username"
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full mb-4 px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            placeholder="Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="mb-4 relative">
            <input
              className="w-full px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
              placeholder="Password"
              required
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              aria-label="Toggle password visibility"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E6E6E6]/70 hover:text-[#4ADE80] focus:outline-none"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
          <div className="mb-6 relative">
            <input
              className="w-full px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
              placeholder="Confirm Password"
              required
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              aria-label="Toggle confirm password visibility"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E6E6E6]/70 hover:text-[#4ADE80] focus:outline-none"
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
          <button
            className="w-full bg-[#3B9B8F] text-[#E6E6E6] font-medium py-3 rounded-md mb-6 hover:bg-[#2f7a6f] transition-colors disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          <button
            className="block text-center text-[#E6E6E6] text-sm mb-6 mx-auto hover:underline focus:outline-none"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </button>
          <p className="text-center text-[#E6E6E6] text-sm">
            Already have an account?{' '}
            <a className="underline" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;