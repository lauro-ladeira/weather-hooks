import React from 'react';

import { WeatherProvider } from './contexts/WeatherContext';

import SearchBar from './components/SearchBar/SearchBar';
import WeatherCard from './components/WeatherCard/WeatherCard';
import WeekCard from './components/WeekCard/WeekCard';
import Chart from './components/Chart/Chart';

import './global.css';

function App() {
  return (
    <WeatherProvider>
      <div className="app-container">
        <SearchBar />
        <WeatherCard />
        <WeekCard />
        <Chart />
      </div>
    </WeatherProvider>
  );
}

export default App;
