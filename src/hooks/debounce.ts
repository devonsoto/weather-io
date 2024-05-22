import { useState, useEffect } from 'react'

export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Cleanup timeout if value or delay changes before the delay is over
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
