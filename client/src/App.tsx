import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./pages/Login.tsx"
import Register from './pages/Register.tsx'
import Dashboard from './components/Home/Dashboard.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element= {<Login />} />
      <Route path="/create" element= {<Register />} />
      <Route path="/home" element= {<Dashboard/>} />
    </Routes>
  )
}

export default App
