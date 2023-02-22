import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Personalnfo from './Components/frame1/Personalnfo'
import Experience from './Components/frame2/Experience'
import Skills from './Components/frame3/Skills'
import BankDetails from './Components/frame4/BankDetails'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Personalnfo/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/bankdetails' element={<BankDetails/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App