import './App.css'
import Header from './features/Header'
import { LocationTimeInputs } from './features/LocationTimeInputs'
import { AppProvider } from '@/context/AppContext'
import { WeatherInfo } from './features/WeatherInfo'

function App() {
  return (
    <AppProvider>
      <Header />
      <main
        className='flex-1 flex flex-col items-center mt-10 
      sm:p-12'
      >
        <LocationTimeInputs />
        <WeatherInfo />
      </main>
    </AppProvider>
  )
}

export default App
