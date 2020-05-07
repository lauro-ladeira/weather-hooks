import axios from 'axios';
import { generateAuth } from './generateAuth';

export const fetchLocations = async location => {
  try {
    const query = {
      location: location,
      format: 'json',
      u: 'c',
    };

    const yahoo_forecast_url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    const app_id = process.env.REACT_APP_ID;
    const auth_header = generateAuth(query, yahoo_forecast_url);
    
    const { data: { current_observation: { condition }, forecasts } } = 
      await axios.get(
        yahoo_forecast_url, 
        {
          params: query,
          headers: {
            Authorization: auth_header,
            'X-Yahoo-App-Id': app_id
        }
      });
    
    const modifiedData = {
      condition,
      forecasts,
      temperature: condition.temperature,
    };

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
