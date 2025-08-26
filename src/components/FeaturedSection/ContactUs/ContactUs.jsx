import React from 'react';
import { FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id='contactUs' className="bg-gradient-to-br from-red-50 via-white to-red-100 py-24 px-4 sm:px-6 md:px-20">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-red-700 mb-16">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-10 shadow-xl rounded-2xl space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="p-10 bg-white rounded-2xl shadow-md space-y-8 border border-red-100">
          {[
            {
              icon: <FaPhoneAlt className="text-red-600 text-xl mt-1" />,
              title: "Phone",
              value: "+880-1796343549",
              note: "Available 24/7 for emergencies",
            },
            {
              icon: <FaPhoneAlt className="text-red-600 text-xl mt-1" />,
              title: "Emergency Contact",
              value: "+880-1600112233",
              note: "Urgent blood request line (direct)",
            },
            {
              icon: <FaEnvelopeOpenText className="text-red-600 text-xl mt-1" />,
              title: "Email",
              value: "khbidyut31@gmail.com",
              note: "We usually reply within 1 hour",
            },
            {
              icon: <FaEnvelopeOpenText className="text-red-600 text-xl mt-1" />,
              title: "Support Email",
              value: "support@bloodconnect.org",
              note: "For general inquiries & assistance",
            },
          ].map((contact, idx) => (
            <div key={idx} className="flex items-start gap-4">
              {contact.icon}
              <div>
                <h4 className="font-bold text-gray-800 text-lg">{contact.title}</h4>
                <p className="text-gray-700">{contact.value}</p>
                <p className="text-sm text-gray-500">{contact.note}</p>
              </div>
            </div>
          ))}

          <div className="bg-red-100 border-l-4 border-red-600 text-red-800 p-4 rounded-lg mt-4">
            <strong>Emergency?</strong> Don’t hesitate to call us directly.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
