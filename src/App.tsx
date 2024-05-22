import './App.css'
import Header from './features/Header'
import { LocationTimeInputs } from './features/LocationTimeInputs'
import { AppProvider } from '@/context/AppContext'
// import { PastGraph } from './features/pastGraph'
import { WeatherInfo } from './features/WeatherInfo'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AppProvider>
      <Header />
      <main
        className='flex-1 flex flex-col items-center mt-10 
      sm:p-12'
      >
        {/* <main> */}
        <LocationTimeInputs />
        <WeatherInfo />
        {/* <PastGraph /> */}
        {/* <TimeDropdown />
        <LocationInput /> */}
      </main>
    </AppProvider>
  )
}

export default App
