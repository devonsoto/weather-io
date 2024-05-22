// import { useAppContext } from '@/context/AppContext'
// import { useEffect, useState } from 'react'

// export const PastGraph = () => {
//   const { location, selectedDay, selectedTime, weatherData } = useAppContext()
//   const [chartData, setChartData] = useState<unknown>(null)

//   console.log('chartData', chartData)

//   useEffect(() => {
//     if (weatherData) {
//       console.log('weatherData', weatherData)
//       const currentWeather = weatherData.days[0]
//       const currentHours = currentWeather.hours
//       // const labels = weatherData.map((day: any) => day.datetime)
//       // const temperatures = weatherData.map((day: any) => day.temp)
//       // const precipitation = weatherData.map((day: any) => day.precip)

//       // const data = {
//       //   labels,
//       //   datasets: [
//       //     {
//       //       label: 'Temperature (°C)',
//       //       data: temperatures,
//       //       borderColor: 'rgb(75, 192, 192)',
//       //       backgroundColor: 'rgba(75, 192, 192, 0.2)',
//       //     },
//       //     {
//       //       label: 'Precipitation (mm)',
//       //       data: precipitation,
//       //       borderColor: 'rgb(54, 162, 235)',
//       //       backgroundColor: 'rgba(54, 162, 235, 0.2)',
//       //     },
//       //   ],
//       // }
//       // setChartData(data)
//     }
//   }, [weatherData])
//   return (
//     <div className='flex flex-1 w-full h-full items-center justify-between'>
//       <div>
//         <div>graph1</div>
//       </div>
//       <div>
//         <div>graph 2</div>
//       </div>
//     </div>
//   )
// }
