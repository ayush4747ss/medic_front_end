import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Layout from './components/Layout'


function App() {

  return (
    <>
     <Navbar />
     <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/login' element={<Login />} />
     </Routes>
    </>
  )
}

export default App
