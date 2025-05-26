import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <Mail className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Get in touch with our research team to learn more about HireGenius
              or discuss potential collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What is this regarding?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message here..."
                  />
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <Mail className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        nuwandihewamadduma@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <Phone className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+94 11 754 4801</p>
                    </div>
                  </div>
                  <div className="flex">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        Sri Lanka Institute of Information Technology,
                        <br />
                        New Kandy Road, Malabe,
                        <br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-800 mb-4">
                    Research Team
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>D. I. De Silva - Professor</li>
                    <li>P. Gunathilake - Research Supervisor</li>
                    <li>N. A. Hewamadduma - Researcher</li>
                    <li>G. K. Nalinka - Researcher</li>
                    <li>N. T. M. A. S. M. Mahawaththa - Researcher</li>
                    <li>S. R.T.L Rosa - Researcher</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798947321186!2d79.97036731477389!3d6.914682094993648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d3cb77957%3A0x8ac3afb2f02b4ca5!2sSLIIT%20Malabe%20Campus!5e0!3m2!1sen!2slk!4v1621234567890!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SLIIT Location Map"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">
              <MapPin className="inline h-5 w-5 text-blue-600 mr-2" />
              HireGEnius PVT Ltd
            </p>
            <p className="text-gray-600">New Kandy Road, Malabe, Sri Lanka</p>
            <div className="mt-4">
              <a
                href="https://www.google.com/maps/dir//SLIIT+Malabe+Campus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Is HireGenius available for commercial use?
              </h3>
              <p className="text-gray-600">
                Currently, HireGenius is a research project. We are exploring
                opportunities for commercialization and are open to partnerships
                with organizations interested in implementing our technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                How accurate is the system in predicting candidate success?
              </h3>
              <p className="text-gray-600">
                Our models have demonstrated high accuracy in predicting
                candidate suitability, with the ensemble learning approach
                achieving over 98% accuracy in matching candidates to
                appropriate roles.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Can the system be customized for specific company needs?
              </h3>
              <p className="text-gray-600">
                Yes, the system is designed to be adaptable to different
                organizational requirements. The models can be trained on
                company-specific data to better align with particular technical
                needs and company culture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                How does HireGenius handle candidate data privacy?
              </h3>
              <p className="text-gray-600">
                We take data privacy very seriously. The system is designed with
                privacy considerations in mind, and all candidate data is
                processed in compliance with relevant data protection
                regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Learning More?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact our research team to schedule a demonstration or discuss
            potential applications of HireGenius in your organization.
          </p>
          <a
            href="mailto:nuwandihewamadduma@gmail.com"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Email Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
