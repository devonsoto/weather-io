import { useAppContext } from '@/context/AppContext'
import { InfographicWeatherDisplay } from '@/components/InfographicWeatherDisplay'

import { getCurrentWeather, getFollowingDayWeather } from '@/lib/weather'
import { useEffect, useState } from 'react'
import { GraphData, Graph } from '../components/Graph'

interface WeahterInfo {
  conditions: string
  temp: number
  windspeed: number
  precip: number
}

const convertToInterval = (time: string) => {
  if (time === 'Morning') {
    return { start: '8:00', end: '12:00' }
  } else if (time === 'Afternoon') {
    return { start: '12:00', end: '17:00' }
  } else {
    return { start: '17:00', end: '21:00' }
  }
}

export const WeatherInfo = () => {
  const { weatherData, selectedTime } = useAppContext()
  const [currentWeather, setCurrentWeather] = useState<WeahterInfo>()
  const [nextWeekWeather, setNextWeekWeather] = useState<WeahterInfo>()
  const [currentDataGraph, setCurrentDataGraph] = useState<GraphData>()
  const [nextWeekDataGraph, setNextWeekDataGraph] = useState<GraphData>()
  const [interval, setInterval] = useState<{
    start: string
    end: string
  } | null>(null)

  console.log('interval', interval)
  useEffect(() => {
    if (!weatherData || !selectedTime) return
    const currentWeath = getCurrentWeather(weatherData)
    setCurrentWeather(currentWeath)
    const nextWeekWeather = getFollowingDayWeather(weatherData)
    setNextWeekWeather(nextWeekWeather)

    const currentHoursData = weatherData.days[0].hours
    const graphData = {
      temp: currentHoursData.map((hour) => hour.temp),
      precip: currentHoursData.map((hour) => hour.precip),
      windspeed: currentHoursData.map((hour) => hour.windspeed),
    }
    setCurrentDataGraph(graphData)

    const nextHoursData = nextWeekWeather.hours
    const nextData = {
      temp: nextHoursData.map((hour) => hour.temp),
      precip: nextHoursData.map((hour) => hour.precip),
      windspeed: nextHoursData.map((hour) => hour.windspeed),
    }
    setNextWeekDataGraph(nextData)

    const interval = convertToInterval(selectedTime)
    setInterval(interval)
  }, [weatherData, selectedTime])

  return (
    <div className='flex flex-1 flex-col sm:flex-row justify-between w-full p-9'>
      <div className='w-full sm:w-1/2 p-4'>
        {currentWeather && (
          <InfographicWeatherDisplay
            conditions={currentWeather.conditions}
            temp={currentWeather.temp}
            windspeed={currentWeather.windspeed}
            precip={currentWeather.precip}
          />
        )}
        {currentDataGraph && interval && (
          <Graph data={currentDataGraph} interval={interval} />
        )}
      </div>

      <div className='w-full sm:w-1/2 p-4'>
        {nextWeekWeather && interval && (
          <InfographicWeatherDisplay
            conditions={nextWeekWeather.conditions}
            temp={nextWeekWeather.temp}
            windspeed={nextWeekWeather.windspeed}
            precip={nextWeekWeather.precip}
          />
        )}
        {nextWeekDataGraph && interval && (
          <Graph data={nextWeekDataGraph} interval={interval} />
        )}
      </div>
    </div>
  )
}
