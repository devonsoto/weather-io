import { WeatherData } from '@/context/AppContext'

export const getCurrentWeather = (weatherData: WeatherData) => {
  const currentWeather = weatherData.days[0]
  const { temp, conditions, windspeed, precip } = currentWeather

  return { temp, conditions, windspeed, precip }
}

export const getFollowingDayWeather = (weatherData: WeatherData) => {
  const days = weatherData.days
  const nextWeekData = days[days.length - 1]

  return nextWeekData
}
