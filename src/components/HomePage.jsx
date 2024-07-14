import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AadharComponent from './AadharComponent';

const HomePage = ({ account, error, isConnecting, connectWallet, disconnectWallet }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      title: "Privacy",
      description: "Our platform ensures your personal information remains confidential. With advanced encryption and anonymization techniques, your identity is protected at all times."
    },
    {
      title: "Security",
      description: "Built on blockchain technology, our system provides unparalleled security. Every transaction and verification is cryptographically secured and immutable."
    },
    {
      title: "Decentralization",
      description: "Say goodbye to central authorities. Our decentralized network puts you in control of your identity, eliminating single points of failure and reducing the risk of data breaches."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="relative h-screen">
        <img 
          src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80" 
          alt="Blockchain Technology" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-7xl font-bold mb-4 text-white"
          >
            Anon Aadhaar Web3
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Secure, Decentralized Identity Verification
          </motion.p>
          {!account && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={connectWallet}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Get Started
            </motion.button>
          )}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {account && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16"
          >
            <AadharComponent />
          </motion.div>
        )}
        {error && <p className="mt-4 text-red-300">{error}</p>}
      </div>
    </div>
  );
};

export default HomePage;