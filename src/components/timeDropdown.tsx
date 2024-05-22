import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

const timesOfDay = ['Morning', 'Afternoon', 'Evening']

interface TimeDropdownProps {
  selectedDay?: string
  handleDayChange: (day: string) => void
  selectedTime?: string
  handleTimeChange: (time: string) => void
}

export const TimeDropdown = ({
  selectedDay,
  selectedTime,
  handleDayChange,
  handleTimeChange,
}: TimeDropdownProps) => {
  const handleOnSelect = (day: string) => {
    handleDayChange(day)
  }

  const handleOnSelectTime = (time: string) => {
    handleTimeChange(time)
  }

  return (
    <div className='flex items-center space-x-4'>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center space-x-2'>
          {selectedDay ? <p>Every {selectedDay}</p> : <p>Select a day</p>}
          <ChevronDownIcon className='h-5 w-5' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a day</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {daysOfWeek.map((day) => (
            <DropdownMenuItem onSelect={() => handleOnSelect(day)} key={day}>
              {day}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center space-x-2'>
          {selectedTime ? <p>Every {selectedTime}</p> : <p>Select a time</p>}
          <ChevronDownIcon className='h-5 w-5' />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a timeframe</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {timesOfDay.map((time) => (
            <DropdownMenuItem
              onSelect={() => handleOnSelectTime(time)}
              key={time}
            >
              {time}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
