import React from "react";
import { FaTint, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const DonationRequests = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-center text-red-600 mb-10 flex items-center justify-center gap-2">
        <FaTint className="text-red-500 animate-pulse" />
        Blood Donation Requests
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* --------- Card 1 --------- */}
        <div className="border border-red-200 rounded-2xl shadow-lg hover:shadow-red-300 transition p-5 bg-white flex flex-col gap-2">
          <h3 className="text-xl font-bold text-red-600">Rahim Uddin</h3>
          <p className="text-gray-700">
            📍 <span className="font-medium">Dhaka, Uttara</span>
          </p>
          <p className="text-gray-800 font-semibold">
            🩸 Blood Group: <span className="text-red-600">A+</span>
          </p>
          <p className="text-gray-600">📅 2025-08-05</p>
          <p className="text-gray-600">⏰ 10:00 AM</p>
          <Link
            to="/donation_details"
            className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
          >
            <FaEye />
            View
          </Link>
        </div>

        {/* --------- Card 2 --------- */}
        <div className="border border-red-200 rounded-2xl shadow-lg hover:shadow-red-300 transition p-5 bg-white flex flex-col gap-2">
          <h3 className="text-xl font-bold text-red-600">Karim Ahmed</h3>
          <p className="text-gray-700">
            📍 <span className="font-medium">Madaripur, Shibchar</span>
          </p>
          <p className="text-gray-800 font-semibold">
            🩸 Blood Group: <span className="text-red-600">O-</span>
          </p>
          <p className="text-gray-600">📅 2025-08-10</p>
          <p className="text-gray-600">⏰ 2:30 PM</p>
          <Link
            to="/donation_details"
            className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
          >
            <FaEye />
            View
          </Link>
        </div>

        {/* --------- Card 3 --------- */}
        <div className="border border-red-200 rounded-2xl shadow-lg hover:shadow-red-300 transition p-5 bg-white flex flex-col gap-2">
          <h3 className="text-xl font-bold text-red-600">Sumaiya Akter</h3>
          <p className="text-gray-700">
            📍 <span className="font-medium">Barishal, Barishal Sadar</span>
          </p>
          <p className="text-gray-800 font-semibold">
            🩸 Blood Group: <span className="text-red-600">B+</span>
          </p>
          <p className="text-gray-600">📅 2025-08-15</p>
          <p className="text-gray-600">⏰ 9:00 AM</p>
          <Link
            to="/donation_details"
            className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold"
          >
            <FaEye />
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationRequests;
