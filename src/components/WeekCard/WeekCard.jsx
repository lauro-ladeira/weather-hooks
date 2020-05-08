import React, { useContext } from 'react';
import { WeatherContext } from '../../contexts/WeatherContext';
import { getIcon } from '../../helpers/getIcon';
// import { isObjectEmpty } from '../../helpers/isObjectEmpty';

import './WeekCard.css';

export default function WeekCard() {
  const { forecasts, isLoading } = useContext(WeatherContext);

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="week-container">
      <h1>THIS WEEK</h1>
      <div className="week-box">
        {forecasts.map((forecast, index) => {
          while (index > 0 && index < 6) {
            return (
              <div key={forecast.date} className="day-card">
                <h1>{forecast.day}</h1>
                <i className={getIcon(forecast.text)}></i>
                <div className="temp-detail">
                  <h1>{forecast.low}°</h1>
                  <p>~</p>
                  <h1>{forecast.high}°</h1>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
