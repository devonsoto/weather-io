import { SunIcon, CloudIcon } from '@heroicons/react/24/outline'

const getIcon = (conditions: string) => {
  if (conditions.includes('cloud')) {
    return <CloudIcon className='size-20' />
  }
  return <SunIcon className='size-20' />
}

export const InfographicWeatherDisplay = ({
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
