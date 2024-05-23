import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { verticalLinePlugin } from '@/lib/graph'

const labels = [
  '0:00',
  '1:00',
  '2:00',
  '3:00',
  '4:00',
  '5:00',
  '6:00',
  '7:00',
  '8:00',
  '9:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
]

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export interface GraphData {
  temp: number[]
  precip: number[]
  windspeed: number[]
}

interface GraphProps {
  data: GraphData
  interval: { start: string; end: string }
}

export const Graph = ({ data, interval }: GraphProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      verticalLinePlugin: {
        intervals: [{ interval }],
        lineColor: 'rgba(0, 0, 0, 0.8)',
        lineWidth: 2,
        lineDash: [5, 5],
      },
    },
  }

  const lineGraphData = {
    labels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.temp,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Precipitation (mm)',
        data: data.precip,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Wind Speed (km/h)',
        data: data.windspeed,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  }

  return (
    <Line
      options={options}
      data={lineGraphData}
      height={400}
      plugins={[verticalLinePlugin]}
    />
  )
}
