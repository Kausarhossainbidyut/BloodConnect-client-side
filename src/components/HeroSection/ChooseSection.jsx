import React from "react";
import { FaHeart, FaMapMarkerAlt, FaShieldAlt, FaBell, FaAward, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaHeart />,
    title: "Easy Registration",
    desc: "Quick and simple donor registration process with medical verification.",
    color: "bg-pink-100 text-pink-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location-Based Matching",
    desc: "Find nearby donors and blood banks for urgent requirements.",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Donors",
    desc: "All donors are medically verified for safe blood donation.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: <FaBell />,
    title: "Real-time Requests",
    desc: "Instant notifications for urgent blood donation requests.",
    color: "bg-purple-100 text-purple-500",
  },
  {
    icon: <FaAward />,
    title: "Recognition System",
    desc: "Earn badges and recognition for your life-saving contributions.",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: <FaUsers />,
    title: "Community Support",
    desc: "Join a community of heroes dedicated to saving lives.",
    color: "bg-pink-50 text-pink-400",
  },
];

const ChooseSection = () => {
  return (
    <section className="py-24 bg-gray-50 px-6 sm:px-12 md:px-20 lg:px-28">
      {/* Subtitle */}
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wide text-red-600 font-semibold mb-2">
          Our Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why <span className="text-red-600">Choose BloodConnect?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          Our platform makes blood donation simple, safe, and impactful. Join thousands of donors already making a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white p-8 rounded-2xl text-center shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${feature.color} text-3xl`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChooseSection;
