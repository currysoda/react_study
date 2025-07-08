import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from './components/DataDisplay'
import { Routes, Route } from 'react-router-dom'
import Example from './components/example'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Example />} />
      
      <Route path="/home" element={<DataDisplay />} />
    </Routes>
  )
}

export default App
