import React, { useContext, useState } from "react";
import {
  FaTint,
  FaMapMarkerAlt,
  FaHospital,
  FaEnvelope,
  FaUser,
  FaClock,
  FaCalendarAlt,
  FaCommentDots,
  FaCheck,
} from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router";

const DonationRequestDetails = () => {
 const { user, loading } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [request, setRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/donation-requests/${id}`);
        setRequest(res.data);
      } catch (err) {
        console.error("Failed to load donation request", err);
      }
    };
    fetchData();
  }, [id]);

  const handleDonate = async () => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/donation-requests/${id}`, {
        donationStatus: "inprogress",
        donorName: user.displayName,
        donorEmail: user.email,
      });
      toast.success("Donation confirmed!");
      setShowModal(false);
      setRequest({ ...request, donationStatus: "inprogress" });
    } catch (err) {
      toast.error("Failed to confirm donation");
    }
  };

  if (!request) return <div>Loading...</div>;


  if (!request) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-white shadow-md rounded-3xl mt-10">
      <h1 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-2">
        <FaTint /> Blood Donation Request Details
      </h1>

      <div className="grid gap-4 text-gray-700">
        <DetailRow icon={<FaUser />} label="Requester" value={request.requesterName} />
        <DetailRow icon={<FaEnvelope />} label="Email" value={request.requesterEmail} />
        <DetailRow icon={<FaUser />} label="Recipient Name" value={request.recipientName} />
        <DetailRow
          icon={<FaMapMarkerAlt />}
          label="Location"
          value={`${request.district}, ${request.upazila}`}
        />
        <DetailRow icon={<FaHospital />} label="Hospital" value={request.hospital} />
        <DetailRow icon={<FaMapMarkerAlt />} label="Address" value={request.address} />
        <DetailRow icon="🩸" label="Blood Group" value={request.bloodGroup} />
        <DetailRow icon={<FaCalendarAlt />} label="Date" value={request.date} />
        <DetailRow icon={<FaClock />} label="Time" value={request.time} />
        <div className="flex items-start gap-2">
          <FaCommentDots className="text-red-500 mt-1" />
          <div>
            <span className="font-medium">Message:</span> <br />
            {request.message}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowModal(true)}
        className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
      >
        Donate Now
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-xl shadow-xl relative">
            <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center gap-2">
              <FaTint /> Confirm Donation
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Donor Name</label>
                <input
                  type="text"
                  value={user.name}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Donor Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                  className="w-full px-4 py-2 border rounded-lg bg-gray-100"
                />
              </div>
              <button
                onClick={handleConfirmDonation}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition"
              >
                <FaCheck /> Confirm Donation
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full text-center text-sm text-gray-500 hover:underline mt-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <div className="flex items-center gap-2">
    <span className="text-red-500">{icon}</span>
    <span className="font-medium">{label}:</span> {value}
  </div>
);

export default DonationRequestDetails;
