import React from 'react';
import Banner from '../components/Banner';

const Contact = () => {
  return (
    <div 
      className="min-h-screen bg-navy-800 flex flex-col items-center p-6"
    >
      {/* Overlay Container for Content */}
      <div className="w-full max-w-5xl bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6">
        
        {/* Header with Image Background */}
        <div>
          <Banner />
        </div>
        
        <div className="text-center text-gray-700 p-6">
          <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <p>We're here to help! Reach out with any questions, comments, or feedback.</p>
        </div>

        {/* Contact Details and Map */}
        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          {/* Contact Details */}
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg text-gray-700">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p><span className="font-semibold">Phone:</span> (123) 456-7890</p>
            <p><span className="font-semibold">Email:</span> contact@orionhealth.com</p>
            <p><span className="font-semibold">Address:</span> 123 Wellness Street, Health City, HC 12345</p>
          </div>

          {/* Map Section - Set to Royal Perth Hospital */}
          <div className="flex-1 rounded-lg shadow-lg overflow-hidden h-80">
            <iframe
              title="Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.724073841039!2d115.86045721508882!3d-31.954447781241515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32badcd017d9d9%3A0x9011222d438fbb0e!2sRoyal%20Perth%20Hospital!5e0!3m2!1sen!2sus!4v1698761234567!5m2!1sen!2sus"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Get in Touch Form */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-700">
          <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Subject</label>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea 
                placeholder="Write your message here..." 
                className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="4"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Privacy Policy Section */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg text-gray-700">
          <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
          <p className="mb-4">At ORION Health, we are committed to protecting your privacy. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to keep it secure.</p>
          <p className="mb-2"><span className="font-semibold">Information We Collect:</span> We may collect personal information such as your name, email address, and phone number when you contact us or use our services.</p>
          <p className="mb-2"><span className="font-semibold">How We Use Your Information:</span> We use your information to respond to your inquiries, provide healthcare services, and improve our offerings. We do not share your information with third parties without your consent, except as required by law.</p>
          <p className="mb-2"><span className="font-semibold">Security Measures:</span> We employ industry-standard security practices to protect your information from unauthorized access and disclosure.</p>
          <p className="mb-2"><span className="font-semibold">Your Rights:</span> You have the right to request access to, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</p>
          <p>If you have questions about our Privacy Policy, feel free to contact us at the email provided above.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;