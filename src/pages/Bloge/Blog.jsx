import React from "react";
import { FaUser, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-100 p-2 rounded-full">
            <img
              src="/icon.png"
              alt="icon"
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          BloodConnect Blog
        </h1>
        <p className="text-gray-600 mb-6">
          Stories, insights, and updates from our life-saving community.
        </p>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search articles by title, author, or keyword..."
          className="input input-bordered w-full max-w-xl mx-auto mb-10"
        />

        {/* Blog Cards (Hardcoded) */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Blog 1 */}
          <div className="rounded-2xl shadow-md bg-white">
            <img
              src="https://i.ibb.co/HD8MH8hf/images-21.jpg"
              alt="Blog preview"
              className="rounded-t-2xl object-cover w-full h-40"
            />
            <div className="p-4 space-y-2 text-left">
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <FaUser className="w-4 h-4 mr-1" /> Dr. Emily Carter
                </span>
                <span className="flex items-center">
                  <FaRegCalendarAlt className="w-4 h-4 mr-1" /> Jul 20, 2025
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                The Journey of a Blood Donation: From Donor to Recipient
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                Ever wondered what happens after you donate blood? Follow the incredible journey of a single pint of blood as it saves lives.
              </p>
              <Link to={"/reed_more"} className="text-red-500 text-sm font-medium hover:underline">
                Read More →
              </Link>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="rounded-2xl shadow-md bg-white">
            <img
              src="/blog-preview.jpg"
              alt="Blog preview"
              className="rounded-t-2xl object-cover w-full h-40"
            />
            <div className="p-4 space-y-2 text-left">
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <FaUser className="w-4 h-4 mr-1" /> Alex Johnson
                </span>
                <span className="flex items-center">
                  <FaRegCalendarAlt className="w-4 h-4 mr-1" /> Jul 15, 2025
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                Why Your Blood Type Matters: A Simple Guide
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                A, B, AB, O… what does it all mean? Learn the basics of blood types and why knowing yours is so important for donation.
              </p>
              <button className="text-red-500 text-sm font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>

          {/* Blog 3 */}
          <div className="rounded-2xl shadow-md bg-white">
            <img
              src="/blog-preview.jpg"
              alt="Blog preview"
              className="rounded-t-2xl object-cover w-full h-40"
            />
            <div className="p-4 space-y-2 text-left">
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <FaUser className="w-4 h-4 mr-1" /> Dr. Sarah Chen
                </span>
                <span className="flex items-center">
                  <FaRegCalendarAlt className="w-4 h-4 mr-1" /> Jul 10, 2025
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                More Than Just a Good Deed: The Health Benefits of Donating Blood
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                Saving lives is the primary reason to donate blood, but did you know it can also have positive effects on your own health?
              </p>
              <button className="text-red-500 text-sm font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
