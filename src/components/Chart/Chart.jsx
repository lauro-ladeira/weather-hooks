import React, { useContext, useState, useEffect } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

import { WeatherContext } from '../../contexts/WeatherContext';
import './Chart.css';

export default function Chart() {
  const [temps, setTemps] = useState({
    values: [],
    type: 'high',
  });

  const {forecasts, error } = useContext(WeatherContext);

  useEffect(() => {
    if (!error) {
      const temperatures = forecasts.filter((el, index) => {
        return index > 0 && index < 6;
      });
      setTemps({ values: temperatures, type: 'high' });
    }
  }, [error, forecasts]);

  const handleChangeHigh = () => {
      setTemps({ ...temps, type: 'high' });
  }
  const handleChangeLow = () => {
    setTemps({ ...temps, type: 'low' });
  }

  return (
    <div className="chart-container">
      {!error && (
        <>
          <div className="text-box">
            <div className={`high-btn ${temps.type ==='high' ? "active" : ""}`} onClick={handleChangeHigh}>
              HIGH
            </div>
            <div className={`low-btn ${temps.type ==='low'? "active" : ""}`} onClick={handleChangeLow}>
              LOW
            </div>
          </div>
          <div className="temps-box">
            {temps.values.map(temp => {
              return (
                <div key={Math.random()} className="temp-card">
                  <h1>{temp[temps.type]}°</h1>
                </div>
              );
            })}
          </div>
          <div className="sparkline-box">
            <Sparklines data={temps.values.map(temp => temp[temps.type])}>
              <SparklinesLine style={{ strokeWidth: 2, stroke: '#FFF', fill: '#FFF' }} />
              <SparklinesReferenceLine
                type="avg"
                style={{ stroke: 'white', strokeOpacity: 0.75, strokeDasharray: '2, 2' }}
              />
              <SparklinesSpots style={{ fill: '#FFF' }} />
            </Sparklines>
          </div>
        </>
      )}
    </div>
  );
}
