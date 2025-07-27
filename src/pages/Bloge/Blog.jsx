import React from "react";
import {
  FaUser,
  FaRegCalendarAlt,
  FaHeartbeat,
  FaBookOpen,
  FaSearch,
  FaTint,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      _id: "1",
      title: "The Journey of a Blood Donation",
      author: "Dr. Emily Carter",
      date: "Jul 20, 2025",
      image: "https://i.ibb.co/HD8MH8hf/images-21.jpg",
      summary:
        "Ever wondered what happens after you donate blood? Follow the incredible journey of a single pint of blood as it saves lives.",
    },
    {
      _id: "2",
      title: "Why Your Blood Type Matters",
      author: "Alex Johnson",
      date: "Jul 15, 2025",
      image: "/blog-preview.jpg",
      summary:
        "A, B, AB, O… what does it all mean? Learn the basics of blood types and why knowing yours is so important for donation.",
    },
    {
      _id: "3",
      title: "The Health Benefits of Donating",
      author: "Dr. Sarah Chen",
      date: "Jul 10, 2025",
      image: "/blog-preview.jpg",
      summary:
        "Saving lives is the primary reason to donate blood, but did you know it can also have positive effects on your own health?",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 via-white to-red-100 py-16 px-4 md:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4 sm:px-0">
          <div className="flex text-red-600 justify-center mb-4">
            <FaTint className="text-4xl sm:text-5xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-2 flex justify-center items-center gap-2">
            <FaHeartbeat className="text-red-500" /> BloodConnect Blog
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            <FaBookOpen className="inline-block mr-2 text-red-400" />
            Stories, insights, and updates from our life-saving community.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12 px-4 sm:px-0">
          <div className="relative w-full max-w-xl">
            <FaSearch className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles by title, author, or keyword..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden hover:-translate-y-1"
            >
              <img
                src={blog.image}
                alt="Blog preview"
                className="w-full h-48 sm:h-56 md:h-60 object-cover"
              />
              <div className="p-5 space-y-3">
                <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <FaUser className="mr-1 text-red-500" /> {blog.author}
                  </span>
                  <span className="flex items-center">
                    <FaRegCalendarAlt className="mr-1 text-red-500" />{" "}
                    {blog.date}
                  </span>
                </div>
                <h2 className="text-md sm:text-lg font-bold text-gray-800 leading-snug flex items-center gap-2">
                  <FaBookOpen className="text-red-400" />
                  {blog.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                  {blog.summary}
                </p>
                <Link
                  to={`/reed_more/${blog._id}`}
                  className="inline-block text-sm font-semibold text-red-600 hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
