import React, { createContext, useEffect, useState, useCallback } from 'react';
import { fetchLocations } from '../api';
import { updateTheme } from '../helpers/updateTheme';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [condition, setCondition] = useState({});
  const [forecasts, setForecasts] = useState({});
  const [city, setCity] = useState('Viçosa, MG');

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false);

  const fetchData = useCallback(async city => {
    setError(false);
    setIsLoading(true)

    try {
      const { condition, forecasts, temperature } = await fetchLocations(city);
      setIsLoading(false)
      setCondition(condition);
      setForecasts(forecasts);
      updateTheme(temperature);
      
    } catch (err) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    fetchData(city);
  }, [fetchData, city]);

  return (
    <WeatherContext.Provider value={{ condition, city, setCity, error, forecasts, isLoading }}>
      {children}
    </WeatherContext.Provider>
  );
};
