import React from 'react';
import { FaUser, FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Reed_More = () => {
    return (
        <div className="min-h-screen bg-white  py-10 px-4 md:px-20">
            <div>
                <Link to={"/blog"} className="inline-flex mb-5 items-center gap-2 px-4 py-2 
                 bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 hover:shadow transition duration-200">
                    <span className="text-2xl">←</span>
                    <span className="text-base font-medium">Back to Blog
                    </span>
                </Link >

            </div>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    The Journey of a Blood Donation: From Donor to Recipient
                </h1>
                <div className="flex items-center text-sm text-gray-600 mb-6 space-x-4">
                    <span className="flex items-center">
                        <FaUser className="w-4 h-4 mr-1" /> Dr. Emily Carter
                    </span>
                    <span className="flex items-center">
                        <FaRegCalendarAlt className="w-4 h-4 mr-1" /> July 20, 2025
                    </span>
                </div>

                <img
                    src="https://i.ibb.co/HD8MH8hf/images-21.jpg"
                    alt="Blog preview"
                    className="rounded-xl w-full h-auto mb-6"
                />

                <div className="text-gray-800 space-y-6 text-base leading-7">
                    <p>
                        Donating blood is a simple act of kindness, but the journey your donation takes is a complex and fascinating
                        process. It all starts with you, the donor, rolling up your sleeve. After a quick health screening, about one pint
                        of blood is collected, a process that usually takes less than 15 minutes.
                    </p>

                    <h2 className="text-lg font-semibold text-gray-900">Step 1: The Donation</h2>
                    <p>
                        The first step is the collection itself. Your blood is drawn into a sterile bag. Once the donation is complete, the bag is
                        sealed with a unique barcode that will track it throughout its journey. You'll be given snacks and a drink to help your
                        body replenish fluids.
                    </p>

                    <h2 className="text-lg font-semibold text-gray-900">Step 2: Processing and Testing</h2>
                    <p>
                        Your donated blood is then transported to a processing center. Here, it is spun in a centrifuge to separate it into
                        red blood cells, plasma, and platelets. Globally, all samples taken for these components are sent to labs for various
                        medical examinations. Samples of your blood will also be tested for infectious diseases to confirm their effectiveness
                        and cleanliness, thus ensuring the safety of the blood supply.
                    </p>

                    <h2 className="text-lg font-semibold text-gray-900">Step 3: Storage</h2>
                    <p>
                        Once tested and separated, the blood components are stored in special conditions. Red blood cells are refrigerated and
                        can be stored for up to 42 days. Platelets are stored at room temperature and must be used within five days. Frozen
                        plasma can last up to a year.
                    </p>

                    <h2 className="text-lg font-semibold text-gray-900">Step 4: Distribution and Transfusion</h2>
                    <p>
                        When a hospital needs blood, they place an order with the blood center. The requested components are shipped and
                        delivered promptly to the hospital. There, if matched correctly with a recipient's blood type and condition, your
                        donation saves a life. Finally, the blood is transfused into a patient in need, completing its life-saving journey.
                    </p>

                    <p>
                        From one arm to another, this is how lives can be saved. Your single act of generosity has a profound impact,
                        providing hope and healing to patients in need. Thank you for being a hero.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Reed_More;
