import React from 'react';
import ConnectWallet from './ConnectWallet';
import NavBar from './NavBar';
import HomePage from './HomePage';

const Layout = () => {
  const { account, error, isConnecting, connectWallet, disconnectWallet } = ConnectWallet();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <NavBar 
        account={account}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
      />
      <HomePage 
        account={account}
        error={error}
        isConnecting={isConnecting}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
      />
    </div>
  );
};

export default Layout;