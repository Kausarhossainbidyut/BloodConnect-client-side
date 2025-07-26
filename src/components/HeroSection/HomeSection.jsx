import React from 'react';
import { FaUsers, FaHeartbeat, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const HomeSection = () => {
    return (
        <div className="bg-[#ffffff] py-[66px] px-6 md:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                {/* Registered Donors */}
                <div className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-red-50 shadow-md hover:shadow-lg">
                    <div className="flex justify-center mb-3">
                        <FaUsers className="text-red-600 text-4xl transition-transform duration-300 hover:-translate-y-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">12,450+</h3>
                    <p className="text-gray-500">Registered Donors</p>
                </div>

                {/* Lives Saved */}
                <div className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-red-50 shadow-md hover:shadow-lg">
                    <div className="flex justify-center mb-3">
                        <FaHeartbeat className="text-pink-500 text-4xl transition-transform duration-300 hover:-translate-y-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">8,320+</h3>
                    <p className="text-gray-500">Lives Saved</p>
                </div>

                {/* Cities Covered */}
                <div className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-red-50 shadow-md hover:shadow-lg">
                    <div className="flex justify-center mb-3">
                        <FaMapMarkerAlt className="text-purple-600 text-4xl transition-transform duration-300 hover:-translate-y-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">491+</h3>
                    <p className="text-gray-500">Upazilas Covered</p>
                </div>

                {/* Response Time */}
                <div className="bg-white p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-red-50 shadow-md hover:shadow-lg">
                    <div className="flex justify-center mb-3">
                        <FaClock className="text-blue-600 text-4xl transition-transform duration-300 hover:-translate-y-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">&lt;2hrs</h3>
                    <p className="text-gray-500">Response Time</p>
                </div>

            </div>
        </div>
    );
};

export default HomeSection;
