import { createContext, ReactNode, useContext, useState } from 'react'

interface AppContextType {
  location?: string
  handleLocationChange: (newLocation: string) => void
  selectedDay?: string
  handleDayChange: (day: string) => void
  selectedTime?: string
  handleTimeChange: (time: string) => void
  weatherData?: WeatherData | null
  setWeatherData: (data: WeatherData) => void
}

export interface WeatherData {
  queryCost: number
  latitude: number
  longitude: number
  resolvedAddress: string
  address: string
  timezone: string
  tzoffset: number
  description: string
  hours: CurrentConditions[]
  days: CurrentConditions[]
  currentConditions?: CurrentConditions
  stations?: Record<string, unknown>
}

export interface CurrentConditions {
  datetime: string
  datetimeEpoch: number
  temp: number
  hours: CurrentConditions[]
  cloudcover: number
  conditions: string
  dew: number
  feelslike: number
  humidity: number
  icon: string
  moonphase: number
  precip: number
  precipprob: number
  preciptype: unknown // This could be a specific type if you know it
  pressure: number
  snow: number
  snowdepth: number
  solarenergy: number
  solarradiation: number
  source: string
  stations: string[]
  sunrise: string
  sunriseEpoch: number
  sunset: string
  sunsetEpoch: number
  uvindex: number
  visibility: number
  winddir: number
  windgust: number
  windspeed: number
}

const AppContext = createContext<AppContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<string | undefined>(
    'San Francisco, CA'
  )
  const [selectedDay, setSelectedDay] = useState<string | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined
  )
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation)
  }

  const handleDayChange = (day: string) => {
    setSelectedDay(day)
  }

  const handleTimeChange = (time: string) => {
    setSelectedTime(time)
  }

  return (
    <AppContext.Provider
      value={{
        location,
        handleLocationChange,
        selectedDay,
        handleDayChange,
        selectedTime,
        handleTimeChange,
        weatherData,
        setWeatherData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
