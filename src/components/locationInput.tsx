import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/debounce'

interface LocationInputProps {
  location: string
  handleLocationChange: (location: string) => void
}

export const LocationInput = ({
  location,
  handleLocationChange,
}: LocationInputProps) => {
  const [inputValue, setInputValue] = useState(location)

  const debouncedInputValue = useDebounce(inputValue ?? '', 500) // 500ms debounce delay

  useEffect(() => {
    handleLocationChange(debouncedInputValue)
  }, [debouncedInputValue, handleLocationChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value.trim()
    if (data !== '') {
      setInputValue(e.target.value)
    }
  }

  return (
    <div className='flex'>
      <Input
        className=' p-0 !border-none !outline-none !ring-0 shadow-none text-lg font-semibold'
        onChange={handleChange}
        placeholder='Enter location'
        defaultValue={'San Francisco, CA'}
      />
    </div>
  )
}

export default LocationInput
