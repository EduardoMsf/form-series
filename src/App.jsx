import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormSeries } from './components/FormSeries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormSeries/>
    </>
  )
}

export default App
