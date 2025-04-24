import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { selectAllCryptoAssets } from './features/crypto/cryptoSlice';
import { startWebSocketSimulation } from './services/websocketSimulator';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import './index.css';

function App() {
  const dispatch = useAppDispatch();
  const cryptoAssets = useAppSelector(selectAllCryptoAssets);
  
  useEffect(() => {
    // Start simulated WebSocket
    const stopSimulation = startWebSocketSimulation(dispatch, cryptoAssets);
    
    // Cleanup on unmount
    return () => stopSimulation();
  }, [dispatch, cryptoAssets]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Dashboard />
      </main>
      <div className="bg-white py-5 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2025 CryptoTracker. All rights reserved. Data is simulated for demonstration purposes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;