import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { BiEnvelope, BiImageAdd, BiKey, BiUser } from "react-icons/bi";
import { useNavigate, Link } from "react-router-dom";
import Blood_Donation from "../assets/Blood_Donation.json";
import Title from "../components/Title";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import districtsData from "../assets/district.json";
import upazilasData from "../assets/upazila.json";

const Register = () => {
  const goTo = useNavigate();
  const { createUser, setUser, updateUser } = useContext(AuthContext);

  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrictId(districtId);

    const relatedUpazilas = upazilasData.filter(
      (u) => String(u.district_id) === String(districtId)
    );
    setFilteredUpazilas(relatedUpazilas);
  };

  const isValidPassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase) {
      Swal.fire("Error", "Password must have an uppercase letter", "error");
      return false;
    }
    if (!hasLowerCase) {
      Swal.fire("Error", "Password must have a lowercase letter", "error");
      return false;
    }
    if (!isLongEnough) {
      Swal.fire("Error", "Password must be at least 6 characters", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log();
    

    const {
      name,
      image,
      email,
      pass,
      confirmPassword,
     
    } = data;

    if (pass !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    if (!isValidPassword(pass)) return;

    createUser(email, pass)
      .then((res) => {
        updateUser({ displayName: name, photoURL: image }).then(() => {
          setUser({ ...res.user, displayName: name, photoURL: image });

          Swal.fire("Success", "Registered successfully!", "success").then(() => {
            goTo(location.state ? location.state : "/");
          });
        });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          Swal.fire({
            title: "Already Registered",
            text: "This email is already registered. Please go to login.",
            icon: "warning",
            confirmButtonText: "Go to Login",
          }).then((result) => {
            if (result.isConfirmed) {
              goTo("/login");
            }
          });
        } else {
          Swal.fire("Registration Failed", err.message, "error");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full mx-auto bg-white bg-opacity-90 shadow-xl rounded-xl overflow-hidden p-6 md:p-10">
        <Title>Join with Us</Title>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mt-8">
          {/* Form */}
          <div className="w-full sm:border-t-2 md:border-none lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 bg-white bg-opacity-80 rounded-lg shadow-md"
            >
              {/* Name */}
              <div className="flex items-center border-b-2 border-gray-400 focus-within:border-orange-500 transition">
                <BiUser className="text-xl text-gray-600 mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="flex-1 py-2 bg-transparent outline-none text-gray-800"
                />
              </div>

              {/* Image */}
              <div className="flex items-center border-b-2 border-gray-400 focus-within:border-orange-500 transition">
                <BiImageAdd className="text-xl text-gray-600 mr-2" />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  required
                  className="flex-1 py-2 bg-transparent outline-none text-gray-800"
                />
              </div>

              {/* Email */}
              <div className="flex items-center border-b-2 border-gray-400 focus-within:border-orange-500 transition">
                <BiEnvelope className="text-xl text-gray-600 mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 py-2 bg-transparent outline-none text-gray-800"
                />
              </div>

              {/* Blood Group */}
              <select
                name="bloodGroup"
                required
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option disabled value="">Choose Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>

              {/* District */}
              <select
                name="district"
                required
                onChange={handleDistrictChange}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option disabled value="">Select District</option>
                {districtsData.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>

              {/* Upazila */}
              <select
                name="upazila"
                required
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option disabled value="">Select Upazila</option>
                {filteredUpazilas.map((u) => (
                  <option key={u.id} value={u.name}>
                    {u.name}
                  </option>
                ))}
              </select>

              {/* Password */}
              <div className="flex items-center border-b-2 border-gray-400 focus-within:border-orange-500 transition">
                <BiKey className="text-xl text-gray-600 mr-2" />
                <input
                  type="password"
                  name="pass"
                  placeholder="Password"
                  required
                  className="flex-1 py-2 bg-transparent outline-none text-gray-800"
                />
              </div>

              {/* Confirm Password */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered w-full"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-semibold transition duration-300"
              >
                Register Now
              </button>

              {/* Link to Login */}
              <p className="text-center text-sm text-gray-700 pt-4 border-t">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 underline hover:text-blue-800">
                  Login here
                </Link>
              </p>
            </form>
          </div>

          {/* Lottie Animation */}
          <div className="w-full lg:w-1/2 max-w-md">
            <Lottie
              animationData={Blood_Donation}
              loop
              className="w-[250px] mx-auto md:w-[350px] lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
