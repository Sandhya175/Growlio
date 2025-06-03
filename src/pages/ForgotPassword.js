import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/login signup image.png';
import '../styles/ForgotPassword.scss';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
        throw new Error(data.error || 'Failed to send reset link');
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
    <div className="forgot-password bg-growlio-bg min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        <div className="flex-shrink-0 max-w-xs md:max-w-md">
          <img src={heroImage} alt="Forgot Password illustration" />
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-[#111B29]/20 border border-[#4B5563]/30 rounded-2xl p-8 w-full max-w-md backdrop-blur-sm"
        >
          <h1 className="text-[#E6E6E6] text-3xl font-semibold mb-6">Forgot Password</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          <input
            className="input-field w-full mb-4 px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            placeholder="Email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full bg-[#3B9B8F] text-[#E6E6E6] font-medium py-3 rounded-md mb-6 hover:bg-[#2f7a6f] transition-colors disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
          <p className="text-center text-[#E6E6E6] text-sm">
            Remember your password?{' '}
            <a className="underline" href="/login">
              Login
            </a>
          </p>
          <p className="text-center text-[#E6E6E6] text-sm mt-2">
            Don't have an account?{' '}
            <a className="underline" href="/register">
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;