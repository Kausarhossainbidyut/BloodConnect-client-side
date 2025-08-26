import React from 'react';
import { FaHeartbeat, FaMobileAlt, FaUserShield, FaGlobeAsia } from 'react-icons/fa';

const FeaturedSection = () => {
  return (
    <section className="bg-[#FFF5F5] py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-red-600 font-semibold mb-2">
          Our Promise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why <span className="text-red-600">BloodConnect</span> Stands Out
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          We go beyond just connecting donors and patients — we ensure safety, 
          accessibility, and a reliable network that truly saves lives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 border-t-4 border-[#FFCDD2] hover:border-[#C62828]">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full text-[#C62828] text-3xl">
              <FaHeartbeat />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Real-Time Requests
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Instantly respond to urgent blood needs in your city and nearby areas.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 border-t-4 border-[#FFCDD2] hover:border-[#C62828]">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full text-[#C62828] text-3xl">
              <FaMobileAlt />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Mobile-Friendly
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Access BloodConnect easily from any device, anytime and anywhere.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 border-t-4 border-[#FFCDD2] hover:border-[#C62828]">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full text-[#C62828] text-3xl">
              <FaUserShield />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Verified Donors
          </h3>
          <p className="text-sm text-gray-600 text-center">
            Every donor is strictly verified to ensure trust and safety.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition duration-300 border-t-4 border-[#FFCDD2] hover:border-[#C62828]">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 p-4 rounded-full text-[#C62828] text-3xl">
              <FaGlobeAsia />
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
            Nationwide Coverage
          </h3>
          <p className="text-sm text-gray-600 text-center">
            We connect lives across cities and remote areas all over the country.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
