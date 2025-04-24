import React from 'react';
import { Search, Moon, Settings, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-bold text-primary-500">CryptoTracker</h1>
            
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-900 font-medium hover:text-primary-500 transition-colors">Cryptocurrencies</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Exchanges</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">NFTs</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 transition-colors">
                <div className="flex items-center">
                  <span>Products</span>
                  <ChevronDown size={16} className="ml-1" />
                </div>
              </a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-100 rounded-full pl-9 pr-4 py-1.5 w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:bg-white transition-all"
              />
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Moon size={20} className="text-gray-700" />
            </button>
            
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Settings size={20} className="text-gray-700" />
            </button>
            
            <button className="hidden sm:block bg-primary-500 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-primary-600 transition-colors">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;