import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import heroImage from '../assets/login signup image.png';
import '../styles/ResetPassword.scss';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const tokenFromUrl = query.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
    } else {
      setError('Invalid or missing token');
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password, confirmPassword }),
      });

      console.log('Response Status:', response.status);
      console.log('Response Headers:', response.headers.get('Content-Type'));

      const contentType = response.headers.get('Content-Type') || '';
      const responseText = await response.text();
      console.log('Raw Response:', responseText);

      let data;
      if (contentType.includes('application/json')) {
        data = JSON.parse(responseText);
      } else {
        throw new Error('Server returned an invalid response. Please try again later.');
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to reset password');
      }

      setSuccess(data.message);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password bg-growlio-bg min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        <div className="flex-shrink-0 max-w-xs md:max-w-md">
          <img src={heroImage} alt="Reset Password illustration" />
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-[#111B29]/20 border border-[#4B5563]/30 rounded-2xl p-8 w-full max-w-md backdrop-blur-sm"
        >
          <h1 className="text-[#E6E6E6] text-3xl font-semibold mb-6">Reset Password</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          <div className="mb-4 relative">
            <input
              className="input-field w-full px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
              placeholder="New Password"
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
              className="input-field w-full px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
              placeholder="Confirm New Password"
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
            disabled={loading || !token}
          >
            {loading ? 'Resetting...' : 'Reset Password'}
          </button>
          <p className="text-center text-[#E6E6E6] text-sm">
            Remember your password?{' '}
            <a className="underline" href="/login">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;