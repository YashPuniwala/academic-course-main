import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-gray-50 flex flex-col lg:flex-row p-8 lg:p-12">
        {/* Contact Form */}
        <div className="flex-1 bg-white p-4 lg:p-6 flex flex-col items-stretch">
          <h2 className="text-xl lg:text-2xl font-bold mb-3">Contact us</h2>
          <p className="text-sm lg:text-base">
            We're open for any suggestion or just to have a chat
          </p>
          <div className="my-6 text-sm lg:text-base flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
            <div className="flex-1">
              <p className="font-bold text-sm mb-1">ADDRESS:</p>
              <p className="text-sm">
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm mb-1">EMAIL:</p>
              <p className="text-sm">info@yoursite.com</p>
            </div>
            <div className="flex-1">
              <p className="font-bold text-sm mb-1">PHONE:</p>
              <p className="text-sm">+ 1235 2355 98</p>
            </div>
          </div>
          <form className="flex flex-col space-y-3">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                placeholder="Enter the subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 px-3 py-2 rounded-md w-full text-sm"
                rows="4"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 mt-4 text-sm"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="flex-1 bg-gray-100 flex items-stretch">
          <div className="w-full h-[450px] lg:h-auto">
            <iframe
              className="w-full h-full rounded-md"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=India,%20indore+(Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6 lg:space-y-8">
            <div className="border-b pb-4">
              <h4 className="font-bold text-lg lg:text-xl mb-2">
                How do I contact support?
              </h4>
              <p className="text-sm lg:text-base text-gray-600">
                You can reach us via the contact form above, or directly email
                us at <a href="mailto:support@yoursite.com" className="text-teal-500 underline">support@yoursite.com</a>.
              </p>
            </div>
            <div className="border-b pb-4">
              <h4 className="font-bold text-lg lg:text-xl mb-2">
                What is your response time?
              </h4>
              <p className="text-sm lg:text-base text-gray-600">
                Our team typically responds to inquiries within 24-48 hours.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg lg:text-xl mb-2">
                Where is your office located?
              </h4>
              <p className="text-sm lg:text-base text-gray-600">
                Our main office is located at 198 West 21th Street, Suite 721,
                New York NY 10016. Feel free to visit us during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;