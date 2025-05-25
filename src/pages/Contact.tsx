import React from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
const Contact = () => {
  return <div className="w-full bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <MailIcon className="h-16 w-16 mb-6" />
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="What is this regarding?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" placeholder="Your message here..."></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <SendIcon className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <MailIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        nuwandihewamadduma@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+94 11 754 4801</p>
                    </div>
                  </div>
                  <div className="flex">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
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
                    <li>N. A. Hewamadduma - Lead Researcher</li>
                    <li>G. K. Nalinka - NLP Specialist</li>
                    <li>N. T. M. A. S. M. Mahawaththa - Data Scientist</li>
                    <li>S. R.T.L Rosa - UI/UX Designer</li>
                    <li>D. I. De Silva - Backend Developer</li>
                    <li>P. Gunathilake - Research Supervisor</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Looking for Collaborations
                </h3>
                <p className="text-blue-700">
                  We're interested in collaborating with industry partners and
                  academic institutions on further developing AI-powered
                  recruitment technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Location</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual map in a production environment */}
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <div className="text-center">
                <MapPinIcon className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <p className="text-gray-700 font-medium">
                  Map would be displayed here
                </p>
                <p className="text-gray-600">
                  Sri Lanka Institute of Information Technology, Malabe
                </p>
              </div>
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
          <a href="mailto:nuwandihewamadduma@gmail.com" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Email Us Today
          </a>
        </div>
      </section>
    </div>;
};
export default Contact;