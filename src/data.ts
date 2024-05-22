import { WeatherData } from './context/AppContext'

export const WEATHER_API = import.meta.env.VITE_WEATHER_API

export const data: WeatherData = {
  queryCost: 1,
  latitude: 37.7771,
  longitude: -122.42,
  resolvedAddress: 'San Francisco, CA, United States',
  address: 'San Francisco, CA',
  timezone: 'America/Los_Angeles',
  tzoffset: -7,
  description: 'Similar temperatures continuing with no rain expected.',
  days: [], // Populate with actual day data
  hours: [], // Populate with actual hour data
  currentConditions: {
    datetime: '08:30:00',
    datetimeEpoch: 1716391800,
    temp: 15.8,
    cloudcover: 25,
    conditions: 'Partially cloudy',
    dew: 11.6,
    hours: [], // Populate with actual hour data
    feelslike: 15.8,
    humidity: 76.3,
    icon: 'partly-cloudy-day',
    moonphase: 0.47,
    precip: 0,
    precipprob: 0,
    preciptype: null,
    pressure: 1015,
    snow: 0,
    snowdepth: 0,
    solarenergy: 1,
    solarradiation: 278,
    source: 'obs',
    stations: ['F6803', 'KOAK', 'F4637'],
    sunrise: '05:54:13',
    sunriseEpoch: 1716382453,
    sunset: '20:19:11',
    sunsetEpoch: 1716434351,
    uvindex: 3,
    visibility: 16,
    winddir: 171,
    windgust: 7,
    windspeed: 3.2,
  },
  stations: {
    F6803: {}, // Populate with actual station data
    KHWD: {}, // Populate with actual station data
    KSFO: {}, // Populate with actual station data
  },
}
