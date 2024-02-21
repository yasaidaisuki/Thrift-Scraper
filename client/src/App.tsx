import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import Login from "./pages/Login.tsx"
import Register from './pages/Register.tsx'
import Dashboard from './components/Dashboard.tsx'

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const setAuth = boolean => {
    setAuth(boolean);
  };


  return (
    <Routes>
      <Route path="/" element= {<Login setAuth = {setAuth}/>} />
      <Route path="/create" element= {<Register setAuth = {setAuth}/>} />
      <Route path="/home" element= {<Dashboard setAuth = {setAuth}/>} />
    </Routes>
  )
}

export default App
