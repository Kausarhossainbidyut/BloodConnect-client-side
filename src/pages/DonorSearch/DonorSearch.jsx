//import { Card } from "@/components/ui/card"; // Optional: You can use your own Card component
import axios from "axios";
import { useState } from "react";
//import { toast } from "react-hot-toast";

const DonorSearch = () => {
  const [filters, setFilters] = useState({
    bloodGroup: "",
    district: "",
    upazila: "",
  });
  const [donors, setDonors] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsSearched(false);
    try {
      const res = await axios.get("http://localhost:5000/donors"); // Donor list from backend
      const matched = res.data.filter(
        (donor) =>
          donor.bloodGroup === filters.bloodGroup &&
          donor.district === filters.district &&
          donor.upazila === filters.upazila
      );
      setDonors(matched);
      setIsSearched(true);

      if (matched.length === 0) {
        setError("No donor found for this search.");
      }
    } catch (err) {
      setError("Failed to fetch donors.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">🔍 Search Donors</h2>

      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
      >
        {/* Blood Group */}
        <select
          name="bloodGroup"
          value={filters.bloodGroup}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">Select Blood Group</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
            <option key={group} value={group}>
              {group}
            </option>
          ))}
        </select>

        {/* District */}
        <select
          name="district"
          value={filters.district}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">Select District</option>
          {["Dhaka", "Madaripur", "Barishal", "Rajshahi"].map((dist) => (
            <option key={dist} value={dist}>
              {dist}
            </option>
          ))}
        </select>

        {/* Upazila */}
        <select
          name="upazila"
          value={filters.upazila}
          onChange={handleChange}
          required
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        >
          <option value="">Select Upazila</option>
          {["Madaripur Sadar", "Shibchar", "Kalkini"].map((upz) => (
            <option key={upz} value={upz}>
              {upz}
            </option>
          ))}
        </select>

        {/* Search Button */}
        <button
          type="submit"
          className="sm:col-span-3 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Error message */}
      {error && (
        <p className="text-center text-red-600 font-semibold mb-6">{error}</p>
      )}

      {/* Results */}
      {isSearched && donors.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {donors.map((donor) => (
              <div
                key={donor._id}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={donor.avatar}
                  alt={donor.name}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-800">{donor.name}</h4>
                  <p className="text-gray-600">📧 {donor.email}</p>
                  <p className="text-gray-600">🩸 Blood Group: {donor.bloodGroup}</p>
                  <p className="text-gray-600">
                    📍 {donor.district}, {donor.upazila}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default DonorSearch;
