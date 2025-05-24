import Header from '../components/Header';
import heroImage from '../assets/landing page image.png';
import '../styles/Landing.scss';

function Landing() {
  return (
    <div className="landing bg-growlio-bg min-h-screen">
      <Header />
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-20 max-w-[1200px] mx-auto h-full">
        <section className="text-white max-w-md md:max-w-lg">
          <h2 className="font-extrabold text-4xl md:text-5xl leading-tight mb-4">
            Manage your <span className="text-growlio-orange">investments</span>
            <br />
            in one place.
          </h2>
          <p className="text-base md:text-lg font-normal mb-8 max-w-[380px]">
            All your personal and family investment details, tracked and organized in one place.
          </p>
          <button className="bg-growlio-accent text-white text-lg font-medium rounded-md px-8 py-3 hover:bg-[#3aa89a] transition">
            <a href="/login" className="no-underline text-white">
              Start now
            </a>
          </button>
        </section>
        <section className="mt-10 md:mt-0">
          <img
            alt="Illustration of investment dashboard"
            className="w-full max-w-[680px] h-auto"
            src={heroImage}
            width="480"
            height="320"
          />
        </section>
      </main>
    </div>
  );
}

export default Landing;