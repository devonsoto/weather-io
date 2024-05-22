import { useAppContext, WeatherData } from '@/context/AppContext'
import { SunIcon, CloudIcon } from '@heroicons/react/24/outline'
const getCurrentWeather = (weatherData: WeatherData) => {
  const currentWeather = weatherData.days[0]
  const { temp, conditions, windspeed, precip } = currentWeather

  return { temp, conditions, windspeed, precip }
}

const getFollowingDayWeather = (weatherData: WeatherData) => {
  const days = weatherData.days
  const nextWeekData = days[days.length - 1]

  return nextWeekData
}

const getIcon = (conditions: string) => {
  if (conditions.includes('cloud')) {
    return <CloudIcon className='size-20' />
  }
  return <SunIcon className='size-20' />
}

const DisplayWeather = ({
  conditions,
  temp,
  windspeed,
  precip,
}: {
  conditions: string
  temp: number
  windspeed: number
  precip: number
}) => {
  const Icon = getIcon(conditions)

  return (
    <div className='flex space-x-2 text-black text-sm items-center'>
      {Icon}
      <div className='flex flex-col'>
        <div className='flex space-x-2 font-bold'>
          <p>{conditions}</p>
          <p>{temp}°F</p>
        </div>
        <p>
          Windspeed <span className='font-semibold'>{windspeed}mph</span>
        </p>
        <p>
          Chance of rain: <span className='font-semibold'>{precip}</span>
        </p>
      </div>
    </div>
  )
}

export const WeatherInfo = () => {
  const { weatherData } = useAppContext()

  if (!weatherData) {
    return (
      <div className='flex h-full w-full flex-1 bg-slate-300/90 m-12 justify-center items-center'>
        Select a Weekday and Time to see the weather
      </div>
    )
  }

  const info = getCurrentWeather(weatherData)
  const nextWeekData = getFollowingDayWeather(weatherData)

  return (
    <>
      {weatherData ? (
        <div className='flex justify-between w-full p-9'>
          <DisplayWeather
            conditions={info.conditions}
            temp={info.temp}
            windspeed={info.windspeed}
            precip={info.precip}
          />
          {/* <div className='flex space-x-2 text-black text-sm items-center'>
            <SunIcon className='size-20' />
            <div className='flex flex-col'>
              <div className='flex space-x-2'>
                <p>{info.conditions}</p>
                <p>{info.temp}°F</p>
              </div>
              <p>winds {info.windspeed}mph</p>
            </div>
          </div> */}
          <DisplayWeather
            conditions={nextWeekData.conditions}
            temp={nextWeekData.temp}
            windspeed={nextWeekData.windspeed}
            precip={nextWeekData.precip}
          />
        </div>
      ) : (
        <div>test</div>
      )}
    </>
  )
}
