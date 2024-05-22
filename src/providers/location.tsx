import { createContext, ReactNode, useContext, useState } from 'react'

// Define a type for the context value
export interface LocationContextType {
  location: string
  handleLocationChange: (newLocation: string) => void
}

const LocationContext = createContext<LocationContextType | undefined>({
  location: 'San Francisco, CA',
  handleLocationChange: () => {},
})
export const useLocation = () => useContext(LocationContext)

export const LocationProvider = ({ children }: { children: ReactNode[] }) => {
  const [location, setLocation] = useState('')

  const handleLocationChange = (newLocation: string) => {
    setLocation(newLocation)
  }

  return (
    <LocationContext.Provider value={{ location, handleLocationChange }}>
      {children}
    </LocationContext.Provider>
  )
}
