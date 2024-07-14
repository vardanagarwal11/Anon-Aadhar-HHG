import React, { useState } from "react";
import { motion } from "framer-motion";


const NavBar = ({ account, connectWallet, disconnectWallet }) => {

  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className=" flex-shrink-0">
              <img
                className="h-12 w-20 aspect-square "
                src="/aadhar.png"
                alt="Random Logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "NFT", "About"].map((item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={account ? disconnectWallet : connectWallet}
                className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                {account
                  ? `${account.slice(0, 6)}...${account.slice(-4)}`
                  : "Connect Wallet"}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
