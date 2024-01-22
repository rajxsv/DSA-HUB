// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Test = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center">
      <nav className="absolute top-4 right-4">
        <Link to="/login" className="text-lg mr-4 hover:text-gray-800">
          Log In
        </Link>
        <Link to="/signup" className="text-lg hover:text-gray-800">
          Sign Up
        </Link>
      </nav>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">DSA Problems</h1>
        <p className="text-lg mb-8">
          Practice data structures and algorithms problems to sharpen your coding skills!
        </p>
        <Link to="/problems">
          <button className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-200 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Card 1</h2>
          <p className="text-gray-700">
            Sample content for Card 1. You can add any information here.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-200 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Card 2</h2>
          <p className="text-gray-700">
            Sample content for Card 2. You can add any information here.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-200 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Card 3</h2>
          <p className="text-gray-700">
            Sample content for Card 3. You can add any information here.
          </p>
        </motion.div>

        {/* Additional Cards */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-200 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Card 4</h2>
          <p className="text-gray-700">
            Additional sample content. Feel free to add more cards!
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-gray-200 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Card 5</h2>
          <p className="text-gray-700">
            Another card with additional sample content.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Test;
