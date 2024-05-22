export const getNextTwoDatesForDay = (day: string): [string, string] => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const currentDate = new Date()
  const currentDayIndex = currentDate.getDay()
  const targetDayIndex = daysOfWeek.indexOf(day)

  if (targetDayIndex === -1) {
    throw new Error('Invalid day')
  }

  let daysUntilNextTargetDay = targetDayIndex - currentDayIndex
  if (daysUntilNextTargetDay < 0) {
    daysUntilNextTargetDay += 7
  }

  const nextTargetDate = new Date()
  nextTargetDate.setDate(currentDate.getDate() + daysUntilNextTargetDay)
  const nextTargetDateFormatted = nextTargetDate.toISOString().split('T')[0]

  const nextNextTargetDate = new Date(nextTargetDate)
  nextNextTargetDate.setDate(nextTargetDate.getDate() + 7)
  const nextNextTargetDateFormatted = nextNextTargetDate
    .toISOString()
    .split('T')[0]

  return [nextTargetDateFormatted, nextNextTargetDateFormatted]
}
