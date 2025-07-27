import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router";

const DonationRequestDetails = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-xl rounded-3xl mt-10 border border-red-200">
      <Link
        to="/donation_Requests"
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md hover:brightness-110 transition duration-300 text-sm sm:text-base"
      >
        <span className="text-lg">←</span> <span>Back to Requests</span>
      </Link>
      {/* Header */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 text-red-600 border-b border-red-100 pb-4">
        🩸 Donation Request Details
      </h2>

      {/* Request Info */}
      <div className="space-y-4 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
        <p><strong>👤 Patient Name:</strong> Rahim Uddin</p>
        <p>
          <strong>🩸 Blood Group:</strong>{" "}
          <span className="text-red-600 font-bold">A+</span>
        </p>
        <p><strong>📍 District:</strong> Dhaka</p>
        <p><strong>🏘️ Upazila:</strong> Uttara</p>
        <p><strong>🏥 Hospital:</strong> Apollo Hospital</p>
        <p><strong>📅 Date:</strong> 2025-08-05</p>
        <p><strong>⏰ Time:</strong> 10:00 AM</p>
        <p><strong>📄 Reason:</strong> Emergency surgery required</p>
      </div>

      {/* Donate Button */}
      <div className="mt-10 flex justify-center">
        <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg text-base sm:text-lg font-semibold flex items-center gap-2 transition duration-300 shadow-md">
          <FaCheckCircle />
          Donate Now
        </button>
      </div>

      {/* Confirm Modal UI */}
      <div className="mt-12 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg max-w-xl mx-auto">
        <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-4">Confirm Donation</h3>

        <div className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
          <div>
            <label className="block text-sm font-medium mb-1">Donor Name</label>
            <input
              type="text"
              value="John Doe"
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Donor Email</label>
            <input
              type="email"
              value="john@example.com"
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100 text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaTimesCircle />
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FaCheckCircle />
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationRequestDetails;
