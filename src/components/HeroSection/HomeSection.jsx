import React from "react";
import { FaUsers, FaHeartbeat, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    icon: <FaUsers />,
    count: 12450,
    suffix: "+",
    label: "Registered Donors",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: <FaHeartbeat />,
    count: 8320,
    suffix: "+",
    label: "Lives Saved",
    color: "bg-pink-100 text-pink-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    count: 491,
    suffix: "+",
    label: "Upazilas Covered",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: <FaClock />,
    count: 2,
    suffix: "hrs",
    label: "Response Time",
    color: "bg-blue-100 text-blue-600",
  },
];

const HomeSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      {/* Intro */}
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-red-600 font-semibold mb-2">
          Our Impact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Statistics That Show Our Reach
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Every number tells a story of lives touched, donors connected, and communities served.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-red-50 shadow-md hover:shadow-lg"
          >
            <div
              className={`flex justify-center items-center mb-3 w-16 h-16 rounded-full mx-auto ${stat.color} text-3xl`}
            >
              {stat.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              <CountUp end={stat.count} duration={2.5} /> {stat.suffix}
            </h3>
            <p className="text-gray-500 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeSection;
