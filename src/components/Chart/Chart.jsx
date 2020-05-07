import React, { useContext, useState, useEffect } from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine,
} from 'react-sparklines';

import { WeatherContext } from '../../contexts/WeatherContext';
import { isObjectEmpty } from '../../helpers/isObjectEmpty';
import './Chart.css';

export default function Chart() {
  // const [temps, setTemps] = useState([]);
  const { forecasts } = useContext(WeatherContext);

  if (isObjectEmpty(forecasts)) {
    return <></>;
  }

  const temperatures = forecasts.filter((el, index) => {
    return index > 0 && index < 6;
  });
  const highTemps = temperatures.map(temp => temp.high);
  const lowTemps = temperatures.map(temp => temp.low);
  // setTemps(highTemps)

  return (
    <div className="chart-container">
      <div className="text-box">
        <div className="high-btn">HIGH</div>
        <div className="low-btn">LOW</div>
      </div>
      <div className="temps-box">
        {highTemps.map(temp => {
          return (
            <div key={Math.random()} className="temp-card">
              <h1>{temp}°</h1>
            </div>
          );
        })}
      </div>
      <div className="sparkline-box">
        <Sparklines data={highTemps}>
          <SparklinesLine style={{ strokeWidth: 2, stroke: '#FFF', fill: 'none' }} />
          <SparklinesSpots style={{ fill: '#FFF' }} />
          <SparklinesReferenceLine
            type="max"
            style={{ stroke: 'white', strokeOpacity: 0.75, strokeDasharray: '2, 2' }}
          />
        </Sparklines>
      </div>
    </div>
  );
}
