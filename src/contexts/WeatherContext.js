import React, { createContext, useEffect, useState, useCallback } from 'react';
import { fetchLocations } from '../api';
import { updateTheme } from '../helpers/updateTheme';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('Viçosa, MG');
  const [weatherState, setWeatherState] = useState({
    condition: {},
    forecasts: {},
    isLoading: true,
    error: false
  })  ;

  const fetchData = useCallback(
    async city => {
      if (!weatherState.isLoading) {
        setWeatherState({
          ...weatherState,
          isLoading: true,
          error: false
        })
      }

      try {
        const { condition, forecasts, temperature } = await fetchLocations(city);

        setWeatherState({
          condition,
          forecasts, 
          temperature,
          isLoading: false,
          error: false
        });
        updateTheme(temperature);
        
      } catch (err) {
        setWeatherState({
          ...weatherState,
          isLoading: false,
          error: true
        })
      } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData(city);
  }, [fetchData, city]);

  return (
    <WeatherContext.Provider value={{ ...weatherState, city, setCity}}>
      {children}
    </WeatherContext.Provider>
  );
};
