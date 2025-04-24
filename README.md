# CryptoTracker - Real-Time Cryptocurrency Price Tracker

A modern, responsive React application that simulates real-time cryptocurrency price tracking with WebSocket updates and Redux state management.

![CryptoTracker Demo](https://graceful-truffle-63ac4a.netlify.app)

## 🚀 Live Demo

Visit the live demo: [CryptoTracker](https://graceful-truffle-63ac4a.netlify.app)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 🏗️ Architecture

The application follows a modern React architecture with the following key features:

- **Redux Store**: Centralized state management for cryptocurrency data
- **WebSocket Simulation**: Real-time price updates using setInterval
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **TypeScript**: Strong typing for enhanced development experience
- **Component Structure**:
  - Smart containers for data management
  - Reusable UI components
  - Custom hooks for business logic

## 📦 Key Features

- Real-time price updates
- Price change indicators (1h, 24h, 7d)
- Market cap and volume tracking
- Supply information with progress bars
- 7-day price charts
- Responsive design for all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Building for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── app/                    # Redux store setup
├── components/             # React components
├── features/              # Redux slices
├── services/              # WebSocket simulation
├── types/                 # TypeScript types
└── utils/                 # Helper functions
```

## 🔄 State Management

The application uses Redux Toolkit for state management with the following key features:

- **Slices**: Modular state management for cryptocurrency data
- **Selectors**: Memoized selectors for efficient data access
- **Actions**: Typed actions for price updates

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom color scheme for branding
- Responsive design breakpoints
- Animation utilities for price changes

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🔒 License

MIT License - feel free to use this project for your own purposes.