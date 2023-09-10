import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./pages/Login.tsx"
import CreateAccount from './pages/CreateAccount.tsx'

function App() {

  return (
    <Routes>
      <Route path="/" element= {<Login />} />
      <Route path="/create" element= {<CreateAccount />} />
    </Routes>
  )
}

export default App
