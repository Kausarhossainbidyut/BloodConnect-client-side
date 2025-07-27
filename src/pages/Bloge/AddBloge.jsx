import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  FaPen,
  FaUser,
  FaImage,
  FaAlignLeft,
  FaPaperPlane,
  FaQuoteLeft,
} from "react-icons/fa";

export default function AddBloge() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/api/blogs", data);
      console.log(res.data);

      Swal.fire({
        icon: "success",
        title: "Blog Submitted!",
        text: "Your blog has been posted successfully.",
        confirmButtonColor: "#d33",
      });

      reset();
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-6 sm:p-10 md:p-12">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-2 flex justify-center items-center gap-2">
          <FaPen className="text-red-500 animate-pulse" />
          Add New Blog
        </h2>
        <p className="text-center text-gray-500 mb-8 text-xs sm:text-sm tracking-wide uppercase">
          Share your knowledge with the community
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-1 gap-2 text-sm sm:text-base">
              <FaPen className="text-red-400" /> Blog Title
            </label>
            <input
              {...register("title")}
              placeholder="Ex: The Truth About Blood Donation"
              className="w-full bg-gray-50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 text-sm sm:text-base transition"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-1 gap-2 text-sm sm:text-base">
              <FaUser className="text-red-400" /> Author Name
            </label>
            <input
              {...register("author")}
              placeholder="Ex: Dr. Sarah Khan"
              className="w-full bg-gray-50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 text-sm sm:text-base transition"
              required
            />
          </div>

          {/* Image */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-1 gap-2 text-sm sm:text-base">
              <FaImage className="text-red-400" /> Image URL
            </label>
            <input
              {...register("image")}
              placeholder="Ex: https://i.ibb.co/example.jpg"
              className="w-full bg-gray-50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 text-sm sm:text-base transition"
              required
            />
          </div>

          {/* Summary */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-1 gap-2 text-sm sm:text-base">
              <FaQuoteLeft className="text-red-400" /> Blog Summary
            </label>
            <textarea
              {...register("summary")}
              placeholder="Write a short summary (2-3 lines)..."
              className="w-full bg-gray-50 px-4 sm:px-5 py-2.5 sm:py-3 h-24 sm:h-28 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none text-sm sm:text-base transition"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="flex items-center text-gray-700 font-semibold mb-1 gap-2 text-sm sm:text-base">
              <FaAlignLeft className="text-red-400" /> Blog Content
            </label>
            <textarea
              {...register("content")}
              placeholder="Write your blog content here..."
              className="w-full bg-gray-50 px-4 sm:px-5 py-2.5 sm:py-3 h-36 sm:h-40 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300 resize-none text-sm sm:text-base transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-sm sm:text-base"
          >
            <FaPaperPlane />
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
}
