import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./pages/Login.tsx"
import Register from './pages/Register.tsx'
import Home from './components/Home.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element= {<Login />} />
      <Route path="/create" element= {<Register />} />
      <Route path="/home" element= {<Home />} />
    </Routes>
  )
}

export default App
