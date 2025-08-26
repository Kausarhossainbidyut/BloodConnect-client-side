import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-white">
      <div className="w-full max-w-6xl flex flex-col-reverse lg:flex-row items-center">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Be the <span className="text-red-600">Reason</span> <br /> Someone <span className="text-red-600">Lives</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto lg:mx-0">
            A single drop of your blood can be a lifetime of hope for someone. Together, we can make sure no one waits in fear for help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/registration"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              ❤️ Start Saving Lives
            </Link>
            <Link
              to="/donor_Search"
              className="border-2 border-red-600 text-red-600 hover:bg-red-100 font-semibold py-3 px-6 rounded-lg transition duration-300"
            >
              Find a Lifesaver
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative h-72 sm:h-96 lg:h-[450px] mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1643207771058-8fb65a2330c9"
            alt="Blood donation"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
