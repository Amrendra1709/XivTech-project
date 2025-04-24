import React from 'react';
import CryptoTable from '../CryptoTable/CryptoTable';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Today's Cryptocurrency Prices by Market Cap</h2>
        <p className="text-gray-600 mt-2">
          The global crypto market cap is $2.81T, a <span className="text-success-500">1.62%</span> increase over the last day.
          <a href="#" className="text-primary-500 hover:text-primary-600 ml-2">Read More</a>
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Market Leaders</h3>
              <p className="text-sm text-gray-600">Showing the top assets by market capitalization</p>
            </div>
            
            <div className="flex space-x-2">
              <button className="bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                7D
              </button>
              <button className="bg-primary-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors">
                Watchlist
              </button>
            </div>
          </div>
        </div>
        
        <CryptoTable />
      </div>
    </div>
  );
};

export default Dashboard;