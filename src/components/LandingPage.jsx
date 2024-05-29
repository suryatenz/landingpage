// src/components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-teal-200 min-h-screen flex flex-col items-center">
      <header className="bg-teal-500 shadow w-full py-4 px-6">
        <h1 className="text-2xl font-bold text-center text-white">My Awesome Landing Page</h1>
      </header>
      <main className="flex-1 flex flex-col items-center w-full">
        <section className="flex flex-col items-center justify-center px-4 py-12 bg-white w-full">
          <h2 className="text-4xl font-extrabold text-teal-700 mb-4">Welcome to My Site</h2>
          <p className="text-teal-600 text-lg mb-6 text-center">
            This is a basic landing page created with React and Tailwind CSS.
          </p>
          <a href="#features" className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition duration-300">
            Learn More
          </a>
        </section>

        <section id="features" className="flex flex-col items-center justify-center px-4 py-12 w-full">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">Features</h2>
          <div className="flex flex-wrap justify-center items-start">
            <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Feature 1</h3>
              <p className="text-teal-600">Detailed description of feature 1.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Feature 2</h3>
              <p className="text-teal-600">Detailed description of feature 2.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
              <h3 className="text-xl font-bold text-teal-700 mb-2">Feature 3</h3>
              <p className="text-teal-600">Detailed description of feature 3.</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="flex flex-col items-center justify-center px-4 py-12 bg-teal-100 w-full">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">Testimonials</h2>
          <div className="flex flex-wrap justify-center items-start">
            <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
              <p className="text-teal-600 italic">"This is the best site ever! Highly recommend."</p>
              <p className="text-teal-800 font-bold mt-2">- Satisfied Customer</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
              <p className="text-teal-600 italic">"Amazing experience, will come back again."</p>
              <p className="text-teal-800 font-bold mt-2">- Happy User</p>
            </div>
          </div>
        </section>

        <section id="contact" className="flex flex-col items-center justify-center px-4 py-12 w-full">
          <h2 className="text-3xl font-bold text-teal-700 mb-6">Contact Us</h2>
          <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-teal-700">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-teal-700">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-teal-700">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer className="bg-teal-500 w-full py-4 px-6 text-center">
        <p className="text-white">&copy; 2024 My Awesome Landing Page</p>
      </footer>
    </div>
  );
};

export default LandingPage;
