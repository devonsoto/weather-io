import { TimeDropdown } from '@/components/timeDropdown'
import { LocationInput } from '@/components/locationInput'
import { useAppContext } from '@/context/AppContext'
import { useEffect, useState } from 'react'
import { WEATHER_API } from '@/data'
import { getNextTwoDatesForDay } from '@/lib/date'

export const LocationTimeInputs = () => {
  const {
    location,
    selectedDay,
    selectedTime,
    handleLocationChange,
    handleDayChange,
    handleTimeChange,
    setWeatherData,
  } = useAppContext()

  const [nextDates, setNextDates] = useState<[string, string] | null>(null)

  useEffect(() => {
    if (selectedDay) {
      const dates = getNextTwoDatesForDay(selectedDay)
      setNextDates(dates)
      console.log('dates', dates)
    }
  }, [selectedDay])

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (nextDates && selectedTime && selectedDay) {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${nextDates[0]}/${nextDates[1]}?unitGroup=metric&key=${WEATHER_API}&contentType=json`

        try {
          const response = await fetch(url)
          const data = await response.json()
          setWeatherData(data)
          console.log('weatherData', data)
        } catch (error) {
          console.error('Failed to fetch weather data:', error)
        }
      }
    }

    fetchWeatherData()
  }, [nextDates, selectedTime, selectedDay, location, setWeatherData])

  return (
    <>
      <div className='justify-between flex-col sm:flex-row space-y-5 sm:space-y-0 items-center flex '>
        <LocationInput
          location={location ?? ''}
          handleLocationChange={handleLocationChange}
        />
        <div className='flex justify-start sm:justify-end'>
          <TimeDropdown
            selectedDay={selectedDay}
            selectedTime={selectedTime}
            handleDayChange={handleDayChange}
            handleTimeChange={handleTimeChange}
          />
        </div>
      </div>
      <div className=' w-full border-b-2 border-black'></div>
    </>
  )
}

// In this interview you’ll be working through a real-life problem that you’d like to encounter on the job. You’ll be asked to read some requirements and build out features of a react component. You don't need anything set up on your computer other than the Coderpad link (above) and your favorite browser. You’ll also have an opportunity to talk about your past working experience with a couple engineers who would be your peers on the team. We’ll be grading you on both technical and soft skills.
// A candidate should be prepared to discuss these topics while working through the coding exercises in the tech screen. It is meant to gauge a candidate’s coding and problem-solving skills.The main focus will be how a candidate would approach and communicate to us regarding the technical problems presented, and also how familiar they are with navigating through React/HTML/CSS.

// hints
// carasouls problem
//
