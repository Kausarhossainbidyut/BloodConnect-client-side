import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaRegCalendarAlt } from 'react-icons/fa';

const Reed_More = () => {
  const blog = {
    title: "The Journey of a Blood Donation: From Donor to Recipient",
    author: "Dr. Emily Carter",
    date: "July 20, 2025",
    image: "https://i.ibb.co/HD8MH8hf/images-21.jpg",
    content: `
Donating blood is a simple act of kindness, but the journey your donation takes is a complex and fascinating process.

It all starts with you, the donor, rolling up your sleeve. After a quick health screening, about one pint of blood is collected, a process that usually takes less than 15 minutes.

---

**Step 1: The Donation**
The first step is the collection itself. Your blood is drawn into a sterile bag and sealed with a unique barcode that will track it throughout its journey. You'll be given snacks and a drink to help your body replenish fluids.

**Step 2: Processing and Testing**
Your donated blood is transported to a processing center. There, it is spun in a centrifuge to separate it into red blood cells, plasma, and platelets. Samples are tested for infectious diseases to ensure safety.

**Step 3: Storage**
Red blood cells are refrigerated for up to 42 days, platelets last 5 days, and plasma can be frozen for up to a year.

**Step 4: Distribution and Transfusion**
When a hospital needs blood, it places an order. If matched with a recipient, your donation saves a life. From one arm to another — you are a hero.
    `,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffafa] to-[#ffe6e6] py-8 px-4 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white shadow-md hover:brightness-110 transition duration-300 text-sm sm:text-base"
        >
          <span className="text-lg">←</span> <span>Back to Blog</span>
        </Link>

        {/* Blog Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-5 sm:p-8 md:p-10 space-y-6 border border-red-100">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm sm:text-base">
            <span className="flex items-center gap-1">
              <FaUser className="text-red-500" />
              {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <FaRegCalendarAlt className="text-red-500" />
              {blog.date}
            </span>
          </div>

          {/* Image */}
          <img
            src={blog.image}
            alt="Blog"
            className="w-full h-auto rounded-xl shadow-md border border-gray-200"
          />

          {/* Content */}
          <div className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reed_More;
