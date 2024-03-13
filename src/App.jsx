import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/SignUp'
import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  )
}

export default App
