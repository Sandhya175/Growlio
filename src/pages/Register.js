import heroImage from '../assets/login signup image.png';
import '../styles/Register.scss';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register bg-growlio-bg min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full">
        <div className="flex-shrink-0 max-w-xs md:max-w-md">
          <img src={heroImage} alt="Register illustration" />
        </div>
        <form
          autoComplete="off"
          className="bg-[#111B29]/20 border border-[#4B5563]/30 rounded-2xl p-8 w-full max-w-md backdrop-blur-sm"
        >
          <h1 className="text-[#E6E6E6] text-3xl font-semibold mb-6">Register</h1>
          <input
            className="w-full mb-4 px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            placeholder="Username"
            required
            type="text"
          />
          <input
            className="w-full mb-4 px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            placeholder="Email"
            required
            type="email"
          />
          <input
            className="w-full mb-4 px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            placeholder="Password"
            required
            type="password"
          />
          <input
            className="w-full mb-6 px-4 py-3 rounded-md border border-[#E6E6E6]/50 bg-transparent text-[#E6E6E6] placeholder:text-[#E6E6E6]/70 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
            placeholder="Confirm Password"
            required
            type="password"
          />
          <button
            className="w-full bg-[#3B9B8F] text-[#E6E6E6] font-medium py-3 rounded-md mb-6 hover:bg-[#2f7a6f] transition-colors"
            type="submit"
          >
            Sign Up
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