import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./pages/Login.tsx"
import CreateAccount from './pages/CreateAccount.tsx'
import Home from './pages/Home.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element= {<Login />} />
      <Route path="/create" element= {<CreateAccount />} />
      <Route path="/home" element= {<Home />} />
    </Routes>
  )
}

export default App
