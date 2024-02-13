import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FormSeries } from './components/FormSeries'
import { AppTheme } from './theme/AppTheme'

function App() {
  return (
    <AppTheme>
      <FormSeries/>
    </AppTheme>
  )
}

export default App
